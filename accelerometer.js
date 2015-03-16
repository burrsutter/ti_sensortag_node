var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableAccelerometer(function() {
        device.on('accelerometerChange', function(x, y, z) {
          console.log('\tx = %d ', x.toFixed(1));
          console.log('\ty = %d ', y.toFixed(1));
          console.log('\tz = %d ', z.toFixed(1));
        });

        device.notifyAccelerometer(function() {
          console.log('notifyAccelerometer');
        });
      }); // enableAccelerometer
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
