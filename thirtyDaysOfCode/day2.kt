import java.util.Scanner

fun main(args: Array<String>) {
    val input = Scanner(System.`in`)
    val mealCost = input.nextDouble()
    val tipPercent = input.nextDouble()
    val taxPercent = input.nextDouble()
    input.close()

    val totalCost = Math.round(
            mealCost + (mealCost * (tipPercent / 100.0)) + (mealCost * (taxPercent / 100.0))).toInt()
    println("The total meal cost is $totalCost dollars.")
}