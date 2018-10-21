package io.github.sithengineer.warmup;

import java.util.Scanner;

public class time_conversion {

  static String fromAmPmtoMilitaryFormat(String time) {

    // could use a SimpleDateFormatter to solve this.
    // going the hardway though...

    String[] splittedTime = time.split(":");

    int hours = Integer.parseInt(splittedTime[0]);

    String remainingTime = time.substring(2, time.length() - 2);
    String resultTime;

    if (time.endsWith("PM")) {
      // add 12 to hours
      if (hours < 12) {
        hours += 12;
      }
      resultTime = String.format("%02d%s", hours, remainingTime);
    } else if (hours == 12) {
      hours = 0;
      resultTime = String.format("%02d%s", hours, remainingTime);
    } else {
      resultTime = time.substring(0, time.length() - 2);
    }

    return resultTime;
  }

  public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    String time = in.next();
    System.out.println(fromAmPmtoMilitaryFormat(time));
  }
}
