/*
 * File: app/view/TarifasPanel.js
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

Ext.define('Entregas100Web.view.TarifasPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.tarifaspanel',

    requires: [
        'Entregas100Web.view.TarifasPanelViewModel',
        'Entregas100Web.view.TarifasPanelViewController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.form.field.Number',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.filters.filter.String',
        'Ext.grid.column.Boolean',
        'Ext.grid.filters.filter.Boolean',
        'Ext.form.field.Checkbox',
        'Ext.view.Table',
        'Ext.grid.filters.Filters',
        'Ext.selection.CheckboxModel',
        'Ext.grid.plugin.RowEditing',
        'Pyansa.window.dialog.ComboBox'
    ],

    controller: 'tarifaspanel',
    viewModel: {
        type: 'tarifaspanel'
    },
    id: 'tarifasPanel',
    closable: true,
    glyph: 'f155@FontAwesome',
    title: 'Tarifas',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            items: [
                {
                    xtype: 'button',
                    itemId: 'btnRefrescar',
                    ui: 'default-small',
                    glyph: 'f021@FontAwesome',
                    text: 'Refrescar',
                    listeners: {
                        click: 'onBtnRefrescarClick'
                    }
                },
                {
                    xtype: 'numberfield',
                    permissionId: 45,
                    itemId: 'txtAumentoGas',
                    width: 180,
                    fieldLabel: 'Aumento Gas',
                    validateOnChange: false,
                    validateOnBlur: false,
                    hideTrigger: true
                },
                {
                    xtype: 'numberfield',
                    permissionId: 45,
                    itemId: 'txtAumentoAditivo',
                    margin: '0 0 0 10',
                    width: 180,
                    fieldLabel: 'Aumento AD+',
                    validateOnChange: false,
                    validateOnBlur: false,
                    hideTrigger: true
                },
                {
                    xtype: 'button',
                    permissionId: 45,
                    itemId: 'btnAplicar',
                    glyph: 'f058@FontAwesome',
                    text: 'Aplicar',
                    listeners: {
                        click: 'onBtnAplicarClick'
                    }
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            showMenuTriggers: true,
            showMenuHint: true,
            flex: 1,
            itemId: 'tarifasGrid',
            scrollable: true,
            autoLoad: true,
            columnLines: true,
            enableColumnHide: false,
            enableColumnMove: false,
            bind: {
                store: '{TarifasLocalStore}'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    width: 80,
                    dataIndex: 'cvetar',
                    text: 'Clave',
                    format: '0,000',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'numbercolumn',
                    width: 120,
                    dataIndex: 'precio2',
                    text: 'Precio Gas'
                },
                {
                    xtype: 'numbercolumn',
                    width: 120,
                    dataIndex: 'aditivo2',
                    text: 'Precio AD+'
                },
                {
                    xtype: 'booleancolumn',
                    width: 110,
                    dataIndex: 'es_base',
                    text: 'Tarifa Base',
                    falseText: 'NO',
                    trueText: 'SI',
                    undefinedText: 'DESCONOCIDO',
                    filter: {
                        type: 'boolean'
                    },
                    editor: {
                        xtype: 'checkboxfield'
                    }
                }
            ],
            viewConfig: {
                emptyText: 'No se encontraron resultados'
            },
            plugins: [
                {
                    ptype: 'gridfilters'
                },
                {
                    ptype: 'rowediting',
                    listeners: {
                        beforeedit: 'onRowEditingBeforeEdit',
                        edit: 'onRowEditingEdit'
                    }
                }
            ],
            selModel: {
                selType: 'checkboxmodel'
            }
        }
    ],
    listeners: {
        beforerender: 'onTarifasPanelBeforeRender'
    }

});