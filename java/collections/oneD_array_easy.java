import java.util.Scanner;

public class oneD_array_easy {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for(int i = 0; i<n; ++i) {
            arr[i] = in.nextInt();
        }
        int subNegatives = 0;
        int index = 0;
        int sum = 0;
        while(index<arr.length) {
            sum = 0;
            for(int i = index ; i<arr.length ; ++i) {
                sum += arr[i];
                if(sum<0) {
                    subNegatives++;
                    //System.out.printf("[%d:%d]\n", index, i);
                }
            }
            index++;
        }
        System.out.println(subNegatives);
    }
}
