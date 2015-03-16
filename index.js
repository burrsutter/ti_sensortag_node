var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
	console.log('Discovered device with UUID: ' + device['uuid']);
});

