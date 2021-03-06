/*
 * File: app/view/TablaPuntosPanelViewController.js
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

Ext.define('Entregas100Web.view.TablaPuntosPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tablapuntospanel',

    onBtnRefrescarClick: function(button, e, eOpts) {
        this.getStore("TablaPuntosLocalStore").load();
    },

    onBtnAgregarClick: function(button, e, eOpts) {
        var crearTablaPuntosWindow = new Entregas100Web.view.CrearTablaPuntosWindow();

        crearTablaPuntosWindow.show();
    }

});
