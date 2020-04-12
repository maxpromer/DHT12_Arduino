#ifndef __DHT12_CPP__
#define __DHT12_CPP__

#include "DHT12.h"

DHT12::DHT12(TwoWire *bus) {
	_wire = bus;
}

double DHT12::readTemperature() {
	_wire->beginTransmission(0x5C);
	_wire->write(0x02);
	if (_wire->endTransmission(false) != 0) {
		return -9999;
	}
	
	int count = _wire->requestFrom(0x5C, 2);
	if (count < 2) {
		return -9999;
	}
	
	uint8_t integer = _wire->read();
	uint8_t scale = _wire->read();
	
	return (integer + ((scale & 0x7F) / 10.0)) * ((scale & 0x80) ? -1.0 : 1.0);
}

double DHT12::readHumidity() {
	_wire->beginTransmission(0x5C);
	_wire->write(0x00);
	if (_wire->endTransmission(false) != 0) {
		return -9999;
	}
	
	int count = _wire->requestFrom(0x5C, 2);
	if (count < 2) {
		return -9999;
	}
	
	uint8_t integer = _wire->read();
	uint8_t scale = _wire->read();
	
	return integer + (scale / 10.0);
}

#endif
