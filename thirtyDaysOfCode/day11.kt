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



fun main(args: Array<String>) {
    val scan = Scanner(System.`in`)

    val arr = Array<Array<Int>>(6, { Array<Int>(6, { 0 }) })

    for (i in 0 until 6) {
        arr[i] = scan.nextLine().split(" ").map{ it.trim().toInt() }.toTypedArray()
    }
    
    println(maximumHourglassSum(arr))
}

private fun maximumHourglassSum(data: Array<Array<Int>>): Int {
    val maximumSideLength = data.size
    var maximumSum = Int.MIN_VALUE

    for (baseIndex_X: Int in 0.until(maximumSideLength - 2)) {
        for (baseIndex_Y: Int in 0.until(maximumSideLength - 2)) {
            val currentSum = hourglassSum(baseIndex_X, baseIndex_Y, data)
            if (currentSum > maximumSum) {
                maximumSum = currentSum
            }
        }
    }

    return maximumSum
}

private fun hourglassSum(baseIndexXX: Int, baseIndexYY: Int, data: Array<Array<Int>>): Int {
    var sum = 0
    for (topLine: Int in baseIndexXX.until(baseIndexXX + 3)) {
        sum += data[baseIndexYY][topLine]
    }
    sum += data[baseIndexYY + 1][baseIndexXX + 1]
    for (bottomLine: Int in baseIndexXX.until(baseIndexXX + 3)) {
        sum += data[baseIndexYY + 2][bottomLine]
    }
    return sum
}
