Blockly.JavaScript['dht12_read_temperature'] = function(block) {
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += `#EXTINC#include <DHT12.h>#END\n`;
	code += `#EXTINC#include <Wire.h>#END\n`;
	code += `#VARIABLE DHT12 dht12(&${WIRE_OBJ});#END\n`;
	code += `#SETUP ${WIRE_OBJ}.begin(${SDA_PIN}, ${SCL_PIN}); #END`;
	code += `dht12.readTemperature()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['dht12_read_humidity'] = function(block) {
	var WIRE_OBJ = 'Wire';
	var SDA_PIN = 21, SCL_PIN = 22; 

	var board_name = Vue.prototype.$global.board.board_info.name;
	if (board_name == 'kidbright-arduino' || board_name == 'openkb') {
		WIRE_OBJ = 'Wire1';
		SDA_PIN = 4;
		SCL_PIN = 5;
	} else if (board_name == 'ipst-wifi') {

	}

	var code = '';
	code += `#EXTINC#include <DHT12.h>#END\n`;
	code += `#EXTINC#include <Wire.h>#END\n`;
	code += `#VARIABLE DHT12 dht12(&${WIRE_OBJ});#END\n`;
	code += `#SETUP ${WIRE_OBJ}.begin(${SDA_PIN}, ${SCL_PIN}); #END`;
	code += `dht12.readHumidity()`;
	return [code, Blockly.JavaScript.ORDER_NONE];
};


