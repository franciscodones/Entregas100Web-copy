/**
 * Sobreescritura de Ext.MessageBox.
 * Actualmente solo se declara esta clase para que los estilos puedan ser detectados y compilados
 *
 * @override
 */
Ext.define("Pyansa.overrides.MessageBox", {
    override: "Ext.MessageBox",

    config: {
        maxWidth: 500
    },

    statics: {
        LOADING : Ext.baseCSSPrefix + 'msgbox-loading'
    }
});
