import java.util.Scanner;

public class Main {
    public static void main (String[] args){

        System.out.print("Number: ");
        Scanner input = new Scanner(System.in);
        int number = input.nextInt();

        if (number % 5 == 0 && number % 3 == 0) 
            System.out.println("FizzBuzz");
        else if (number % 3 == 0)
            System.out.println("Buzz");
        else if (number % 5 == 0)
            System.out.println("Fizz");
        else
            System.out.println(number);

    }
}