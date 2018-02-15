package io.github.sithengineer.introduction;

import java.util.Scanner;

public class end_of_file {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int lineCount = 1;
        while(sc.hasNext()) {
            System.out.printf("%d %s\n", lineCount++, sc.nextLine());
        }
    }
}
