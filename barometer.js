var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableBarometricPressure(function() {
          device.on('barometricPressureChange', function(pressure) {
            console.log('\tpressure = %d ', pressure);
          });
          device.notifyBarometricPressure(function() {
            console.log('notifyBarometricPressure');
          });
      }); // enableBarometricPressure
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
