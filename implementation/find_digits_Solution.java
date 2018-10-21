package io.github.sithengineer.implementation;

import java.util.Scanner;

public class find_digits_Solution {

  static int evenlyDivide(int d) {
    int dividends = 0;

    int moddedD = d;
    int divider = d % 10;

    while (moddedD > 0) {
      if (divider > 0 && ((d % divider) == 0)) {
        dividends++;
      }

      moddedD /= 10;
      divider = moddedD % 10;
    }

    return dividends;
  }

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int t = in.nextInt();
    int[] result = new int[t];

    for (int i = 0; i < t; i++) {
      int n = in.nextInt();
      result[i] = evenlyDivide(n);
    }

    for (int i = 0; i < t; i++) {
      System.out.println(result[i]);
    }
  }
}
