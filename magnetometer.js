var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableMagnetometer(function() {
        device.setMagnetometerPeriod(500, function() {
          device.on('magnetometerChange', function(x, y, z) {
            console.log('\tx = %d ', x);
            console.log('\ty = %d ', y);
            console.log('\tz = %d ', z);
          });

          device.notifyMagnetometer(function() {
            console.log('notifyMagnetometer');
          });
        }); // setMagnetometerPeriod
      }); // enableAccelerometer
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
