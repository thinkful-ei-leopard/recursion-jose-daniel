// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

function countSheep(num) {
    if (num === 0) {
        return console.log('All sheep jumped over the fence')
    }
    console.log(`${num}: Another sheep jumps over the fence`)
    return countSheep(num - 1)
}

countSheep(3);

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(base, exp) {
    if(exp < 0) {
        return console.log('exponent should be >=0')
    }

    if(exp === 0) {
        return 1
    }
    return base * powerCalculator(base, exp - 1)
}

console.log(powerCalculator(5, 2))

function reverseString(str) {
    if(str === '') {
        return '';
    }
    const newChar = str[str.length-1];
    return newChar + reverseString(str.substring(0, str.length-1));
}
console.log(reverseString('string'))