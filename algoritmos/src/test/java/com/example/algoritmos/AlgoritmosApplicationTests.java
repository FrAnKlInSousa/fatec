package com.example.algoritmos;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.CsvSource;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AlgoritmosApplicationTests {
	private Calculadora calc;

	@BeforeEach
	void setup(){
		calc = new Calculadora();
	}

	@ParameterizedTest
	@CsvSource({
		"2, 3, 5",
		"40, 23, 63",
		"0, 0, 0"
	})
	void soma(float termoA, float termoB, float expected) {
		assertEquals(calc.soma(termoA, termoB), expected);
	}

}
