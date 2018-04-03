/*
 * File: app/view/EditarZonaWindow.js
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

Ext.define('Entregas100Web.view.EditarZonaWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.editarzonawindow',

    requires: [
        'Entregas100Web.view.EditarZonaWindowViewModel',
        'Entregas100Web.view.EditarZonaWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.Number',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.toolbar.Spacer'
    ],

    controller: 'editarzonawindow',
    viewModel: {
        type: 'editarzonawindow'
    },
    modal: true,
    id: 'editarZonaWindow',
    width: 400,
    glyph: 'f041@FontAwesome',
    title: 'Editar Zona',

    items: [
        {
            xtype: 'form',
            trimValues: true,
            itemId: 'editarZonaForm',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'hiddenfield',
                    anchor: '100%',
                    name: 'id'
                },
                {
                    xtype: 'numberfield',
                    anchor: '100%',
                    fieldLabel: 'Zona',
                    name: 'zona',
                    allowBlank: false,
                    hideTrigger: true,
                    allowDecimals: false,
                    allowExponential: false,
                    maxValue: 100,
                    minValue: 0
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbPlaza',
                    fieldLabel: 'Plaza',
                    name: 'plaza_id',
                    readOnly: true,
                    allowBlank: false,
                    editable: false,
                    displayField: 'ciudad',
                    forceSelection: true,
                    valueField: 'id',
                    bind: {
                        store: '{PlazasLocalStore}'
                    }
                },
                {
                    xtype: 'textfield',
                    transformToUpper: true,
                    anchor: '100%',
                    fieldLabel: 'Descripción',
                    name: 'descripcion',
                    allowBlank: false
                },
                {
                    xtype: 'checkboxfield',
                    anchor: '100%',
                    hideEmptyLabel: false,
                    name: 'ayudante',
                    boxLabel: 'Requiere ayudante',
                    checked: true,
                    inputValue: 'true',
                    uncheckedValue: 'false'
                },
                {
                    xtype: 'fieldcontainer',
                    margin: '20 0 0 0',
                    layout: {
                        type: 'hbox',
                        align: 'stretch',
                        pack: 'center'
                    },
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'btnCancelar',
                            width: 120,
                            glyph: 'f057@FontAwesome',
                            text: 'Cancelar',
                            listeners: {
                                click: 'onBtnCancelarClick'
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'button',
                            itemId: 'btnGuardar',
                            width: 120,
                            glyph: 'f058@FontAwesome',
                            text: 'Guardar',
                            listeners: {
                                click: 'onBtnGuardarClick'
                            }
                        }
                    ]
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onEditarZonaWindowAfterRender'
    }

});