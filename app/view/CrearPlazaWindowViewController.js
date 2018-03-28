/*
 * File: app/view/CrearPlazaWindowViewController.js
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

Ext.define('Entregas100Web.view.CrearPlazaWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.crearplazawindow',

    onBtnCancelarClick: function(button, e, eOpts) {
        this.view.close();
    },

    onBtnGuardarClick: function(button, e, eOpts) {
        var me = this,
            crearPlazaForm = me.view.down("form").getForm(),
            plazasPanel = Ext.ComponentManager.get("plazasPanel"),
            plazasLocalStore = plazasPanel.getController().getStore("PlazasLocalStore"),
            record, waitWindow;

        if (crearPlazaForm.isValid()) {
            waitWindow = Ext.MessageBox.wait("Agregando plaza...");
            record = Ext.create("Entregas100Web.model.PlazaModel", crearPlazaForm.getFieldValues());
            plazasLocalStore.add(record);
            window.store =plazasLocalStore;
            plazasLocalStore.sync({
                success: onSyncSuccess
            });
        }

        function onSyncSuccess() {
            waitWindow.close();
            me.view.close();
        }
    }

});
