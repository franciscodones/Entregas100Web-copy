/*
 * File: app/view/ScriptRemotoPanelViewModel.js
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

Ext.define('Entregas100Web.view.ScriptRemotoPanelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.scriptremotopanel',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.data.field.String'
    ],

    stores: {
        versionesStore: {
            proxy: {
                type: 'ajax',
                url: 'api/scriptRemoto/versiones',
                reader: {
                    type: 'json',
                    messageProperty: 'message',
                    rootProperty: 'records'
                }
            },
            fields: [
                {
                    type: 'string',
                    name: 'version'
                }
            ]
        },
        scriptRemotosStore: {
            type: 'scriptremotosstore',
            model: 'Entregas100Web.model.ScriptRemoto'
        }
    }

});