package io.github.sithengineer.strings;

import java.util.Scanner;
import java.util.regex.Pattern;

public class regex {

    static class myRegex {
        private static final String NUMBERS_MATCH = "([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])";
        private static final Pattern _pattern;
        static {
            _pattern = Pattern.compile("("+NUMBERS_MATCH+"\\.){3}"+NUMBERS_MATCH);
        }

        final String pattern;

        myRegex() {
            pattern = _pattern.pattern();
        }
    }

    public static void main(String []args)
    {
        Scanner in = new Scanner(System.in);
        while(in.hasNext())
        {
            String IP = in.next();
            System.out.println(IP.matches(new myRegex().pattern));
        }

    }
}
