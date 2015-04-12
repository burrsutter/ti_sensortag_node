var SensorTag = require('sensortag');

SensorTag.discover(function(device) {
  console.log('discovered device with UUID: ' + device['uuid']);
  device.connect(function() {
    console.log('connected');
    device.discoverServicesAndCharacteristics(function() {
      console.log('discovered services and characteristics');
        device.on('simpleKeyChange', function(left, right) {
          if (left === true) { 
            console.log('\tleft: ', left);
          }
          if (right === true ) {
            console.log('\tright: ', right);
          } 
        });

        device.notifySimpleKey(function() {
         console.log("notifySimpleKey");
        });
    }); // discoverServicesAndCharacteristics
  }); // connect
}); // discover
