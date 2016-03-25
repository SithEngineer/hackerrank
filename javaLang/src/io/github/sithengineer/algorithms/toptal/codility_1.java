package io.github.sithengineer.algorithms.toptal;

import java.util.Scanner;

public class codility_1 {

    public int solution(int x, int[] arr) {

        final int arrLength = arr.length;

        int[] forwardEquals = new int[arrLength];
        int[] backwardDiffs = new int[arrLength];

        forwardEquals[0] = arr[0] == x ? 1 : 0;
        backwardDiffs[arrLength-1] = arr[arrLength-1] == x ? 1 : 0;

        for(int i=1, j=arrLength-2 ; i<arrLength ; ++i, --j) {
            forwardEquals[i] = ((arr[i]==x ? 1 : 0) + forwardEquals[i-1]);
            backwardDiffs[j] = ((arr[j]==x ? 0 : 1) + backwardDiffs[j+1]);
        }

        for(int i=1;i<arr.length-1;++i) {
            if(forwardEquals[i-1] == backwardDiffs[i+1]) return i;
        }

        return -1;
    }

    public int solution2(int x, int[] arr) {

        int elementsVisited = 0;

        int leftIndex = 0;
        int righIndex = arr.length-1;

        int equalsSum = 0;
        int diffsSum = 0;

        while (elementsVisited < (arr.length/2) ) {
            // TODO
        }

        return leftIndex;

    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int x = in.nextInt();
        int n = in.nextInt();
        int[] arr = new int[n];

        for(int i=0;i<n;++i) {
            arr[i] = in.nextInt();
        }

        codility_1 test = new codility_1();
        System.out.println(test.solution2(x, arr));
    }
}