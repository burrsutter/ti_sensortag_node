cmd_Release/hci-ble := flock ./Release/linker.lock g++ -pthread -rdynamic -m32  -o Release/hci-ble -Wl,--start-group ./Release/obj.target/hci-ble/src/hci-ble.o -Wl,--end-group -lbluetooth
