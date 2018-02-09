import java.math.BigDecimal;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Scanner;

public class big_decimal {

    public static void main(String[] argh) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        String[] s =new String[n+2];

        for(int i=0;i<n;i++)
        {
            s[i] = sc.next();
        }

        Arrays.sort(s, new Comparator<String>() {
            @Override
            public int compare(String o1, String o2) {
                if(o1==null) return 0;
                if(o2==null) return 0;

                BigDecimal o1d = new BigDecimal(o1);
                BigDecimal o2d = new BigDecimal(o2);

                return o2d.compareTo(o1d);
            }
        });

        for(int i=0;i<n;i++)
        {
            System.out.println(s[i]);
        }
    }
}
