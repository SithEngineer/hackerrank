import java.io.*
import java.math.*
import java.security.*
import java.text.*
import java.util.*
import java.util.concurrent.*
import java.util.function.*
import java.util.regex.*
import java.util.stream.*
import kotlin.collections.*
import kotlin.comparisons.*
import kotlin.io.*
import kotlin.jvm.*
import kotlin.jvm.functions.*
import kotlin.jvm.internal.*
import kotlin.ranges.*
import kotlin.sequences.*
import kotlin.text.*

/*

Task:
-----
Given a base-10 integer, n, convert it to binary (base-2). Then find and print the base-10 integer denoting 
the maximum number of consecutive 's in 's binary representation.

Input Format:
-------------
A single integer, n.

Constraints:
------------
1 <= n <= 10^6

 */

fun main(args: Array<String>) {
    val scan = Scanner(System.`in`)
    val n = scan.nextLine().trim().toInt()
    
    var consecutiveOnes = countConsecutiveOnes(n.toString(2))
    println(consecutiveOnes)
}

private fun countConsecutiveOnes(data: String): Int {
    if(data.length==1 && data[0]=='0') return 0
    return data.split('0').maxBy { ones -> ones.length }!!.length
}