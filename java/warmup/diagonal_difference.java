import java.util.Scanner;

public class diagonal_difference {

    public static int getDiagonalDifference(int[][] matrix) {
        int matrixN = matrix.length;
        int d1 = 0;
        int d2 = 0;
        for (int i = 0, iInv = matrixN - 1; i < matrixN; ++i, --iInv) {
            d1 += matrix[i][i];
            d2 += matrix[i][iInv];
        }

        return Math.abs(d1 - d2);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int a[][] = new int[n][n];
        for (int a_i = 0; a_i < n; a_i++) {
            for (int a_j = 0; a_j < n; a_j++) {
                a[a_i][a_j] = in.nextInt();
            }
        }

        System.out.println(getDiagonalDifference(a));
    }
}
