package io.github.sithengineer.algorithms.toptal;

import java.util.Scanner;

public class codility_3 {

    private static final int MAX_STEPS = 100000000;

    public int recursive(int a, int b, int x, int y, int count) {
        if(x>a || y>b) return -1;

        if(x==a && y==b) return count;

        if(count>=MAX_STEPS) {
            return -2;
        }

        int res1 = recursive(a, b, x+1, y+2, count+1);
        int res2 = recursive(a, b, x+2, y+1, count+1);
        int res3 = recursive(a, b, x-1, y+2, count+1);
        int res4 = recursive(a, b, x-2, y+1, count+1);
        int res5 = recursive(a, b, x+1, y-2, count+1);
        int res6 = recursive(a, b, x+2, y-1, count+1);

        if(res1>0) return res1;
        if(res2>0) return res2;
        if(res3>0) return res3;
        if(res4>0) return res4;
        if(res5>0) return res5;
        if(res6>0) return res6;

        return -1;
    }

    public int solution(int a, int b) {

        int res1 = recursive(a, b, a+1, b+2, 1);
        int res2 = recursive(a, b, a+2, b+1, 1);
        int res3 = recursive(a, b, a-1, b+2, 1);
        int res4 = recursive(a, b, a-2, b+1, 1);
        int res5 = recursive(a, b, a+1, b-2, 1);
        int res6 = recursive(a, b, a+2, b-1, 1);

        if(res1>0) return res1;
        if(res2>0) return res2;
        if(res3>0) return res3;
        if(res4>0) return res4;
        if(res5>0) return res5;
        if(res6>0) return res6;

        if(
            (res1 == -2) &&
            (res2 == -2 ) &&
            (res3 == -2 ) &&
            (res4 == -2 ) &&
            (res5 == -2 ) &&
            (res6 == -2 )
        ) return -2;

        return -1;
    }


    private static final int KNIGHT_VECTOR = 3;
    public int solution2(int a, int b) {

        // just stay put
        if(a==0 && b==0) return 0;

        if(a<2 && b<2) {
            // too close to the starting position. a minimum of 3 movements required.
            if(a==1 && b==1) return 4;
            return 3;
        }

        float total_vector = a+b;
        return Math.round( total_vector / KNIGHT_VECTOR );
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int a = in.nextInt();
        int b = in.nextInt();

        codility_3 test = new codility_3();
        System.out.println(test.solution2(a, b));
    }
}