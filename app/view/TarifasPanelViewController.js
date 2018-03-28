/*
 * File: app/view/TarifasPanelViewController.js
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

Ext.define('Entregas100Web.view.TarifasPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tarifaspanel',

    onBtnRefrescarClick: function(button, e, eOpts) {
        this.getStore("TarifasLocalStore").load();
    },

    onBtnAplicarClick: function(button, e, eOpts) {
        var me = this,
            txtAumentoGas = me.view.down("#txtAumentoGas"),
            txtAumentoAditivo = me.view.down("#txtAumentoAditivo"),
            tarifasGrid = me.view.down("#tarifasGrid"),
            tarifasLocalStore = me.getStore("TarifasLocalStore"),
            tarifasSelection = tarifasGrid.getSelection();

        if (txtAumentoGas.isValid() && txtAumentoAditivo.isValid()) {
            if (tarifasSelection.length > 0) {
                Ext.Array.each(tarifasGrid.getSelection(), function(record) {
                    record.set("precio2", record.get("precio2") + txtAumentoGas.getValue());
                    record.set("aditivo2", record.get("aditivo2") + txtAumentoAditivo.getValue());
                });
                tarifasLocalStore.sync();
            } else {
                Ext.Msg.show({
                    title: 'Mensaje del Sistema',
                    message: "Selecciona almenos una tarifa",
                    buttons: Ext.Msg.OK,
                    icon: Ext.Msg.ERROR
                });
            }
        }
    },

    onRowEditingBeforeEdit: function(editor, context, eOpts) {
        if (context.record.get("es_base")) {
            return false;
        }
    },

    onRowEditingEdit: function(editor, context, eOpts) {
        var record = context.record,
            store = context.store;

        if (record.get("es_base")) {
            store.each(function(rec) {
                if (record.get("cvetar") != rec.get("cvetar")) {
                    rec.set("es_base", false);
                }
            });
            store.sync();
        }
    },

    onTarifasPanelBeforeRender: function(component, eOpts) {
        var me = this;

        me.getStore("TarifasLocalStore").getProxy().setExtraParam("plaza_id", me.getViewModel().get("plazaId"));
    }

});
