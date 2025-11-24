import java.util.Random;
import java.util.Scanner;

public class GuessGame {

    public static void main(String[] args) {

        Random random = new Random();
        Scanner sc = new Scanner(System.in);

        int number = random.nextInt(50) + 1;
        int guess = 0;

        System.out.println("=== Adivinhe o número de 1 a 50 ===");

        while (guess != number) {
            System.out.print("Seu chute: ");
            guess = sc.nextInt();

            if (guess > number) System.out.println("Muito alto!");
            else if (guess < number) System.out.println("Muito baixo!");
        }

        System.out.println("\nParabéns! Você acertou!");
        sc.close();
    }
}
