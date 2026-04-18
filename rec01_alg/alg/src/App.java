import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);

        int a, b, c;
        String menor, maior, meio;
        menor = "";
        maior = "";
        meio = "";

        a = entrada.nextInt();
        b = entrada.nextInt();
        c = entrada.nextInt();

        if(a == b){
            if (b == c){
                System.out.println("Todos iguais.");
            }else if(a > c){
                System.out.println("A e B são iguais e maiores que C.");
            }else{
                System.out.println("A e B são iguais e menores que C.");
            }
        }else{
            if(a == c){
                if (a > b){
                    System.out.println("A e C são iguais e maiores que B.");
                }else{
                    System.out.println("A e C são iguais e menores que B.");
                }
            }else{
                if(a > b){
                    if (a > c){
                        menor = "A-Menor";
                        if (b > c){
                            meio = "B-Meio";
                            menor = "C-Menor";
                        }else{
                            meio = "C-Meio";
                            menor = "B-Menor";
                        }
                    }else{
                        maior = "C-Maior";
                        meio = "A-Meio";
                        menor = "B-Menor";
                    }
                }else{
                    if (b > c){
                        maior = "B-Maior";
                        if(a > c){
                            meio = "A-Meio";
                            menor = "C-Menor";
                        }else{
                            meio = "C-Meio";
                            menor = "A-Menor";
                        }
                    }else{
                        maior = "C-Maior";
                        meio = "B-Meio";
                        menor = "A-Menor";
                    }
                }

                System.out.println(menor);
                System.out.println(meio);
                System.out.println(maior);

            }
        }
    }
}
