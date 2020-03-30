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

//Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

function triangleNum(num) { 
    if (num === 0) {
        return 0;
    }
    return num + triangleNum(num-1);
}

console.log(triangleNum(5))

function splitter(str, separator) {
    if(str.length === 0) {
        return '';
    }

    let index;
    index = str.indexOf(separator);
    if (index < 0) {
        index = str.length;
    }
    
    let newString;
    
    newString = str.slice(0, index);

    return [newString, ...splitter(str.substring(index+1, str.length), separator)]
}

console.log(splitter('02/20/2020', '/'))

// joses code below


// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

function countSheep(num) {
    if (num === 0) {
        return console.log('All sheep jumped over the fence')
    }
    console.log(`${num}: Another sheep jumps over the fence`)
    return countSheep(num - 1)
}

// countSheep(3);

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

// console.log(powerCalculator(5, 2))

function reverseString(str) {
    if(str.length === 0) {
        return ''
    }

    const char = str.slice(-1)

    return char + reverseString(str.substring(0, str.length - 1))
}

// console.log(reverseString('shoe'))


function binary(num) {
    if(num === 0) {
        return ''
    }

    let mod = `${num % 2}`



    return  binary(Math.floor(num / 2)) + mod
}

// console.log(binary(8))