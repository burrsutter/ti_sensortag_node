var SensorTag = require('sensortag');
console.log("works with CC2650 only, hit the button to wake ");
SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableLuxometer(function() {
          device.on('luxometerChange', function(lux) {
            console.log('\tlux = %d ', lux);
          });

          device.notifyLuxometer(function() {
            console.log('notifyLuxometer');
          });
      }); // enableLuxometer
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
