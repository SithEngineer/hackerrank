import java.util.Scanner;

public class strings_introduction {

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String a = sc.next();
    String b = sc.next();
    System.out.println(a.length() + b.length());
    System.out.println(a.compareTo(b) > 0 ? "Yes" : "No");
    System.out.printf(
        "%s%s %s%s",
        a.substring(0, 1).toUpperCase(),
        a.substring(1).toLowerCase(),
        b.substring(0, 1).toUpperCase(),
        b.substring(1).toLowerCase()
    );
  }
}
