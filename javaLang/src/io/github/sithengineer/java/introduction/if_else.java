package io.github.sithengineer.java.introduction;

import java.util.Scanner;

public class if_else {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        String ans = "Not Weird";
        if(n%2==1 || ( n%2==0 && n>=6 && n<=20)) {
            ans = "Weird";
        }
        System.out.println(ans);

    }
}
