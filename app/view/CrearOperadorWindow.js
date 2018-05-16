/*
 * File: app/view/CrearOperadorWindow.js
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

Ext.define('Entregas100Web.view.CrearOperadorWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.crearoperadorwindow',

    requires: [
        'Entregas100Web.view.CrearOperadorWindowViewModel',
        'Entregas100Web.view.CrearOperadorWindowViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.toolbar.Spacer',
        'Ext.form.field.Hidden'
    ],

    controller: 'crearoperadorwindow',
    viewModel: {
        type: 'crearoperadorwindow'
    },
    modal: true,
    width: 400,
    glyph: 'f0c0@FontAwesome',
    title: 'Nuevo Operador',

    items: [
        {
            xtype: 'form',
            trimValues: true,
            itemId: 'crearOperadorForm',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'textfield',
                    transformToUpper: true,
                    anchor: '100%',
                    fieldLabel: 'Nombre',
                    name: 'nombre',
                    allowBlank: false
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbTipoUsuario',
                    fieldLabel: 'Tipo de Usuario',
                    name: 'tipo_usuario_id',
                    allowBlank: false,
                    editable: false,
                    forceSelection: true,
                    queryMode: 'local',
                    store: [
                        [
                            1,
                            'CHOFER'
                        ],
                        [
                            2,
                            'SUPERVISOR'
                        ],
                        [
                            3,
                            'JEFE OPERATIVO'
                        ],
                        [
                            4,
                            'TECNICO'
                        ]
                    ]
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbPlaza',
                    fieldLabel: 'Plaza',
                    name: 'plaza_id',
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
                },
                {
                    xtype: 'hiddenfield',
                    anchor: '100%',
                    name: 'estatus',
                    value: true
                }
            ]
        }
    ]

});