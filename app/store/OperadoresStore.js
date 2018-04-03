/*
 * File: app/store/OperadoresStore.js
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

Ext.define('Entregas100Web.store.OperadoresStore', {
    extend: 'Ext.data.Store',
    alias: 'store.operadoresstore',

    requires: [
        'Entregas100Web.model.OperadorModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.writer.Json'
    ],

    config: {
        rejectOnExceptions: true
    },

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'OperadoresStore',
            model: 'Entregas100Web.model.OperadorModel',
            proxy: {
                type: 'ajax',
                api: {
                    create: 'api/operadores/create',
                    read: 'api/operadores/read',
                    update: 'api/operadores/update'
                },
                reader: {
                    type: 'json'
                },
                writer: {
                    type: 'json'
                }
            }
        }, cfg)]);
    }
});