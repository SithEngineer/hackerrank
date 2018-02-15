package io.github.sithengineer.strings;

import java.util.Scanner;

public class string_compare {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        String s = sc.nextLine();
        int n = sc.nextInt();

        String temp = s.substring(0, n);
        String biggest = temp;
        String smallest = temp;

        for(int c = 1 ; c < (s.length()-n+1) ; c++ ) {
            temp = s.substring(c, c+n);

            if(temp.compareTo(biggest)>=0) {
                biggest = temp;
            }

            if(temp.compareTo(smallest)<=0) {
                smallest = temp;
            }
        }

        System.out.printf("%s\n%s", smallest, biggest);
    }
}
