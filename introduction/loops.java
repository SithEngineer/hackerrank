package io.github.sithengineer.introduction;

import java.util.Scanner;

public class loops {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int t = sc.nextInt();
    for (int i = 0; i < t; ++i) {
      int a = sc.nextInt();
      int b = sc.nextInt();
      int n = sc.nextInt();

      long prev = Math.round(a + b);
      System.out.printf("%d ", prev);

      long current = 0;
      for (int c = 1; c < n; ++c) {
        current = Math.round(Math.pow(2, c) * b);
        System.out.printf("%d ", prev + current);
        prev += current;
      }
      System.out.print("\n");
    }
  }
}
