/*
 * File: app/view/EditarZonaWindowViewController.js
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

Ext.define('Entregas100Web.view.EditarZonaWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.editarzonawindow',

    onBtnCancelarClick: function(button, e, eOpts) {
        this.view.close();
    },

    onBtnGuardarClick: function(button, e, eOpts) {
        var me = this,
            editarZonaForm = me.view.down("form").getForm(),
            nombrePlaza = me.view.down("#cmbPlaza").getDisplayValue(),
            zonasPanel = Ext.ComponentManager.get("zonasPanel"),
            zonasLocalStore = zonasPanel.getController().getStore("ZonasLocalStore"),
            record, waitWindow;

        if (editarZonaForm.isValid()) {
            waitWindow = Ext.MessageBox.wait("Guardando cambios...");
            editarZonaForm.updateRecord();
            record = editarZonaForm.getRecord();

            // si el record no ha sufrigo cambios se termina la edicion
            if (!record.isDirty()) {
                waitWindow.close();
                me.view.close();
                return;
            }

            zonasLocalStore.sync({
                success: onSyncSuccess
            });
        }

        function onSyncSuccess() {
            waitWindow.close();
            me.view.close();
        }
    },

    onEditarZonaWindowAfterRender: function(component, eOpts) {
        var me = this;

        me.getStore("PlazasLocalStore").load();
    }

});
