/*
 * File: app/view/PermisosPanelViewController.js
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

Ext.define('Entregas100Web.view.PermisosPanelViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.permisospanel',

    onBtnRefrescarClick: function(button, e, eOpts) {
        var me = this;

        me.getStore("PerfilesPagoLocalStore").load();
        me.getStore("CombinacionesFormaPerfilLocalStore").load();
    },

    onTiposSesionGridSelect: function(rowmodel, record, index, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore"),
            permisosGrid = me.view.down("#permisosGrid"),
            permisosActuales;

        // obtiene todos los permisos del usuario
        permisosActuales = permisosUsuarioLocalStore.query("tipo_usuario_id", record.get("id"));
        permisosActuales = permisosActuales.getValues("permiso_id", "data");

        // modifica permisosLocalStore para coordinarlo con los permisosActuales
        permisosLocalStore.removeFilter("sin-seleccion");
        permisosLocalStore.each(function(rec) {
            rec.set(
            "es_permitido",
            Ext.Array.contains(permisosActuales, rec.get("id"))
            );
        });
        permisosLocalStore.commitChanges();
    },

    onTiposSesionGridBeforeSelect: function(rowmodel, record, index, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore");

        if (permisosLocalStore.isDirty()) {
            Ext.Msg.show({
                title: "Mensaje del sistema",
                message: "Se perderan los cambios que ha realizado, ¿Desea continuar?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.WARNING,
                fn: function(result) {
                    if (result == "yes") {
                        permisosLocalStore.rejectChanges();
                        permisosUsuarioLocalStore.rejectChanges();
                        rowmodel.select(record);
                    }
                }
            });
            return false;
        }
    },

    onUsuariosGridSelect: function(rowmodel, record, index, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore"),
            permisosGrid = me.view.down("#permisosGrid"),
            permisosActuales;

        // obtiene todos los permisos del tipo de sesion
        permisosActuales = permisosUsuarioLocalStore.query("usuario_id", record.get("id"));
        permisosActuales = permisosActuales.getValues("permiso_id", "data");

        // modifica permisosLocalStore para coordinarlo con los permisosActuales
        permisosLocalStore.removeFilter("sin-seleccion");
        permisosLocalStore.each(function(rec) {
            rec.set(
            "es_permitido",
            Ext.Array.contains(permisosActuales, rec.get("id"))
            );
        });
        permisosLocalStore.commitChanges();
    },

    onUsuariosGridBeforeSelect: function(rowmodel, record, index, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore");

        if (permisosLocalStore.isDirty()) {
            Ext.Msg.show({
                title: "Mensaje del sistema",
                message: "Se perderan los cambios que ha realizado, ¿Desea continuar?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.WARNING,
                fn: function(result) {
                    if (result == "yes") {
                        permisosLocalStore.rejectChanges();
                        permisosUsuarioLocalStore.rejectChanges();
                        rowmodel.select(record);
                    }
                }
            });
            return false;
        }
    },

    onBtnRevertirClick: function(button, e, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore");

        if (permisosLocalStore.isDirty()) {
            Ext.Msg.show({
                title: "Mensaje del sistema",
                message: "Se perderan los cambios que ha realizado, ¿Desea continuar?",
                buttons: Ext.Msg.YESNO,
                icon: Ext.Msg.WARNING,
                fn: function(result) {
                    if (result == "yes") {
                        permisosLocalStore.rejectChanges();
                        permisosUsuarioLocalStore.rejectChanges();
                    }
                }
            });
        }
    },

    onBtnGuardarClick: function(button, e, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore"),
            record = me.view.down("#gridsTabPanel").getActiveTab().getSelection()[0],
            waitWindow, esPersonalizado, index;

        if (!record) {
            Ext.Msg.show({
                title: "Mensaje del sistema",
                message: "Seleccione un usuario o tipo de usuario",
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERRROR
            });
            return;
        } else if (!permisosLocalStore.isDirty()) {
            return;
        }

        waitWindow = Ext.Msg.wait("Guardando cambios...");
        esPersonalizado = record.$className == "Entregas100Web.model.UsuarioModel";

        if (esPersonalizado) {
            permisosLocalStore.each(function(permisoRecord) {
                index = permisosUsuarioLocalStore.findBy(function(rec) {
                    return rec.get("permiso_id") == permisoRecord.get("id") &&
                    rec.get("usuario_id") == record.get("id");
                });
                if (permisoRecord.get("es_permitido")) {
                    // si es permitido agrega el permiso en caso que no exista
                    if (index == -1) {
                        permisosUsuarioLocalStore.add({
                            usuario_id: record.get("id"),
                            permiso_id: permisoRecord.get("id")
                        });
                    }
                } else {
                    // si no es permitido elimina el permiso en caso que exista
                    if (index != -1) {
                        permisosUsuarioLocalStore.removeAt(index);
                    }
                }
            });
        } else {
            permisosLocalStore.each(function(permisoRecord) {
                index = permisosUsuarioLocalStore.findBy(function(rec) {
                    return rec.get("permiso_id") == permisoRecord.get("id") &&
                    rec.get("tipo_usuario_id") == record.get("id");
                });
                if (permisoRecord.get("es_permitido")) {
                    // si es permitido agrega el permiso en caso que no exista
                    if (index == -1) {
                        permisosUsuarioLocalStore.add({
                            tipo_usuario_id: record.get("id"),
                            permiso_id: permisoRecord.get("id")
                        });
                    }
                } else {
                    // si no es permitido elimina el permiso en caso que exista
                    if (index != -1) {
                        permisosUsuarioLocalStore.removeAt(index);
                    }
                }
            });
        }

        permisosUsuarioLocalStore.sync({
            success: onSyncSuccess
        });

        function onSyncSuccess() {
            permisosLocalStore.commitChanges();
            waitWindow.close();
        }

        window.me = me;
        window.permisosUsuarioLocalStore = permisosUsuarioLocalStore;
    },

    onPermisosPanelAfterRender: function(component, eOpts) {
        var me = this,
            permisosLocalStore = me.getStore("PermisosLocalStore"),
            usuariosLocalStore = me.getStore("UsuariosLocalStore"),
            permisosUsuarioLocalStore = me.getStore("PermisosUsuarioLocalStore"),
            tiposSesionLocalStore = me.getStore("TiposSesionLocalStore"),
            promesaPermisosLoad = new Ext.Deferred(),
            promesaUsuariosLoad = new Ext.Deferred(),
            promesaTiposSesionLoad = new Ext.Deferred(),
            promesaPermisosUsuarioLoad = new Ext.Deferred();

        me.view.mask("Cargando...");

        // filtra el permisosLocalStore para no mostrar nada inicialmente
        permisosLocalStore.addFilter([
        {
            id: "sin-seleccion",
            filterFn: function() {
                return false;
            }
        }
        ]);

        // carga los stores necesarios antes de habilitar el panel
        permisosLocalStore.load(function(records, operation, success) {
            if (success) {
                promesaPermisosLoad.resolve();
            } else {
                promesaPermisosLoad.reject();
            }
        });
        usuariosLocalStore.load(function(records, operation, success) {
            if (success) {
                promesaUsuariosLoad.resolve();
            } else {
                promesaUsuariosLoad.reject();
            }
        });
        tiposSesionLocalStore.load(function(records, operation, success) {
            if (success) {
                promesaTiposSesionLoad.resolve();
            } else {
                promesaTiposSesionLoad.reject();
            }
        });
        permisosUsuarioLocalStore.load(function(records, operation, success) {
            if (success) {
                promesaPermisosUsuarioLoad.resolve();
            } else {
                promesaPermisosUsuarioLoad.reject();
            }
        });

        // al terminar de cargar los stores habilita el panel
        Ext.Deferred.all([
        promesaPermisosLoad,
        promesaUsuariosLoad,
        promesaTiposSesionLoad,
        promesaPermisosUsuarioLoad
        ]).then(onStoresLoad, onStoresLoad);

        function onStoresLoad() {
            me.view.unmask();
        }
    }

});
