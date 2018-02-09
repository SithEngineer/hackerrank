import java.util.Scanner;

public class static_initializer_block {

    static final boolean flag;
    static final int B;
    static final int H;

    static {
        try(Scanner sc = new Scanner(System.in)) {
            B = sc.nextInt();
            H = sc.nextInt();
        }

        flag = B>0 && H>0;

        if(!flag) {
            Exception ex = new Exception("Breadth and height must be positive");
            //throw ex;
            System.out.print(ex.toString());
        }
    }

    public static void main(String[] args){
        if(flag){
            int area=B*H;
            System.out.print(area);
        }

    }
}
