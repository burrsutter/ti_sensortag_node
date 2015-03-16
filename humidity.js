var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
      device.enableHumidity(function() {
        device.on('humidityChange', function(temperature, humidity) {
          console.log('\ttemperature = %d °C', temperature.toFixed(1));
          console.log('\thumidity = %d %', humidity.toFixed(1));
        });

        device.notifyHumidity(function() {
          console.log('notifyHumidity');
        });
      }); // enableHumidity
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
