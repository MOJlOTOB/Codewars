//      Don't give me five!

/*      Instructions
description: https://www.codewars.com/kata/5813d19765d81c592200001a
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it.
The start and the end number are both inclusive!

        Examples
dontGiveMeFive(1, 9) ==> 1,2,3,4,6,7,8,9 ==> 8
dontGiveMeFive(4, 17) ==> 4,6,7,8,9,10,11,12,13,14,16,17 ==> 12
*/

function dontGiveMeFive(start, end) {
    return [...Array((end - start) + 1).keys()]
        .map(el => el + start)
        .filter(el => !String(el).includes('5')).length
}

console.log(dontGiveMeFive(1, 9))
console.log(dontGiveMeFive(4, 17))

// node "Don't give me five"