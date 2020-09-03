/*
 * File: app/view/windowEditMangueraViewController.js
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

Ext.define('Entregas100Web.view.windowEditMangueraViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windoweditmanguera',

    onTextfieldFocusleave: function(component, event, eOpts) {
        // this.getView().down('#txtDescripcion').setValue('');
        var btnGuardar = this.getView().down('#btnGuardar'),
            permiso = this.getView().down('#txtPermiso');

        Ext.Msg.wait('<center>Cargando Información, Espere un momento</center>','<center>Mensaje de Sistema</center>');
        Ext.Ajax.request({
            url: 'api/Mangueras/searchPermiso',
            params:{
                permiso: component.value
            },
            headers:{
                Accept: 'application/json, */*'
            },
            success:function(response){
                try{
                    var resp = JSON.parse(response.responseText);
                    Ext.Msg.hide();
                    if(resp.success){
                        btnGuardar.setDisabled(true);
                        Ext.MessageBox.show({
                            title: '<center>Mensaje de Sistema</center>',
                            msg: resp.message,
                            icon: Ext.MessageBox.ERROR,
                            buttons: Ext.Msg.OK,
                            buttonText:{ok:"Aceptar"},
                            closable:false
                        });
                        permiso.setValue('');
                    }else{
                        btnGuardar.setDisabled(false);
                    }
                }catch(Exception){
                    Ext.Msg.hide(
                    null,
                    function(){
                        Ext.MessageBox.show({
                            title: '<center>Mensaje de Sistema</center>',
                            msg: Exception,
                            closable:false,
                            buttons: Ext.Msg.OK,
                            buttonText:{ok:"Aceptar"},
                            icon: Ext.Msg.ERROR
                        });
                    }
                    );
                }
            },
            failure:function(response){
                Ext.MessageBox.show({
                    title: '<center>Mensaje de Sistema</center>',
                    msg: '<center>Fallo la conexión al servidor!</center>',
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK,
                    buttonText:{ok:"Aceptar"},
                    closable:false
                });
            }
        });
    },

    onBtnGuardarClick: function(button, e, eOpts) {

        var win =  button.up('window'),
            form   = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        var permiso = this.getView().down('#txtPermiso').getValue();

        Ext.Msg.confirm('Mensaje de Sistema','¿Esta correcta la información ingresada? Verifique antes de continuar!',function(btn){
            if(btn === 'yes'){
                if(form.isValid()){
                    Ext.Msg.wait('<center>Procesando Información, Espere un momento</center>','<center>Mensaje de Sistema</center>');

                    var store = Ext.getStore('mangueras.ManguerasStore');
                    window.store = store;
                    record.set('permiso', permiso);
                    form.updateRecord();
                    if(store.needsSync){
                        store.sync({
                            success: function(batch,options){
                                Ext.MessageBox.show({
                                    title: '<center>Mensaje de Sistema</center>',
                                    msg: '<center>Se actualizo correctamente!</center>',
                                    closable:false,
                                    buttons: Ext.Msg.OK,
                                    buttonText:{ok:"Aceptar"},
                                    icon: Ext.MessageBox.INFO
                                });
                                onSyncSucess();
                            },
                            failure:function(batch){
                                store.rejectChanges();
                                Ext.each(batch.exceptions, function(operation){
                                    if(operation.error.statusText === ""){
                                        Ext.MessageBox.show({
                                            title: '<center>Mensaje de Sistema</center>',
                                            msg: '<center>Fallo la conexión con el servidor!</center>',
                                            closable:false,
                                            buttons: Ext.Msg.OK,
                                            buttonText:{ok:"Aceptar"},
                                            icon: Ext.Msg.ERROR
                                        });
                                    }else{
                                        var error = batch.getExceptions();
                                        var error1 = error[0].getError();
                                        Ext.MessageBox.show({
                                            title: '<center>Mensaje de Sistema</center>',
                                            msg: '<center>'+error1+'</center>',
                                            closable:false,
                                            buttons: Ext.Msg.OK,
                                            buttonText:{ok:"Aceptar"},
                                            icon: Ext.Msg.ERROR
                                        });

                                    }
                                });
                            }
                        });
                    }else{
                        onSyncSucess();
                    }
                }else{
                    Ext.MessageBox.show({
                        title : 'Mensaje del sistema',
                        buttons : Ext.MessageBox.OK,
                        msg : '<br>Ingrese todos los campos obligatorios</br>',
                        icon : Ext.Msg.ERROR
                    });
                }


            }else{
                console.log('revisar');
            }
        });

        function onSyncSucess() {
            Ext.Msg.hide();
            win.close();
        }
    },

    onBtnSalirClick: function(button, e, eOpts) {

    }

});
