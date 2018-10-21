

import java.util.Scanner;

public class oneD_array {

  static boolean canWinTheGame(int[] arr, int m) {
    boolean endIsReachable = false;

    // TODO

    return endIsReachable;
  }

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int testCases = in.nextInt();
    for (int testCase = 0; testCase < testCases; ++testCase) {
      int n = in.nextInt();
      int m = in.nextInt();
      int[] arr = new int[n];
      for (int i = 0; i < n; ++i) {
        arr[i] = in.nextInt();
      }
      System.out.println(canWinTheGame(arr, m) ? "YES" : "NO");
    }
  }
}
