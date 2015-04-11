var SensorTag = require('sensortag');

console.log("Make sure to click the button on the side of the TI SensorTag");

SensorTag.discover(function(device) {
	console.log('Discovered device with UUID: ' + device['uuid']);
});


