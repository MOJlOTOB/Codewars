//      A square of squares
//      www.codewars.com

/*  Instructions
Given an integral number, determine if it's a square number:
"In mathematics, a square number or perfect square is an integer that is the square of an integer;
in other words, it is the product of some integer with itself"
The tests will always use some integral number, so don't worry about that in dynamic typed languages.

    Examples
-1  =>  false
 0  =>  true
25  =>  true
26  =>  false
*/

const isSquare = (number) => {
    return Math.pow(Math.trunc(Math.sqrt(number)), 2) === number
}

// You have passed all of the tests! :)