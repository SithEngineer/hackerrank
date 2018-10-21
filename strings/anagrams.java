package io.github.sithengineer.strings;

import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class anagrams {

  static HashMap<Character, Integer> getCharFrequencies(String s) {
    HashMap<Character, Integer> map = new HashMap<>();
    char temp;
    for (int i = 0; i < s.length(); ++i) {
      temp = s.charAt(i);
      if (!map.containsKey(temp)) {
        map.put(temp, 0);
      } else {
        map.put(temp, map.get(temp) + 1);
      }
    }
    return map;
  }

  static boolean isAnagram(String a, String b) {
    if (a.length() != b.length()) return false;

    HashMap<Character, Integer> freqA = getCharFrequencies(a);
    HashMap<Character, Integer> freqB = getCharFrequencies(b);

    for (Map.Entry<Character, Integer> freqAEntry : freqA.entrySet()) {
      if (
          !freqB.containsKey(freqAEntry.getKey())
              || freqB.get(freqAEntry.getKey()).intValue() != freqAEntry.getValue().intValue()
          ) {
        return false;
      }

      freqB.put(freqAEntry.getKey(), 0);
    }

    for (Map.Entry<Character, Integer> freqBEntry : freqB.entrySet()) {
      if (freqBEntry.getValue() > 0) {
        return false;
      }
    }

    return true;
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String a = sc.next();
    String b = sc.next();

    if (isAnagram(a.toLowerCase(), b.toLowerCase())) {
      System.out.println("Anagrams");
    } else {
      System.out.println("Not Anagrams");
    }
  }
}
