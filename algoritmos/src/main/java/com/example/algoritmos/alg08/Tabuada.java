import java.util.Scanner;

public class Tabuada {
    public static void tabuada(int target){
        int count = 1;
        while (count <= 10) {
            System.out.printf("%d x %d = %d\n", count, target, count * target);
            count ++;
        }
    }

    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        System.out.println("Informe qual tabuada quer criar: ");
        int target = entrada.nextInt();
        tabuada(target);
        entrada.close();
    }
}
