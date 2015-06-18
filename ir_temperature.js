var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableIrTemperature(function() {
        device.on('irTemperatureChange', function(objectTemperature, ambientTemperature) {
          console.log('\tobject temperature = %d °C', objectTemperature.toFixed(1));
          console.log('\tambient temperature = %d °C', ambientTemperature.toFixed(1));
        });

        device.notifyIrTemperature(function() {
          console.log('notifyIrTemperature');
        });
      }); // enableIrTemperature
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
