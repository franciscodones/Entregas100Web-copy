/*
 * File: app/store/EmpresasStore.js
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

Ext.define('Entregas100Web.store.EmpresasStore', {
    extend: 'Ext.data.Store',
    alias: 'store.empresasstore',

    requires: [
        'Entregas100Web.model.EmpresaModel',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'EmpresasStore',
            model: 'Entregas100Web.model.EmpresaModel',
            proxy: {
                type: 'ajax',
                api: {
                    read: 'api/empresas/read'
                },
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    rootProperty: 'records'
                }
            }
        }, cfg)]);
    }
});