# ti_sensortag_node
Node.js examples for working with TI SensorTag + Raspberry Pi 2

http://www.ti.com/ww/en/wireless_connectivity/sensortag/index.shtml?INTC=SensorTag&HQS=sensortag-bt

TI SensorTag connects via Bluetooth, Node.js grabs the data
will eventually send it out via MQTT (over Wifi) to an ActiveMQ broker (running on laptop).

sudo npm install sandeepmistry/node-sensortag 

sudo node index.js
sudo node temp_humidity.js
