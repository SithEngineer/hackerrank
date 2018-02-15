package io.github.sithengineer.implementation;

import java.util.Scanner;

public class matrix_rotation_algo {

    static int MAX_RINGS;

    static int getCurrentRing(int i, int j, int m, int n) {

        int currentRing = 0;

        for(int c=0 ; (i-c>0 && j-c>0 && i+c<(m-1) && j+c<(n-1)) ; c++) {

            if(c >= MAX_RINGS) {
                currentRing--;
            }else {
                currentRing++;
            }
        }

        return currentRing;
    }

    static int[] getRotatedXY(int i, int j, int m, int n, int r) {
        int currentR = r;
        int currentI = i;
        int currentJ = j;

        int currentRing = getCurrentRing(i, j, m, n);

        int minI = currentRing;
        int maxI = ( m - 1 - currentRing );
        int minJ = currentRing;
        int maxJ = ( n - 1 - currentRing );

        boolean goingLeft = currentJ > minJ && currentI == minI;
        boolean goingDown = ( !goingLeft && currentJ == minJ && currentI < maxI);
        boolean goingRight = ( !goingLeft && !goingDown && currentJ < maxJ && currentI == maxI ) ;
        boolean goingUp = ( !goingLeft && !goingDown && !goingRight); // && currentI >= minI);

        while (currentR>0) {

            if(goingLeft) {
                currentJ--;
                if(currentJ<minJ) {
                    goingLeft = false;
                    goingDown = true;
                    currentJ = minJ;
                }
            }

            if(goingDown) {
                currentI++;
                if(currentI>maxI) {
                    goingDown = false;
                    goingRight = true;
                    currentI = maxI;
                }
            }

            if(goingRight) {
                currentJ++;
                if(currentJ>maxJ) {
                    goingRight = false;
                    goingUp = true;
                    currentJ = maxJ;
                }
            }

            if(goingUp) {
                currentI--;
                if(currentI<minI) {
                    goingUp = false;
                    goingLeft = true;
                    currentI = minI;
                    currentR += 1;
                }
            }

            currentR--;
        }

        return new int[]{currentI, currentJ};
    }

    static void rotateValue(int value, int i, int j, int[][] dest, int m, int n, int r) {
        int[] currentIJ = getRotatedXY(i, j, m, n, r);
        dest[currentIJ[0]][currentIJ[1]] = value;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int m = in.nextInt();
        int n = in.nextInt();
        int r = in.nextInt();

        int[][] a = new int[m][n];
        int[][] result = new int[m][n];

        MAX_RINGS = Math.min(m,n)/2;

        // scan input
        for ( int i = 0 ; i < m ; ++i) {
            for ( int j = 0 ; j < n ; ++j) {
                a[i][j] = in.nextInt();
            }
        }

        // rotate matrix
        for ( int i = 0 ; i < m ; ++i) {
            for ( int j = 0 ; j < n ; ++j) {
                rotateValue(a[i][j], i, j, result, m, n, r);
            }
        }

        // print output
        for (int i = 0; i < m; ++i) {
            for ( int j = 0 ; j < n ; ++j) {
                System.out.print(a[i][j]);
                System.out.print(' ');
            }
            System.out.print('\n');
        }
    }
}