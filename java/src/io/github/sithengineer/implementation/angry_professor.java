package io.github.sithengineer.implementation;

import java.util.Scanner;

public class angry_professor {

    static boolean shouldCancelClass(int totalStudents, int minStudents, int[] delayTimes) {

        for (int i = 0; i < totalStudents; ++i) {
            if (delayTimes[i] <= 0) {
                minStudents--;
            }
        }

        return minStudents > 0;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int t = in.nextInt();
        for (int a0 = 0; a0 < t; a0++) {
            int n = in.nextInt();
            int k = in.nextInt();
            int a[] = new int[n];
            for (int a_i = 0; a_i < n; a_i++) {
                a[a_i] = in.nextInt();
            }
            System.out.println(shouldCancelClass(n, k, a) ? "YES" : "NO");
        }
    }
}
