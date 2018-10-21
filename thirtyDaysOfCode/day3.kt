// If n is odd, print Weird
// If n is even and in the inclusive range of 2 to 5, print Not Weird
// If n is even and in the inclusive range of 6 to 20, print Weird
// If n is even and greater than 20, print Not Weird

import java.util.Scanner

fun main(args: Array<String>) {
    val input = Scanner(System.`in`)
    val n = input.nextInt()
    input.close()
    if (n % 2 != 0 || (n % 2 == 0 && n >= 6 && n <= 20)) {
        println("Weird")
    } else {
        println("Not Weird")
    }
}