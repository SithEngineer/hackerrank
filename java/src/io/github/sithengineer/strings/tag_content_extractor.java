package io.github.sithengineer.strings;

import java.util.LinkedList;
import java.util.List;
import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class tag_content_extractor {

    static List<String> getContent2(String line) {
        LinkedList<String> matches = new LinkedList<>();

        Matcher m = ptrn.matcher(line);

        while(m.find()) {
            matches.add(m.group(2));
        }

        return matches;
    }

    static final Pattern ptrn = Pattern.compile("<(.+)>([^<]+)<\\/\\1>");

    public static void main(String[] args){
        Scanner in = new Scanner(System.in);

        int testCases = Integer.parseInt(in.nextLine());

        while(testCases>0){
            String line = in.nextLine();
            List<String> matches = getContent2(line);
            if(matches==null || matches.size()==0) {
                System.out.println("None");
            }
            else{
                for(String match : matches) {
                    System.out.println(match);
                }
            }

            testCases--;
        }
    }
}
