/*
 * File: app/view/CrearPlazaWindow.js
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

Ext.define('Entregas100Web.view.CrearPlazaWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.crearplazawindow',

    requires: [
        'Entregas100Web.view.CrearPlazaWindowViewModel',
        'Entregas100Web.view.CrearPlazaWindowViewController',
        'Ext.form.Panel',
        'Ext.form.FieldContainer',
        'Ext.toolbar.Spacer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Number',
        'Ext.button.Button'
    ],

    controller: 'crearplazawindow',
    viewModel: {
        type: 'crearplazawindow'
    },
    modal: true,
    draggable: false,
    id: 'crearPlazaWindow',
    maxHeight: 460,
    resizable: false,
    scrollable: 'both',
    width: 600,
    glyph: 'f055@FontAwesome',
    title: 'Nueva Plaza',

    items: [
        {
            xtype: 'form',
            trimValues: true,
            itemId: 'crearPlazaForm',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            transformToUpper: true,
                            flex: 1,
                            fieldLabel: 'Clave (3 Digitos)',
                            name: 'plaza',
                            allowBlank: false,
                            maxLength: 3,
                            minLength: 3
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            transformToUpper: true,
                            flex: 1,
                            fieldLabel: 'Clave (2 Digitos)',
                            name: 'plaza2',
                            allowBlank: false,
                            maxLength: 2,
                            minLength: 2
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            transformToUpper: true,
                            flex: 1,
                            fieldLabel: 'Plaza',
                            name: 'ciudad',
                            allowBlank: false
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            transformToUpper: true,
                            flex: 1,
                            fieldLabel: 'Estado',
                            name: 'estado',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'combobox',
                            flex: 1,
                            fieldLabel: 'Empresa',
                            name: 'empresa_id',
                            allowBlank: false,
                            editable: false,
                            matchFieldWidth: false,
                            displayField: 'razon_social',
                            forceSelection: true,
                            valueField: 'id',
                            bind: {
                                store: '{EmpresasLocalStore}'
                            }
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            transformToUpper: true,
                            flex: 1,
                            fieldLabel: 'Permiso',
                            name: 'permiso',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'textfield',
                    transformToUpper: true,
                    anchor: '100%',
                    fieldLabel: 'Dirección',
                    name: 'direccion_sucursal',
                    allowBlank: false
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Tel. Pedidos',
                            name: 'telefono_pedido',
                            inputType: 'tel',
                            allowBlank: false
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'checkboxfield',
                            flex: 1,
                            name: 'otorga_puntos',
                            boxLabel: 'Aplica SUMA PUNTOS',
                            inputValue: 'true',
                            uncheckedValue: 'false'
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Tel. Quejas 1',
                            name: 'telefono_queja',
                            inputType: 'tel',
                            allowBlank: false
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'textfield',
                            flex: 1,
                            fieldLabel: 'Tel. Quejas 2',
                            name: 'telefono_queja2',
                            inputType: 'tel',
                            allowBlank: false
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            fieldLabel: 'Factor Control',
                            name: 'factor_control',
                            allowBlank: false,
                            hideTrigger: true
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            fieldLabel: 'Factor Space',
                            name: 'factor_space',
                            allowBlank: false,
                            hideTrigger: true
                        }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            fieldLabel: 'Total de Clientes',
                            labelWidth: 120,
                            name: 'clientes_estacionario',
                            allowBlank: false,
                            hideTrigger: true,
                            allowDecimals: false,
                            minValue: 500
                        },
                        {
                            xtype: 'tbspacer',
                            width: 20
                        },
                        {
                            xtype: 'numberfield',
                            flex: 1,
                            fieldLabel: 'Clientes por partes',
                            labelWidth: 120,
                            name: 'limite_descarga',
                            allowBlank: false,
                            hideTrigger: true,
                            allowDecimals: false,
                            maxValue: 3000,
                            minValue: 500
                        }
                    ]
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
                            ui: 'default-medium',
                            width: 120,
                            glyph: 'f057@FontAwesome',
                            scale: 'medium',
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
                            ui: 'default-medium',
                            width: 120,
                            glyph: 'f058@FontAwesome',
                            scale: 'medium',
                            text: 'Guardar',
                            listeners: {
                                click: 'onBtnGuardarClick'
                            }
                        }
                    ]
                }
            ]
        }
    ]

});