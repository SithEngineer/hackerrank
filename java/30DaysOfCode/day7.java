import java.io.*;
import java.util.*;


public class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        int i=0;
        for(i=0; i < n; i++){
            arr[i] = in.nextInt();
        }
        in.close();

        while((i--)>0) System.out.printf("%d%c", arr[i], (i>=0?' ':Character.MIN_VALUE));
    }
}
