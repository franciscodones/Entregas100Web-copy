/*
 * File: app/view/MainViewportViewController.js
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

Ext.define('Entregas100Web.view.MainViewportViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mainviewport',

    abrirPanel: function(panelAlias, panelConfig) {
        var me = this,
            tabContainer = me.view.down("#tabContainer"),
            panel = tabContainer.down("> panel[alias=" + panelAlias + "]");

        if (!panel) {
            panel = Ext.create(panelAlias, panelConfig);
            tabContainer.add(panel);
        }

        tabContainer.setActiveTab(panel);
    },

    onMItemPlazasClick: function(item, e, eOpts) {
        this.abrirPanel("widget.plazaspanel");
    },

    onMItemFormasPagoClick: function(item, e, eOpts) {
        this.abrirPanel("widget.formaspagopanel");
    },

    onMItemPerfilesPagoClick: function(item, e, eOpts) {
        this.abrirPanel("widget.perfilespagopanel");
    },

    onMItemPerfilesPagoClick12: function(item, e, eOpts) {
        this.abrirPanel("widget.tablapuntospanel");
    },

    onMItemPerfilesPagoClick11: function(item, e, eOpts) {
        this.abrirPanel("widget.usuariospanel");
    },

    onMItemPerfilesPagoClick1: function(item, e, eOpts) {
        this.abrirPanel("widget.permisospanel");
    },

    onMItemZonasClick: function(item, e, eOpts) {
        this.abrirPanel("widget.zonaspanel");
    },

    onMItemUnidadesClick: function(item, e, eOpts) {
        this.abrirPanel("widget.unidadespanel");
    },

    onMItemOperadoresClick: function(item, e, eOpts) {
        this.abrirPanel("widget.operadorespanel");
    },

    onMItemTarifasClick: function(item, e, eOpts) {
        var me = this,
            tabContainer = me.view.down("#tabContainer"),
            panel = tabContainer.down("> panel[alias=widget.tarifaspanel]"),
            plazaDialog;

        if (panel) {
            me.abrirPanel("widget.tarifaspanel");
        } else {
            plazaDialog = Ext.create("Pyansa.window.dialog.ComboBox", {
                title: "Seleccione una plaza",
                field: {
                    fieldLabel: "Plaza",
                    store: Ext.create("Entregas100Web.store.PlazasStore", {
                        filters: [
                        {
                            id: "permisoPlazas",
                            filterFn: function(record) {
                                return Ext.isEmpty(Ext._.usuario.plaza_id) ||
                                Ext.Array.contains(Ext._.usuario.plaza_id, record.get("id"));
                            }
                        }
                        ]
                    }),
                    valueField: "id",
                    displayField: "ciudad"
                },
                listeners: {
                    accept: onPlazaSeleccionada
                }
            });
        }

        function onPlazaSeleccionada(value, combo) {
            this.close();
            me.abrirPanel("widget.tarifaspanel", {
                title: "Tarifas (" + combo.getDisplayValue() + ")",
                viewModel: {
                    data: {
                        plazaId: value
                    }
                }
            });
        }
    },

    onMItemDescuentosPromocionClick: function(item, e, eOpts) {
        var me = this,
            tabContainer = me.view.down("#tabContainer"),
            panel = tabContainer.down("> panel[alias=widget.descuentospromocionpanel]"),
            plazaDialog;

        if (panel) {
            me.abrirPanel("widget.descuentospromocionpanel");
        } else {
            plazaDialog = Ext.create("Pyansa.window.dialog.ComboBox", {
                title: "Seleccione una plaza",
                field: {
                    fieldLabel: "Plaza",
                    store: Ext.create("Entregas100Web.store.PlazasStore", {
                        filters: [
                        {
                            id: "permisoPlazas",
                            filterFn: function(record) {
                                return Ext.isEmpty(Ext._.usuario.plaza_id) ||
                                Ext.Array.contains(Ext._.usuario.plaza_id, record.get("id"));
                            }
                        }
                        ]
                    }),
                    valueField: "id",
                    displayField: "ciudad"
                },
                listeners: {
                    accept: onPlazaSeleccionada
                }
            });
        }

        function onPlazaSeleccionada(value, combo) {
            this.close();
            me.abrirPanel("widget.descuentospromocionpanel", {
                title: "Descuentos promocion (" + combo.getDisplayValue() + ")",
                viewModel: {
                    data: {
                        plazaId: value
                    }
                }
            });
        }
    },

    onMItemHorariosListaClick: function(item, e, eOpts) {
        this.abrirPanel("widget.horarioszonapanel");
    },

    onMItemReportesAlarmasClick: function(item, e, eOpts) {
        var me = this;

        me.abrirPanel("widget.reportesalarmaspanel");
    },

    onMItemConfigurarCuentaClick: function(item, e, eOpts) {
        this.abrirPanel("widget.configurarcuentapanel");
    },

    onMItemCerrarSesionClick: function(item, e, eOpts) {
        var me = this;

        Ext.Msg.confirm(
        "Mensaje del sistema",
        "¿Desea cerrar sesión?",
        function(result) {
            if (result == "yes") {
                me.view.destroy();
                Ext.create("Entregas100Web.view.LoginWindow", {});
            }
        }
        );
    }

});
