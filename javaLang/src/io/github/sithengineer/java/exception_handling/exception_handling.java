package io.github.sithengineer.java.exception_handling;

import java.util.Scanner;

public class exception_handling {

    static class myCalculator {
        long power(int n, int p) throws Exception {

            if(n<0 || p<0) {
                throw new Exception("n and p should be non-negative");
            }

            return Math.round(Math.pow(n,p));
        }
    }

    public static void main(String []argh)
    {
        Scanner in = new Scanner(System.in);

        while(in.hasNextInt()) {

            int n = in.nextInt();
            int p = in.nextInt();
            myCalculator M = new myCalculator();
            try
            {
                System.out.println(M.power(n,p));
            }
            catch(Exception e)
            {
                System.out.println(e);
            }
        }

    }
}
