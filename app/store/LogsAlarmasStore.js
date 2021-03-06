/*
 * File: app/store/LogsAlarmasStore.js
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

Ext.define('Entregas100Web.store.LogsAlarmasStore', {
    extend: 'Ext.data.Store',
    alias: 'store.logsalarmasstore',

    requires: [
        'Entregas100Web.model.LogAlarmaModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'LogsAlarmasStore',
            model: 'Entregas100Web.model.LogAlarmaModel',
            proxy: {
                type: 'ajax',
                url: 'api/logsAlarmas/read',
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    rootProperty: 'records'
                }
            }
        }, cfg)]);
    }
});