/*
 * File: app/view/WindowNewManguera.js
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

Ext.define('Entregas100Web.view.WindowNewManguera', {
    extend: 'Ext.window.Window',
    alias: 'widget.windownewmanguera',

    requires: [
        'Entregas100Web.view.WindowNewMangueraViewModel',
        'Entregas100Web.view.WindowNewMangueraViewController',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Spacer',
        'Ext.button.Button'
    ],

    controller: 'windownewmanguera',
    viewModel: {
        type: 'windownewmanguera'
    },
    modal: true,
    height: 590,
    width: 400,
    title: 'Agregar manguera',

    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            title: '',
            items: [
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbPlaza',
                    fieldLabel: 'Plaza',
                    name: 'plaza_id',
                    allowBlank: false,
                    displayField: 'nom_plaza',
                    queryMode: 'local',
                    valueField: 'id_plaza',
                    listeners: {
                        change: 'onCmbPlazaChange'
                    }
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbPlanta',
                    fieldLabel: 'Planta',
                    name: 'planta_id',
                    allowBlank: false,
                    displayField: 'nom_planta',
                    queryMode: 'local',
                    valueField: 'id_planta'
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbClave',
                    fieldLabel: 'Clave',
                    name: 'cvecia_id',
                    allowBlank: false,
                    displayField: 'clave',
                    queryMode: 'local',
                    valueField: 'id_cvecia'
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbCanalVenta',
                    fieldLabel: 'Canal de venta',
                    name: 'rubro_venta_id',
                    allowBlank: false,
                    displayField: 'nombre',
                    queryMode: 'local',
                    valueField: 'id_rubro_venta',
                    listeners: {
                        change: 'onCmbCanalVentaChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtNumEco',
                    fieldLabel: 'Num. Eco',
                    name: 'num_eco',
                    listeners: {
                        change: 'onTxtNumEcoChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtNumEstacion',
                    fieldLabel: 'Num. Estación',
                    name: 'num_estacion',
                    listeners: {
                        change: 'onTxtNumEstacionChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtNumBascula',
                    fieldLabel: 'Num. Bascula',
                    name: 'num_bascula',
                    listeners: {
                        change: 'onTxtNumBasculaChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtNumRed',
                    fieldLabel: 'Num. Red',
                    name: 'num_red',
                    listeners: {
                        change: 'onTxtNumRedChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtSubRed',
                    fieldLabel: 'Sub-red',
                    name: 'sub_red',
                    listeners: {
                        change: 'onTxtSubRedChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtNumBomba',
                    fieldLabel: 'Num. Bomba',
                    name: 'num_bomba',
                    listeners: {
                        change: 'onTxtNumBombaChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    disabled: true,
                    itemId: 'txtDescripcion',
                    fieldLabel: 'Descripción',
                    name: 'descrip_manguera'
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    hidden: true,
                    itemId: 'id_manguera',
                    fieldLabel: 'Label',
                    name: 'num_manguera'
                },
                {
                    xtype: 'container',
                    hidden: true,
                    itemId: 'descripcion1',
                    layout: 'column',
                    items: [
                        {
                            xtype: 'textfield',
                            itemId: 'text1',
                            width: 200,
                            fieldLabel: 'Descripción'
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'num1',
                            width: 47,
                            editable: false
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'text2',
                            width: 80
                        },
                        {
                            xtype: 'textfield',
                            itemId: 'num2',
                            width: 47,
                            editable: false
                        }
                    ]
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