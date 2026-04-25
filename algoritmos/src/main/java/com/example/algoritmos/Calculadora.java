package com.example.algoritmos;

import java.util.Scanner;

public class Calculadora {
    public float soma(float termoA, float termoB){
        return termoA + termoB;
    }

    public float subtrai(float termoA, float termoB){
        return termoA - termoB;
    }

    public float multiplica(float termoA, float termoB){
        return termoA * termoB;
    }

    public float divide(float termoA, float termoB){
        if (termoB == 0){
            throw new IllegalArgumentException("Divisão por zero não pode ser feita.");
        }
        return termoA / termoB;
    }
    public static void main(String[] args) {
        Calculadora calc = new Calculadora();
        int operação;
        float termoA, termoB;
        System.out.println("Informe a operação desejada (1-Somar, 2-subtrair, 3-multiplicar, 4-dividir)");
        Scanner entrada = new Scanner(System.in);
        operação = entrada.nextInt();
        switch (operação) {
            case 1:
                System.out.println("Informe os números para serem somados: ");
                termoA = entrada.nextFloat();
                termoB = entrada.nextFloat();
                System.out.printf("A soma entre %.2f e %.2f é = %.2f\n", termoA, termoB, calc.soma(termoA, termoB));
                
                break;
            case 2:
                System.out.println("Informe os números para serem subtraídos (A - B): ");
                termoA = entrada.nextFloat();
                termoB = entrada.nextFloat();
                System.out.printf("A diferença entre %.2f e %.2f é = %.2f\n", termoA, termoB, calc.subtrai(termoA, termoB));
                break;
            case 3:
                System.out.println("Informe os números para serem multiplicados: ");
                termoA = entrada.nextFloat();
                termoB = entrada.nextFloat();
                System.out.printf("O produto dos números %.2f e %.2f é = %.2f\n", termoA, termoB, calc.multiplica(termoA, termoB));
                break;
            case 4:
                System.out.println("Informe os números para serem divididos (A / B): ");
                termoA = entrada.nextFloat();
                termoB = entrada.nextFloat();
                System.out.printf("A divisão entre os números %.2f e %.2f é = %.2f\n", termoA, termoB, calc.divide(termoA, termoB));
                break;
            default:
                break;
        }

        entrada.close();
    }
}
