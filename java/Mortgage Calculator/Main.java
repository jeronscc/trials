import java.text.NumberFormat;
import java.util.Scanner;


public class Main {
    public static void main (String[] args){
        byte months = 12;
        byte percent = 100;


        // User's Name
        System.out.print("Tell me your name: ");
        Scanner inputName = new Scanner(System.in);
        String name = inputName.nextLine().trim();
        System.out.println("Welcome to Mortgage Calculator, " + name + "!");
        
        // Pricipal
        System.out.print("Principal: ");
        Scanner inputPrincipal = new Scanner(System.in);
        int principal = inputPrincipal.nextInt();

        // Annual Interest Rate
        System.out.print("Annual Interest Rate: ");
        Scanner inputRate = new Scanner(System.in);
        float rate = ((inputRate.nextFloat())/percent)/months;

        // Period
        System.out.print("Period (Years): ");
        Scanner inputPeriod = new Scanner(System.in);
        int period = (inputPeriod.nextInt()) * months;

        // Computation
        float mortgage = principal * (float)((rate * Math.pow((1 + rate), period))/((Math.pow((1 + rate), period)) - 1));

        // Currency Conversion
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        currency.format(mortgage);

        System.out.println("Mortage: " + mortgage);

    }
}