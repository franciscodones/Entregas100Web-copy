/*
 * File: app/view/windowNewPermisos.js
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

Ext.define('Entregas100Web.view.windowNewPermisos', {
    extend: 'Ext.window.Window',
    alias: 'widget.windownewpermisos',

    requires: [
        'Entregas100Web.view.windowNewPermisosViewModel',
        'Entregas100Web.view.windowNewPermisosViewController',
        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Spacer',
        'Ext.button.Button'
    ],

    controller: 'windownewpermisos',
    viewModel: {
        type: 'windownewpermisos'
    },
    modal: true,
    height: 229,
    width: 400,
    title: 'Agregar permiso',

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            title: '',
            items: [
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtEstaPlanta',
                    fieldLabel: 'Estación/Planta',
                    editable: false,
                    listeners: {
                        change: 'onTxtEstaPlantaChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtPlantaId',
                    fieldLabel: 'Planta',
                    name: 'planta_id'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtPlaza',
                    fieldLabel: 'Label',
                    name: 'plaza'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtPlaza_id',
                    fieldLabel: 'Label',
                    name: 'plaza_id'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtNumEsta',
                    fieldLabel: 'Label',
                    name: 'num_estac'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtCvecia',
                    fieldLabel: 'Label',
                    name: 'cvecia'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'txtPlaEst',
                    fieldLabel: 'Label',
                    name: 'pla_est'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    itemId: 'txtPermiso',
                    fieldLabel: 'Permiso',
                    name: 'permiso',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    itemId: 'txtEstacionPlanta',
                    fieldLabel: 'Nombre Estación/Planta',
                    name: 'nompla_est'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnGuardar',
                            ui: 'default-medium',
                            glyph: 'f058@FontAwesome',
                            scale: 'medium',
                            text: 'Guardar',
                            listeners: {
                                click: 'onBtnGuardarClick'
                            }
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnSalir',
                            ui: 'default-medium',
                            glyph: 'f057@FontAwesome',
                            scale: 'medium',
                            text: 'Salir',
                            listeners: {
                                click: 'onBtnSalirClick'
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            flex: 1
                        }
                    ]
                }
            ]
        }
    ]

});