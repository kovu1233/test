// JavaScript Document
// Wait for device API libraries to load
//
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
//
function onDeviceReady() {
	document.getElementById('dvid').value = device.uuid;
}
