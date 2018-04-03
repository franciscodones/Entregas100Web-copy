/*
 * File: app/view/EditarUsuarioWindow.js
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

Ext.define('Entregas100Web.view.EditarUsuarioWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.editarusuariowindow',

    requires: [
        'Entregas100Web.view.CrearUsuarioWindowViewModel1',
        'Entregas100Web.view.CrearUsuarioWindowViewController1',
        'Ext.form.Panel',
        'Ext.form.field.Hidden',
        'Ext.form.field.ComboBox',
        'Ext.form.FieldContainer',
        'Ext.button.Button',
        'Ext.toolbar.Spacer'
    ],

    controller: 'editarusuariowindow',
    viewModel: {
        type: 'editarusuariowindow'
    },
    modal: true,
    id: 'editarUsuarioWindow',
    width: 400,
    glyph: 'f0c0@FontAwesome',
    title: 'Editar Usuario',

    items: [
        {
            xtype: 'form',
            trimValues: true,
            itemId: 'editarUsuarioForm',
            bodyPadding: 10,
            items: [
                {
                    xtype: 'hiddenfield',
                    anchor: '100%',
                    name: 'id'
                },
                {
                    xtype: 'textfield',
                    transformToUpper: true,
                    anchor: '100%',
                    fieldLabel: 'Nombre',
                    name: 'nombre',
                    allowBlank: false
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    itemId: 'txtEmail',
                    fieldLabel: 'Email',
                    name: 'email',
                    inputType: 'email',
                    allowBlank: false,
                    vtype: 'email',
                    listeners: {
                        change: 'onTxtEmailChange'
                    }
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    itemId: 'txtUsuario',
                    fieldLabel: 'Usuario',
                    name: 'usuario',
                    allowBlank: false,
                    maxLength: 50,
                    minLength: 4
                },
                {
                    xtype: 'textfield',
                    anchor: '100%',
                    fieldLabel: 'Contraseña',
                    name: 'password',
                    inputType: 'password',
                    allowBlank: false,
                    maxLength: 20,
                    minLength: 4
                },
                {
                    xtype: 'combobox',
                    anchor: '100%',
                    itemId: 'cmbTipoSesion',
                    fieldLabel: 'Tipo',
                    name: 'tipo_sesion_id',
                    allowBlank: false,
                    editable: false,
                    displayField: 'tipo_sesion',
                    forceSelection: true,
                    valueField: 'id',
                    bind: {
                        store: '{TiposSesionLocalStore}'
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
                }
            ]
        }
    ],
    listeners: {
        afterrender: 'onEditarUsuarioWindowAfterRender'
    }

});