import java.util.Scanner;

public class App {
    public static void main(String[] args) throws Exception {
        Scanner entrada = new Scanner(System.in);

        int a, b, c, menor, maior, meio;

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
        }
    }
}
