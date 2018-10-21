import java.io.*;
import java.util.*;

public class Solution {
    
    private static boolean isPrime(long currentNumber) {
        if(currentNumber<=1) return false;
        
        long sqRoot = (long)Math.sqrt(currentNumber);
        for(long i = 2L ; i < sqRoot+1 ; ++i) {
            if(currentNumber%i==0){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        short numbers = sc.nextShort();
        while((numbers--)>0){
            long currentNumber = sc.nextLong();
            System.out.println(isPrime(currentNumber) ? "Prime": "Not prime");
        }
    }
}