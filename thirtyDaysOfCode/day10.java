package io.github.sithengineer.thirtyDaysOfCode;

import java.util.Scanner;

public class day10 {
  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int result = 0;
    boolean hasAnyOne = false;
    char previous = '0';
    String nAsString = Integer.toBinaryString(n);
    for (char current : nAsString.toCharArray()) {
      if (previous == '1' && current == previous) {
        result++;
      }

      if (!hasAnyOne && current == '1') {
        hasAnyOne = true;
      }

      previous = current;
    }

    if (hasAnyOne && result == 0) {
      result++;
    }

    System.out.println(result);
  }
}
