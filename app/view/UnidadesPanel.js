/*
 * File: app/view/UnidadesPanel.js
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

Ext.define('Entregas100Web.view.UnidadesPanel', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.unidadespanel',

    requires: [
        'Entregas100Web.view.UnidadesPanelViewModel',
        'Entregas100Web.view.UnidadesPanelViewController',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button',
        'Ext.grid.Panel',
        'Ext.grid.column.Number',
        'Ext.grid.filters.filter.String',
        'Ext.grid.filters.filter.List',
        'Ext.grid.column.Date',
        'Ext.grid.filters.filter.Date',
        'Ext.grid.column.Boolean',
        'Ext.grid.filters.filter.Boolean',
        'Ext.view.Table',
        'Ext.grid.column.Action',
        'Ext.grid.filters.Filters'
    ],

    controller: 'unidadespanel',
    viewModel: {
        type: 'unidadespanel'
    },
    id: 'unidadesPanel',
    closable: true,
    glyph: 'f0d1@FontAwesome',
    title: 'Unidades',

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
                    permissionId: 8,
                    itemId: 'btnAgregar',
                    glyph: 'f055 @FontAwesome',
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
            itemId: 'unidadesGrid',
            scrollable: true,
            autoLoad: true,
            columnLines: true,
            enableColumnHide: false,
            enableColumnMove: false,
            bind: {
                store: '{UnidadesLocalStore}'
            },
            columns: [
                {
                    xtype: 'numbercolumn',
                    width: 90,
                    dataIndex: 'unidad',
                    text: 'Unidad',
                    format: '0,000',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 70,
                    dataIndex: 'letra',
                    text: 'Tipo',
                    filter: {
                        type: 'list'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 120,
                    dataIndex: 'nombre_plaza',
                    text: 'Plaza',
                    filter: {
                        type: 'list'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    width: 70,
                    dataIndex: 'zona',
                    text: 'Zona',
                    filter: {
                        type: 'string'
                    }
                },
                {
                    xtype: 'datecolumn',
                    width: 180,
                    dataIndex: 'fecha_operacion',
                    text: 'Fecha de Operación',
                    format: 'd / F / Y',
                    filter: {
                        type: 'date'
                    }
                },
                {
                    xtype: 'booleancolumn',
                    width: 130,
                    dataIndex: 'cobro_aditivo',
                    text: 'Contiene AD+',
                    falseText: 'NO',
                    trueText: 'SI',
                    undefinedText: 'DESCONOCIDO',
                    filter: {
                        type: 'boolean'
                    }
                },
                {
                    xtype: 'booleancolumn',
                    width: 110,
                    dataIndex: 'online',
                    text: 'Modo',
                    falseText: 'EMULACION',
                    trueText: 'ONLINE',
                    undefinedText: 'DESCONOCIDO',
                    filter: {
                        type: 'boolean'
                    }
                },
                {
                    xtype: 'booleancolumn',
                    width: 130,
                    dataIndex: 'permitir_ruta_nocturna',
                    text: 'Ruta Nocturna',
                    falseText: 'NO',
                    trueText: 'SI',
                    undefinedText: 'DESCONOCIDO',
                    filter: {
                        type: 'boolean'
                    }
                },
                {
                    xtype: 'gridcolumn',
                    align: 'center',
                    text: 'Folios',
                    columns: [
                        {
                            xtype: 'gridcolumn',
                            style: 'text-align: left',
                            width: 80,
                            align: 'center',
                            dataIndex: 'folios_serie',
                            text: 'Serie'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 80,
                            dataIndex: 'folios_nota',
                            text: 'Nota',
                            format: '0,000'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 80,
                            dataIndex: 'folios_puntos',
                            text: 'Punt.',
                            format: '0,000'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 80,
                            dataIndex: 'folios_litrogas',
                            text: 'Litrog.',
                            format: '0,000'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 80,
                            dataIndex: 'folios_recirculacion',
                            text: 'Recir.',
                            format: '0,000'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 85,
                            dataIndex: 'folios_consignacion',
                            text: 'Consig.',
                            format: '0,000'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 80,
                            dataIndex: 'folios_donativo',
                            text: 'Dona.',
                            format: '0,000'
                        },
                        {
                            xtype: 'numbercolumn',
                            style: 'text-align: left',
                            width: 80,
                            dataIndex: 'folios_cortesia',
                            text: 'Cort.',
                            format: '0,000'
                        }
                    ]
                },
                {
                    xtype: 'actioncolumn',
                    permissionId: 9,
                    width: 30,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var editarUnidadWindow = Ext.create("Entregas100Web.view.EditarUnidadWindow");

                                editarUnidadWindow.down("form").loadRecord(record);
                                editarUnidadWindow.show();
                            },
                            icon: 'resources/icon/editar.png',
                            tooltip: 'Editar'
                        }
                    ]
                },
                {
                    xtype: 'actioncolumn',
                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                        var actionItem = this.items[0];

                        if (record.get("estado")) {
                            actionItem.icon = "resources/icon/activo.png";
                            actionItem.tooltip = "Desactivar";
                        } else {
                            actionItem.icon = "resources/icon/inactivo.png";
                            actionItem.tooltip = "Activar";
                        }

                        return value;
                    },
                    width: 30,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var isActiva = record.get("estado");

                                if (isActiva) {
                                    Ext.Msg.confirm(
                                    "Mensaje del sistema",
                                    "¿Desea desactivar la unidad seleccionada?",
                                    function(result) {
                                        if (result == "yes") {
                                            record.set("estado", false);
                                            record.store.sync();
                                        }
                                    }
                                    );
                                } else {
                                    record.set("estado", true);
                                    record.store.sync();
                                }
                            },
                            tooltip: 'Editar'
                        }
                    ]
                },
                {
                    xtype: 'actioncolumn',
                    width: 30,
                    items: [
                        {
                            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                                var isActiva = record.get("estado"),
                                    unidadesLocalStore = record.store;

                                if (isActiva) {
                                    Ext.Msg.show({
                                        title: 'Mensaje del sistema',
                                        message: "Es necesario desactivar la unidad primero",
                                        buttons: Ext.Msg.OK,
                                        icon: Ext.Msg.ERROR
                                    });
                                } else {
                                    Ext.Msg.confirm(
                                    "Mensaje del sistema",
                                    "¿Desea eliminar la unidad definitivamente?",
                                    function(result) {
                                        if (result == "yes") {
                                            unidadesLocalStore.remove(record);
                                            unidadesLocalStore.sync();
                                        }
                                    }
                                    );
                                }
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