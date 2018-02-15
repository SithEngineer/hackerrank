package io.github.sithengineer.strings;

import java.util.Scanner;
import java.util.regex.Pattern;

public class string_token {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine().trim();

        Pattern isEmptyPtrn = Pattern.compile(" +");
        if(s.isEmpty() || isEmptyPtrn.matcher(s).matches()) {
            System.out.println(0);
            return;
        }

        Pattern splitPtrn = Pattern.compile("[ !,?._'@]+");
        String[] words = splitPtrn.split(s, 0);

        System.out.println(words.length);
        for(int i=0 ; i<words.length ; ++i) {
            System.out.println(words[i]);
        }
    }
}
