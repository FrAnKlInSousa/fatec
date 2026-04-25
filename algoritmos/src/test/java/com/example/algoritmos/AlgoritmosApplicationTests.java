package com.example.algoritmos;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

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
	void soma(float termoA, float termoB, float esperado) {
		assertEquals(calc.soma(termoA, termoB), esperado);
	}

	@ParameterizedTest
	@CsvSource({
		"5, 2, 3",
		"20, 40, -20"
	})
	void subrai(float termoA, float termoB, float esperado){
		assertEquals(calc.subtrai(termoA, termoB), esperado);
	}

	@ParameterizedTest
	@CsvSource({
		"7, 8, 56",
		"10, -3, -30",
		"0, -3, 0"
	})
	void multiplica(float termoA, float termoB, float esperado){
		assertEquals(calc.multiplica(termoA, termoB), esperado, 0.0001f);
	}

	@ParameterizedTest
	@CsvSource({
		"27, 9, 3",
		"0, 3, 0",
	})
	void divide(float termoA, float termoB, float esperado){
		assertEquals(calc.divide(termoA, termoB), esperado);
	}

	@Test
	void dividePorZero(){
		assertThrows(IllegalArgumentException.class, () ->{calc.divide(0, 0);});
	}
}
