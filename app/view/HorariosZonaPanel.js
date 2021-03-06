/*
 * File: app/view/HorariosZonaPanel.js
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

Ext.define('Entregas100Web.view.HorariosZonaPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.horarioszonapanel',

    requires: [
        'Entregas100Web.view.HorariosZonaPanelViewModel',
        'Entregas100Web.view.HorariosZonaPanelViewController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.filters.filter.String',
        'Ext.grid.filters.filter.List',
        'Ext.grid.column.Date',
        'Ext.view.Table',
        'Ext.grid.column.Action',
        'Ext.grid.filters.Filters'
    ],

    controller: 'horarioszonapanel',
    viewModel: {
        type: 'horarioszonapanel'
    },
    id: 'horariosZonaPanel',
    closable: true,
    glyph: 'f017@FontAwesome',
    title: 'Horarios de Lista',

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
                    xtype: 'button',
                    permissionId: 50,
                    itemId: 'btnAgregar',
                    glyph: 'f055@FontAwesome',
                    text: 'Agregar',
                    listeners: {
                        click: 'onBtnAgregarClick'
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
            itemId: 'horariosZonaGrid',
            scrollable: true,
            autoLoad: true,
            columnLines: true,
            enableColumnHide: false,
            enableColumnMove: false,
            bind: {
                store: '{HorariosZonaLocalStore}'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    width: 80,
                    dataIndex: 'zona',
                    text: 'Zona',
                    format: '0,000',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 150,
                    dataIndex: 'plaza',
                    text: 'Plaza',
                    filter: {
                        type: 'list'
                    }
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'hora_inicial',
                    text: 'Hora inicial',
                    format: 'g:i A'
                },
                {
                    xtype: 'datecolumn',
                    dataIndex: 'hora_final',
                    text: 'Hora final',
                    format: 'g:i A'
                },
                {
                    xtype: 'actioncolumn',
                    permissionId: 51,
                    width: 30,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var editarHorarioZonaWindow = Ext.create("Entregas100Web.view.EditarHorarioZonaWindow");

                                editarHorarioZonaWindow.down("form").loadRecord(record);
                                editarHorarioZonaWindow.show();
                            },
                            icon: 'resources/icon/editar.png',
                            tooltip: 'Editar'
                        }
                    ]
                },
                {
                    xtype: 'actioncolumn',
                    permissionId: 52,
                    width: 30,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var horariosZonaLocalStore = record.store;

                                Ext.Msg.confirm(
                                "Mensaje del sistema",
                                "??Desea eliminar el horario definitivamente?",
                                function(result) {
                                    if (result == "yes") {
                                        horariosZonaLocalStore.remove(record);
                                        horariosZonaLocalStore.sync();
                                    }
                                }
                                );
                            },
                            icon: 'resources/icon/garbage.png',
                            tooltip: 'Eliminar'
                        }
                    ]
                }
            ],
            viewConfig: {
                emptyText: 'No se encontraron resultados'
            },
            plugins: [
                {
                    ptype: 'gridfilters'
                }
            ]
        }
    ]

});