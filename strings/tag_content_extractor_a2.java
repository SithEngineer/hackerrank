import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Pattern;

public class tag_content_extractor_a2 {

  static final Pattern ptrn = Pattern.compile("\\<([\\w ]+)\\>(.+)(\\<\\/\\1\\>)");

  static List<String> getContent(String line) {
    return Arrays.asList(ptrn.split(line));
  }

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);

    int testCases = Integer.parseInt(in.nextLine());

    while (testCases > 0) {
      String line = in.nextLine();
      List<String> matches = getContent(line);
      if (matches == null || matches.size() == 0) {
        System.out.println("None");
      } else {
        for (String match : matches) {
          System.out.println(match);
        }
      }

      testCases--;
    }
  }
}
