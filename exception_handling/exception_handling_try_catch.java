

import java.util.Scanner;

public class exception_handling_try_catch {

  public static void main(String[] argh) {
    Scanner sc = new Scanner(System.in);

    int x = 0;
    int y = 0;

    try {
      x = sc.nextInt();
      y = sc.nextInt();
    } catch (Exception e) {
      System.out.println(e.getClass().getName());
      return;
    }

    try {
      System.out.println(x / y);
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
