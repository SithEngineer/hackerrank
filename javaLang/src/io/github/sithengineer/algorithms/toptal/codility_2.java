package io.github.sithengineer.algorithms.toptal;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.Scanner;

public class codility_2 {

    /*
    private static boolean[] toBinary(int number, int base) {
        final boolean[] ret = new boolean[base];
        for (int i = 0; i < base; i++) {
            ret[base - 1 - i] = (1 << i & number) != 0;
        }
        return ret;
    }
    */

    private int[] invertedSum(int value) {
        LinkedList<Integer> values = new LinkedList<>();



        return null;
    }

    private int sum(int[] a) {
        int res = 0;
        for(int i=0 ; i<a.length ; ++i) {
            res += a[i]*Math.pow(-2, i);
        }
        return res;
    }

    public int[] solution(int[] a) {

        int input = sum(a);
        int desiredResult = input * -1;
        String result = Integer.toBinaryString(desiredResult);

        /*
        int[] solution = new int[result.length()];
        for(int i=0;i<result.length();++i) {
            solution[i] = result.charAt(i) == '1' ? 1 : 0;
        }
        return solution;
        */
        return null;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];

        for(int i=0;i<n;++i) {
            arr[i] = in.nextInt();
        }

        codility_2 test = new codility_2();
        System.out.println(Arrays.toString(test.solution(arr)).replace("false", "0").replace("true", "1"));
    }
}