'use strict';

var iothub = require('azure-iothub');

var connectionString = '{}';

var registry = iothub.Registry.fromConnectionString(connectionString);

var device = {
    deviceId: 'DeviceID'
}
CreateDevice(device);

function CreateDevice(device) {
    registry.create(device, function(err, deviceInfo, res) {
        if (err) {
            registry.get(device.deviceId, printDeviceInfo);
        }
        if (deviceInfo) {
            printDeviceInfo(err, deviceInfo, res)
        }
    });
}


function printDeviceInfo(err, deviceInfo, res) {
    if (deviceInfo) {
        console.log('Device ID: ' + deviceInfo.deviceId);
        console.log('Device key: ' + deviceInfo.authentication.symmetricKey.primaryKey);
    }
}