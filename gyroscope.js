var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableGyroscope(function() {
        device.setGyroscopePeriod(500, function() {
          device.on('gyroscopeChange', function(x, y, z) {
            console.log('\tx = %d ', x);
            console.log('\ty = %d ', y);
            console.log('\tz = %d ', z);
          });

          device.notifyGyroscope(function() {
            console.log('notifyGyroscope');
          });
        }); // setGyroscopePeriod
      }); // enableGyroscope
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
