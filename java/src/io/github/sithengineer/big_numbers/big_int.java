package io.github.sithengineer.big_numbers;

import java.math.BigInteger;
import java.util.Scanner;

public class big_int {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        BigInteger bigInt1 = new BigInteger(sc.nextLine(), 10);
        BigInteger bigInt2 = new BigInteger(sc.nextLine(), 10);

        System.out.println(bigInt1.add(bigInt2));
        System.out.println(bigInt1.multiply(bigInt2));
    }
}
