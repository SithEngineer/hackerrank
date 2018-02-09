import java.util.LinkedList;
import java.util.Scanner;

public class matrix_rotation_algo_v2 {

    static int MAX_RINGS;

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int m = in.nextInt();
        int n = in.nextInt();
        int r = in.nextInt();

        MAX_RINGS = Math.min(m,n)/2;

        int[][] a = new int[m][n];

        // scan input
        for ( int i = 0 ; i < m ; ++i) {
            for ( int j = 0 ; j < n ; ++j) {
                a[i][j] = in.nextInt();
            }
        }

        // TODO

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