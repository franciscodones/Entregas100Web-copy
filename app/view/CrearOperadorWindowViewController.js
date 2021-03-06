/*
 * File: app/view/CrearOperadorWindowViewController.js
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

Ext.define('Entregas100Web.view.CrearOperadorWindowViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.crearoperadorwindow',

    onBtnCancelarClick: function(button, e, eOpts) {
        this.view.close();
    },

    onBtnGuardarClick: function(button, e, eOpts) {
        var me = this,
            crearOperadorForm = me.view.down("form").getForm(),
            nombrePlaza = me.view.down("#cmbPlaza").getDisplayValue(),
            tipoUsuario = me.view.down("#cmbTipoUsuario").getDisplayValue(),
            operadoresPanel = Ext.ComponentManager.get("operadoresPanel"),
            operadoresLocalStore = operadoresPanel.getController().getStore("OperadoresLocalStore"),
            record, waitWindow;

        if (crearOperadorForm.isValid()) {
            waitWindow = Ext.MessageBox.wait("Agregando operador...");
            record = Ext.create(
            "Entregas100Web.model.OperadorModel",
            Ext.apply(crearOperadorForm.getFieldValues(), {nombre_plaza: nombrePlaza, tipo_usuario: tipoUsuario})
            );
            operadoresLocalStore.add(record);
            operadoresLocalStore.sync({
                success: onSyncSuccess
            });
        }

        function onSyncSuccess() {
            waitWindow.close();
            me.view.close();
        }
    }

});
