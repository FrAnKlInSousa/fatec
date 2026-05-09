public class Impares {
    public static void impares(){
        int cont = 100;
        while (cont < 200) {
            if (cont % 2 == 1){
                System.out.println(cont);
            }
            cont+= 1;
        }
    }
    public static void main(String[] args) {
        impares();
    }
}