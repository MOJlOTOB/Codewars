//      Binaries

/*      Instructions
description: https://www.codewars.com/kata/5d98b6b38b0f6c001a461198

        Examples
code("77338")  ==> "0011110011110111011100011000"
code("0011121314") ==> "1010111111011011011111001100"
code("77338855") ==> "001111001111011101110001100000011000001101001101"

decode("0011110011110111011100011000") ==> "77338"
decode("1010111111011011011111001100") ==> "0011121314"
decode("001111001111011101110001100000011000001101001101") ==> "77338855"
*/

const base = ['10', '11', '0110', '0111', '001100', '001101', '001110', '001111', '00011000', '00011001']

function code(string) {
    return [...string].map(el => base[el]).join('')
}

function decode(string) {
    const regExp = new RegExp(base.join('|'), 'g')
    return string.replace(regExp, match => base.indexOf(match))
}

console.log(code('77338'))
console.log(code('0011121314'))
console.log(code('77338855'))

console.log(decode('0011110011110111011100011000'))
console.log(decode('1010111111011011011111001100'))
console.log(decode('001111001111011101110001100000011000001101001101'))

// node "Binaries"