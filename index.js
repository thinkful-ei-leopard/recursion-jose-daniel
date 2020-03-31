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

// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

function fib(num, sequence=[]) {
    if (num <= sequence.length) {
        return sequence
    }

    if (sequence.length === 0 || sequence.length === 1) {
        sequence.push(1)
    }
    else {
        sequence.push(sequence[sequence.length-2] + sequence[sequence.length-1])
    }

    return fib(num, sequence);
}

console.log(fib(7))

//Write a recursive function that finds the factorial of a given number. The factorial of a number can be found by multiplying that number by each number between itself and 1. For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

function factorial(num, fact=num) {
    if (num <= 1) {
        return fact
    }
    fact = fact * (num-1)
    
    return factorial(num-1, fact) //recursive
}

console.log(factorial(5))

// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path though the maze.

// You can use the following mazes to test your program.

let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
for (let x = 0; x < mySmallMaze.length; x++) {
    let item = mySmallMaze[x]
    for (let y = 0; y < item.length; y++) {
        let node = item[y]
        console.log(node)
    }
    
}


// let maze = [
//     [' ', ' ', ' ', '*', ' ', ' ', ' '],
//     ['*', '*', ' ', '*', ' ', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', ' '],
//     [' ', '*', '*', '*', '*', '*', ' '],
//     [' ', ' ', ' ', ' ', ' ', ' ', 'e']
// ];
// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

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