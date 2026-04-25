package com.example.algoritmos;

import java.util.Scanner;

public class Calculadora {
    public float soma(float termoA, float termoB){
        return termoA + termoB;
    }
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();
        System.out.println("Informe os números para serem somados: ");
        Scanner entrada = new Scanner(System.in);
        float termoA = entrada.nextFloat();
        float termoB = entrada.nextFloat();
        System.out.printf("A soma entre %.2f e %.2f é = %.2f\n", termoA, termoB, calc.soma(termoA, termoB));

        entrada.close();
    }
}
