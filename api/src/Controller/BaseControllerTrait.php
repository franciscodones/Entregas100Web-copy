<?php

namespace App\Controller;

use Cake\Datasource\ConnectionManager;
use Exception;
use Cake\Network\Request;
use Pyansa\Network\CorsBuilder;
use Cake\Core\Configure;

trait BaseControllerTrait
{
    /**
     * Sobreescribe la funcion initialize para realizar algunas preconfiguraciones
     *
     * @return void
     */
    public function initialize()
    {
        $this->preconfigureCors();
    }

    /**
     * Preconfigura CORS con los valores proporcionados en config
     *
     * @return void
     */
    private function preconfigureCors()
    {
        $corsConfig = Configure::read("Cors");

        if (!$corsConfig) {
            return;
        }

        $corsBuilder = $this->cors($this->request);

        if (array_key_exists("allowOrigins", $corsConfig)) {
            $corsBuilder->allowOrigin($corsConfig["allowOrigins"]);
        }

        if (array_key_exists("allowMethods", $corsConfig)) {
            $corsBuilder->allowMethods($corsConfig["allowMethods"]);
        }

        if (array_key_exists("allowHeaders", $corsConfig)) {
            $corsBuilder->allowHeaders($corsConfig["allowHeaders"]);
        }

        if (array_key_exists("allowCredentials", $corsConfig) && $corsConfig["allowCredentials"]) {
            $corsBuilder->allowCredentials();
        }

        if (array_key_exists("exposeHeaders", $corsConfig)) {
            $corsBuilder->exposeHeaders($corsConfig["exposeHeaders"]);
        }

        if (array_key_exists("maxAge", $corsConfig)) {
            $corsBuilder->maxAge($corsConfig["maxAge"]);
        }

        $corsBuilder->build();
    }

    /**
     * Retorna la conexion default o crea una nueva con los valores de `config`
     *
     * @param  string $name Nomber de la conexion
     * @param  array $config Configuracion de la conexion
     * @param  boolean $isSecure `true` para devolver un boolean en caso de error, `false` no cacha la excepcion
     * @return DataSource
     */
    public function getConexion($name = "default", $config = null, $secure = false)
    {
        try {
            if (empty($config)) {
                return ConnectionManager::get($name);
            } else {
                // crea una nueva conexion con config
                ConnectionManager::config(
                    $name,
                    array(
                        'className' => 'App\Database\Connection',
                        'driver' => 'Cake\Database\Driver\Mysql',
                        'persistent' => false,
                        'host' => $config['host'],
                        'username' => $config['user'],
                        'password' => $config['password'],
                        'database' => $config['database'],
                        'encoding' => 'utf8',
                        'cacheMetadata' => true,
                        'quoteIdentifiers' => false,
                        'log' => false,
                    )
                );
                return ConnectionManager::get($name);
            }
        } catch(Exception $ex) {
            if ($secure) {
                return null;
            } else {
                throw $ex;
            }
        }
    }

    /**
     * Se realiza el JSON con los datos a retornar con su debido Content-Type
     * y las propiedades normalmente usadas para ExtJS
     *
     * @return JsonResponse
     */
    public function asJson($data)
    {
        $data = array_merge(
            array(
                "success" => false,
                "message" => "",
                "records" => null,
                "metadata" => null
            ),
            $data
        );
        $this->response->type('json');
        $this->response->body(json_encode($data, JSON_NUMERIC_CHECK));
        return $this->response;
    }

    /**
     * Setup access for origin and methods on cross origin requests
     *
     * This method allow multiple ways to setup the domains, see the examples
     *
     * ### Full URI
     * ```
     * cors($request, 'http://www.cakephp.org');
     * ```
     *
     * ### URI with wildcard
     * ```
     * cors($request, 'http://*.cakephp.org');
     * ```
     *
     * ### Ignoring the requested protocol
     * ```
     * cors($request, 'www.cakephp.org');
     * ```
     *
     * ### Any URI
     * ```
     * cors($request, '*');
     * ```
     *
     * ### Whitelist of URIs
     * ```
     * cors($request, ['http://www.cakephp.org', '*.google.com', 'https://myproject.github.io']);
     * ```
     *
     * *Note* The `$allowedDomains`, `$allowedMethods`, `$allowedHeaders` parameters are deprecated.
     * Instead the builder object should be used.
     *
     * @param \Cake\Network\Request $request Request object
     * @param string|array $allowedDomains List of allowed domains, see method description for more details
     * @param string|array $allowedMethods List of HTTP verbs allowed
     * @param string|array $allowedHeaders List of HTTP headers allowed
     * @return \Cake\Network\CorsBuilder A builder object the provides a fluent interface for defining
     *   additional CORS headers.
     */
    public function cors(Request $request, $allowedDomains = [], $allowedMethods = [], $allowedHeaders = [])
    {
        $origin = $request->header('Origin');
        $ssl = $request->is('ssl');
        $builder = new CorsBuilder($this->response, $origin, $ssl);
        if (!$origin) {
            return $builder;
        }
        if (empty($allowedDomains) && empty($allowedMethods) && empty($allowedHeaders)) {
            return $builder;
        }
        $builder->allowOrigin($allowedDomains)
            ->allowMethods((array)$allowedMethods)
            ->allowHeaders((array)$allowedHeaders)
            ->build();
        return $builder;
    }
}
