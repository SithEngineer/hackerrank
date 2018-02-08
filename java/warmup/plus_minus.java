package io.github.sithengineer.algorithms.warmup;

import java.util.Scanner;

public class plus_minus {

    public static double[] calculateFractions(Integer total, int[] input) {

        Integer nrPositives = 0;
        Integer nrNegatives = 0;
        Integer nrZeroes = 0;

        for (int i = 0; i < total; ++i) {
            if (input[i] == 0) {
                nrZeroes++;
            } else if (input[i] < 0) { // is negative
                nrNegatives++;
            } else { // is positive
                nrPositives++;
            }
        }

        // positives
        // negatives
        // zeroes
        return new double[]{
                (nrPositives.doubleValue() / total.doubleValue()),
                (nrNegatives.doubleValue() / total.doubleValue()),
                (nrZeroes.doubleValue() / total.doubleValue())
        };
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int arr[] = new int[n];
        for (int arr_i = 0; arr_i < n; arr_i++) {
            arr[arr_i] = in.nextInt();
        }

        for (double f : calculateFractions(n, arr)) {
            System.out.println(f);
        }
    }
}
