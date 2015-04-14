# ti_sensortag_node
Node.js examples for working with TI SensorTag + Raspberry Pi (or Intel Edison)
also works with CC2650 version of the TI SensorTag (arrived in 2015)

http://www.ti.com/ww/en/wireless_connectivity/sensortag/index.shtml?INTC=SensorTag&HQS=sensortag-bt

TI SensorTag connects via Bluetooth, Node.js grabs the data
will eventually send it out via MQTT (over Wifi) to an ActiveMQ broker (running on laptop).

sudo npm install sandeepmistry/node-sensortag 

sudo node index.js
sudo node temp_humidity.js

on Intel Edison,

rfkill unblock bluetooth
hciconfig hci0 up
hcitool lescan

hit the button on the side of the TISensorTag
the TI will should show up
hit Ctrl-C to break out of hcitool lescan

npm install sandeepmistry/node-sensortag (assumes you are in as root)
node temp_humidity.js

