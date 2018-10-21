

import java.util.Scanner;

public class staircase {

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    for (int stair = 1; stair < n + 1; ++stair) {
      int spaceCount = (n - stair);
      String spaces = new String(new char[spaceCount]).replace("\0", " ");
      String treeBranches = new String(new char[stair]).replace("\0", "#");
      System.out.println(spaces + treeBranches);
    }
  }
}
