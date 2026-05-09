import java.util.Scanner;

public class MaiorMenorMedia {
    static Scanner entrada = new Scanner(System.in);

    
    public static int recebeNumero(){
        int atual;
        System.out.println("Informe um número inteiro: ");
        atual = entrada.nextInt();
        return atual;
    }

    public static float calculaMedia(int total, int qtdeNumeros){
        return total / qtdeNumeros;

    }
    public static void main(String[] args) {
        int continua = 0;
        int menor, maior, atual, total;
        int qtde = 1;
        atual = recebeNumero();
        menor = maior = total = atual;
        
        float media;

        while(continua == 0){
            
            System.out.println("Deseja continuar?\nSIM: 0, NÃO: 1");
            continua = entrada.nextInt();
            
            if (continua == 0){
                atual = recebeNumero();
                total += atual;
                qtde ++;

                if(atual < menor){
                    menor = atual;
                } else if (atual > maior){
                    maior = atual;
                }
            }
        }

        media = calculaMedia(total, qtde);
        System.out.println("A média = " + media);
        System.out.println("O número menor = " + menor);
        System.out.println("O número maior = " + maior);
        
    }
}
