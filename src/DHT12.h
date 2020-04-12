#ifndef __DHT12_H__
#define __DHT12_H__

#include <Arduino.h>
#include <Wire.h>

class DHT12 {
	private:
		TwoWire *_wire;
		
	public:
		DHT12(TwoWire *bus = &Wire) ;
		
		double readTemperature() ;
		double readHumidity() ;
		
}
;

#endif