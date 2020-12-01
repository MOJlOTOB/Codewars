//      Maximum Length Difference
//      www.codewars.com

/*  Instructions
You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z.
Let x be any string in the first array and y be any string in the second array.
Find max(abs(length(x) − length(y)))
If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).

    Example
a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
mxdiflg(a1, a2) ==> 13
*/

function mxdiflg(a1, a2) {
    const value1 = Math.abs(Math.min(...a1.map(el => el.length)) - Math.max(...a2.map(el => el.length)))
    const value2 = Math.abs(Math.max(...a1.map(el => el.length)) - Math.min(...a2.map(el => el.length)))
    return a1.length && a2.length ? Math.max(value1, value2) : -1
}

// You have passed all of the tests! :)