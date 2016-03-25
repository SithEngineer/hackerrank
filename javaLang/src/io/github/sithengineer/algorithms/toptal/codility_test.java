package io.github.sithengineer.algorithms.toptal;

import java.util.Scanner;

public class codility_test {

    public int solution(int[] arr) {
        /*
        for(int p=1;p<arr.length-1;++p) {
            int prevSum = 0;
            int nextSum = 0;
            for(int i=0;i<p;++i) {
                prevSum+=arr[i];
            }
            for(int i=p+1;i<arr.length;++i) {
                nextSum+=arr[i];
            }
            if(prevSum == nextSum) return p;
        }
        return -1;
        */

        int[] forwardSums = new int[arr.length];
        int[] backwardSums = new int[arr.length];

        forwardSums[0] = arr[0];
        backwardSums[arr.length-1] = arr[arr.length-1];

        for(int i=1, j=arr.length-2;i<arr.length;++i, --j) {
            forwardSums[i] += (forwardSums[i-1] + arr[i]);
            backwardSums[j] += (backwardSums[j+1] + arr[j]);
        }

        for(int i=1;i<arr.length-1;++i) {
            if(forwardSums[i-1] == backwardSums[i+1]) return i;
        }

        return -1;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];

        for(int i=0;i<n;++i) {
            arr[i] = in.nextInt();
        }

        codility_test test = new codility_test();
        System.out.println(test.solution(arr));
    }
}