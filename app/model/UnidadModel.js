/*
 * File: app/model/UnidadModel.js
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

Ext.define('Entregas100Web.model.UnidadModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.field.String',
        'Ext.data.field.Date',
        'Ext.data.field.Number',
        'Ext.data.field.Boolean'
    ],

    fields: [
        {
            type: 'int',
            name: 'id'
        },
        {
            type: 'int',
            name: 'zona_id'
        },
        {
            type: 'int',
            name: 'unidad'
        },
        {
            type: 'string',
            name: 'letra'
        },
        {
            type: 'string',
            name: 'tipo'
        },
        {
            type: 'date',
            name: 'fecha',
            dateFormat: 'Y-m-d H:i:s'
        },
        {
            type: 'float',
            name: 'latitud'
        },
        {
            type: 'float',
            name: 'longitud'
        },
        {
            type: 'float',
            name: 'rssi'
        },
        {
            type: 'boolean',
            name: 'online'
        },
        {
            type: 'boolean',
            name: 'cobro_aditivo'
        },
        {
            type: 'boolean',
            name: 'aditivo_obligatorio'
        },
        {
            name: 'autorizacion'
        },
        {
            type: 'float',
            name: 'tiempo'
        },
        {
            name: 'sincronizacion'
        },
        {
            type: 'date',
            name: 'fecha_operacion',
            dateFormat: 'Y-m-d'
        },
        {
            type: 'float',
            name: 'version'
        },
        {
            type: 'string',
            name: 'ruta_actualizacion'
        },
        {
            type: 'date',
            name: 'fecha_registro',
            dateFormat: 'Y-m-d H:i:s'
        },
        {
            type: 'date',
            name: 'fecha_modificacion',
            dateFormat: 'Y-m-d H:i:s'
        },
        {
            type: 'boolean',
            name: 'estado'
        },
        {
            type: 'int',
            name: 'zona'
        },
        {
            type: 'string',
            name: 'nombre_plaza'
        },
        {
            type: 'int',
            name: 'folios_id'
        },
        {
            type: 'string',
            name: 'folios_serie'
        },
        {
            type: 'int',
            name: 'folios_nota'
        },
        {
            type: 'int',
            name: 'folios_puntos'
        },
        {
            type: 'int',
            name: 'folios_litrogas'
        },
        {
            type: 'int',
            name: 'folios_recirculacion'
        },
        {
            type: 'int',
            name: 'folios_consignacion'
        },
        {
            type: 'int',
            name: 'folios_donativo'
        },
        {
            type: 'int',
            name: 'folios_cortesia'
        }
    ]
});