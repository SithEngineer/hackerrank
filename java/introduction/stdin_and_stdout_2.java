package io.github.sithengineer.java.introduction;

import java.util.Scanner;

public class stdin_and_stdout_2 {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int x = sc.nextInt();
        double y = sc.nextDouble();

        String s = sc.nextLine();
        s += sc.nextLine();

        System.out.println("String: "+s);
        System.out.println("Double: "+y);
        System.out.println("Int: "+x);
    }

}
