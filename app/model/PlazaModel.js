/*
 * File: app/model/PlazaModel.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Entregas100Web.model.PlazaModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Boolean',
        'Ext.data.field.Number'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'string',
            name: 'plaza'
        },
        {
            type: 'string',
            name: 'plaza2'
        },
        {
            type: 'string',
            name: 'ciudad'
        },
        {
            type: 'string',
            name: 'estado'
        },
        {
            type: 'int',
            name: 'empresa_id'
        },
        {
            type: 'string',
            name: 'permiso'
        },
        {
            type: 'string',
            name: 'direccion_sucursal'
        },
        {
            type: 'string',
            name: 'telefono_pedido'
        },
        {
            type: 'boolean',
            name: 'otorga_puntos'
        },
        {
            type: 'string',
            name: 'telefono_queja'
        },
        {
            type: 'string',
            name: 'telefono_queja2'
        },
        {
            type: 'float',
            name: 'factor_control'
        },
        {
            type: 'float',
            name: 'factor_space'
        },
        {
            type: 'int',
            name: 'clientes_estacionario'
        },
        {
            type: 'int',
            name: 'limite_descarga'
        },
        {
            type: 'string',
            name: 'ip_te'
        },
        {
            type: 'string',
            name: 'usuario_te'
        },
        {
            type: 'string',
            name: 'password_te'
        },
        {
            type: 'string',
            name: 'base_te'
        }
    ]
});