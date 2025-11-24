import service.UserService;
import model.User;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        UserService service = new UserService();
        Scanner sc = new Scanner(System.in);
        int option;

        do {
            System.out.println("\n=== Sistema de Usuários ===");
            System.out.println("1. Cadastrar");
            System.out.println("2. Listar");
            System.out.println("3. Atualizar");
            System.out.println("4. Remover");
            System.out.println("0. Sair");
            System.out.print("Escolha: ");
            option = sc.nextInt();
            sc.nextLine();

            switch(option) {
                case 1 -> {
                    System.out.print("ID: ");
                    int id = sc.nextInt(); sc.nextLine();
                    System.out.print("Nome: ");
                    String name = sc.nextLine();
                    System.out.print("Email: ");
                    String email = sc.nextLine();

                    service.addUser(new User(id, name, email));
                    System.out.println("Usuário adicionado!");
                }
                case 2 -> {
                    System.out.println("\n--- Usuários Cadastrados ---");
                    service.listUsers().forEach(System.out::println);
                }
                case 3 -> {
                    System.out.print("ID a atualizar: ");
                    int id = sc.nextInt(); sc.nextLine();
                    System.out.print("Novo nome: ");
                    String newName = sc.nextLine();
                    System.out.print("Novo email: ");
                    String newEmail = sc.nextLine();

                    if (service.updateUser(id, newName, newEmail))
                        System.out.println("Atualizado!");
                    else
                        System.out.println("Usuário não encontrado!");
                }
                case 4 -> {
                    System.out.print("ID a remover: ");
                    int id = sc.nextInt();
                    if (service.deleteUser(id))
                        System.out.println("Removido!");
                    else
                        System.out.println("Usuário não encontrado!");
                }
            }

        } while(option != 0);

        sc.close();
    }
}
