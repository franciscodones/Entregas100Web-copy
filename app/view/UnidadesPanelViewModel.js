/*
 * File: app/view/UnidadesPanelViewModel.js
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

Ext.define('Entregas100Web.view.UnidadesPanelViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.unidadespanel',

    requires: [
        'Ext.data.Store',
        'Ext.util.Filter'
    ],

    stores: {
        UnidadesLocalStore: {
            type: 'unidadesstore',
            model: 'Entregas100Web.model.UnidadModel',
            filters: {
                filterFn: function(item) {
                    return Ext.isEmpty(Ext._.usuario.plaza_id) || Ext.Array.contains(Ext._.usuario.plaza_id, item.get("plaza_id"));
                },
                id: 'permiso-plazas'
            }
        },
        FoliosLocalStore: {
            type: 'unidadesstore',
            model: 'Entregas100Web.model.UnidadModel'
        },
        OperadoresLocalStore: {
            type: 'operadoresstore',
            model: 'Entregas100Web.model.OperadorModel',
            filters: [
                {
                    filterFn: function(item) {
                        return Ext.isEmpty(Ext._.usuario.plaza_id) || Ext.Array.contains(Ext._.usuario.plaza_id, item.get("plaza_id"));
                    },
                    id: 'permiso-plazas'
                },
                {
                    filterFn: function(item) {
                        return item.get("sesion");
                    },
                    id: 'sesion-iniciada'
                },
                {
                    filterFn: function(item) {
                        return false;
                    },
                    id: 'unidad-seleccionada'
                }
            ]
        }
    }

});