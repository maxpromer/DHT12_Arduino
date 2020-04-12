Blockly.Blocks['dht12_read_temperature'] = {
	init: function() {
		this.jsonInit({
			"message0": "DHT12 read temperature (*C)",
			"output": "Number",
			"colour": 135,
			"tooltip": "Read Temperature from DHT12",
			"helpUrl": ""
		});
	}
};

Blockly.Blocks['dht12_read_humidity'] = {
	init: function() {
		this.jsonInit({
			"message0": "DHT12 read humidity (%RH)",
			"output": "Number",
			"colour": 135,
			"tooltip": "Read Humidity from DHT12",
			"helpUrl": ""
		});
	}
};
