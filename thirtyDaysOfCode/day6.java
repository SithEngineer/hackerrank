

import java.util.Scanner;

public class day6 {

  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    // could be done with just one array, but has more complexity to read
    StringBuilder pairs = new StringBuilder();
    StringBuilder impairs = new StringBuilder();
    String data;

    int tests = Integer.parseInt(scan.nextLine());
    for (int testCase = 0; testCase < tests; ++testCase) {
      data = scan.nextLine();
      for (int idx = 0; idx < data.length(); ++idx) {
        if (idx % 2 == 0) {
          pairs.append(data.charAt(idx));
        } else {
          impairs.append(data.charAt(idx));
        }
      }
      System.out.printf("%s %s\n", pairs.toString(), impairs.toString());
      pairs.delete(0, pairs.length());
      impairs.delete(0, impairs.length());
    }
    scan.close();
  }
}