// Code wars solutions 

// Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

// Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.


function solution(roman) {
    var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
    var numbers = roman.split('');
    var sum = 0;

    for (i = 0; i < numbers.length; i++) {
        if (data[numbers[i]] < data[numbers[i + 1]]) {
            sum += data[numbers[i + 1]] - data[numbers[i]];
            i++;
        }
        else {
            sum += data[numbers[i]];
        }
    }

    return sum;
}

// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS) HH = hours, padded to 2 digits, range: 00 - 99 MM = minutes, padded to 2 digits, range: 00 - 59 SS = seconds, padded to 2 digits, range: 00 - 59 The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds) {
    var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds % 60;
    return formatDate(hours) + ':' + formatDate(minutes) + ':' + formatDate(newSeconds)
}

function formatDate(n) {
    var number = Number.parseInt(n)
    return number > 9 ? number : '0' + number;
}

function narciscistic(value) {
    // convert number to string 
    const valStr = `${value}`;
    // check length of string 
    const len = valStr.length;

    return valStr.split('') //convert string to array
        .reduce((acc, item) => acc += Math.pow(+item, len), 0) === value; //sumar todos los numeros elevados a su potencia de longitud y compararlo con el valor inicial 
}

// Sum array of numbers

function sum(numbers) {
    return numbers.reduce((acc, item) => acc += item, 0);
}

// Find missing letter in array 

function missingLetter(array) {

    for (i = 0; i < array.length - 1; i++) {
        const curr = arr[i].charCodeAt(0);
        const next = arr[i + 1].charCodeAt(0);

        if (curr + 1 != next) {
            return String.fromCharCode(curr + 1); //get letter from Char Code that is missing, with the number of index   
        }
    }
}

// Write a function that remove exclamation mark from string 

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
}

// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
}

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
// #Examples:
// Kata.getMiddle("test") should return "es"
// Kata.getMiddle("testing") should return "t"
// Kata.getMiddle("middle") should return "dd"
// Kata.getMiddle("A") should return "A"

function getMiddle(s) {
    let startIndex;
    let endIndex;

    if (s.length % 2 === 0) {
        startIndex = Math.floor(s.length / 2) - 1;
        endIndex = Math.floor(s.length / 2);
    } else {
        startIndex = Math.floor(s.length / 2);
        endIndex = Math.floor(s.length / 2) + 1;
    }

    return s.substring(startIndex, endIndex);
}

// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

const letters = {};

function isPangram(string) {
    for (let i = 97; i <= 122; i++) {
        letters[String.fromCharCode(i)] = 0;
    }

    string.split('')
        .forEach(l => {
            l = l.toLowerCase();
            if (letters[l] != undefined) {
                letters[l]++;
            }
        });

    return Object.keys(letters).every(key => letters[key] > 0);
}

// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    let splitStr = str.split('');

    vowels.forEach(v => splitStr.forEach(l => {
        if (l === v) {
            count++;
        }
    }))
    return count;
}

function getCount(str) {
    var vowelsCount = 0;
    var vowels = ["a", "e", "i", "o", "u"];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                vowelsCount++;
            }
        }
    }

    return vowelsCount;
}


// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
    let str = `${num}`.split('');
    //   console.log(str);

    return +str.map(n => {
        return Math.pow(+n, 2);
    }).join('');
}

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
    let sortNums = numbers.split(' ').sort((a, b) => a - b);

    let maxN = sortNums[sortNums.length - 1];
    let minN = sortNums[0];

    let newStr = `${maxN} ${minN}`

    return newStr;
}

// or 

function highAndLow(numbers) {
    var arr = numbers.split(' ').sort((a, b) => a - b);
    return arr[arr.length - 1] + ' ' + arr[0];
}

// We need a function that can transform a number into a string.

function numberToString(num) {
    // Return a string of the number here!
    return `${num}`
}

// or 

function numberToString(num) {
    return num.toString();
}

// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
// // Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false

var isSquare = function (n) {
    if (n < 0) {
        return false;
    } else {
        if (Math.sqrt(n) % 1 === 0) {
            return true
        } else {
            return false
        }
    }
}

// or

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
}

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421

function descendingOrder(n) {
    //...
    return +`${n}`.split('').sort((a, b) => b - a).join('');
}

// Complete the solution so that it reverses the string passed into it.
// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
    return str.split('').reverse().join('');
}

// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    if (num > 0) {
        return num * -1
    } else {
        return num;
    }
}

// You get an array of numbers, return the sum of all of the positives ones.
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
    return arr.reduce((acc, item) => item > 0 ? acc + item : acc, 0);
}

// or 

function positiveSum(arr) {
    return arr
        .filter(num => num > 0)
        .reduce((a, b) => a + b, 0);
}

// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(e => typeof e === 'number')
}

// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
    let newArr = [];
    for (let i = 0; i < n; i++) {
        newArr.push(s);
    }
    return newArr.join('');
}

// or 

function repeatStr(n, s) {
    return s.repeat(n);
}

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
    let strArr = str.split('');

    let countO = 0;
    let countX = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'o' || str[i] === 'O') {
            countO++;
        } else if (str[i] === 'x' || str[i] === 'X') {
            countX++;
        }
    }

    if (countO === countX) {
        return true;
    } else {
        return false;
    }
}

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    return s.split('').map((e, i) => {
        return e.toUpperCase() + e.toLowerCase().repeat(i)
    }).join('-');
}

//   An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str) {

    let newStr = str.toLowerCase().split('').sort();

    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === newStr[i + 1]) {
            return false;
        }
    }

    return true;
}

//   Simple, given a string of words, return the length of the shortest word(s).
//   String will never be empty and you do not need to account for different data types.

function findShort(s) {

    let lengths = s.split(' ').map(w => {
        return w.length
    });

    return Math.min(...lengths)

}

//   or 

function findShort(s) {
    return Math.min(...s.split(" ").map(s => s.length));
}

// Your goal is to create a function that removes the first and last characters of a string. 

function removeChar(str) {
    return str.slice(1, -1)
};

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna) {

    let newArr = dna.split('');

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === 'A') {
            newArr[i] = 'T'
        } else if (newArr[i] === 'T') {
            newArr[i] = 'A'
        } else if (newArr[i] === 'G') {
            newArr[i] = 'C'
        } else if (newArr[i] === 'C') {
            newArr[i] = 'G'
        }
    }

    return newArr.join('')
}

//   Given an array of integers your solution should find the smallest integer.
// For example:
// Given [34, 15, 88, 2] your solution will return 2

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}

//   Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
//   For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

function sumTwoSmallestNumbers(numbers) {
    //Code here

    let sortNums = numbers.sort((a, b) => a - b);
    return sortNums[0] + sortNums[1]
}

//   Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x) {
    return x.replace(/\s/g, '');

}

// or 

function noSpace(x) {
    return x.split(' ').join('')
}

//   Complete the square sum function so that it squares each number passed into it and then sums the results together.
//   For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers) {
    return numbers.reduce((acc, i) => {
        return acc += Math.pow(i, 2)
    }, 0)
}

//   Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//   For example:
//   summation(2) -> 3
//   1 + 2

var summation = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i
    }
    return sum;
}

//   Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
// Examples
// "4556364607935616" --> "############5616"

function maskify(cc) {
    let newArr = cc.split('');

    for (let i = 0; i < newArr.length - 4; i++) {
        newArr[i] = '#';
    }

    return (newArr.join(''))
}

// or 

function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//   For example,
//   [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//   The correct answer would be 17.

function countSheeps(arrayOfSheep) {
    let count = 0;

    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++
        }
    }

    return count;
}

//   or 

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}

//   Description:
// Make a simple function called greet that returns the most-famous "hello world!".

const greet = () => "hello world!";

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends) {
    return friends.filter(e => {
        if (isNaN(e) && e.length == 4) {
            console.log(e)
            return e
        }
    })
}

//   or 

function friend(friends) {
    return friends.filter(n => n.length === 4)
}

const friend = f => f.filter(n => (isNaN(n) && n.length == 4))

//   Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

function isTriangle(a, b, c) {
    if ((a + b) > c && (a + c) > b && (b + c) > a) {
        return true
    } else {
        return false;
    }
}

//   Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

function longest(s1, s2) {
    return (s1 + s2).split('').sort().filter((l, i, s) => {
        return s.indexOf(l) == i
    }).join('')

}

//   ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//   If the function is passed a valid PIN string, return true, else return false.
//   Examples (Input --> Output)
//   "1234"   -->  true
//   "12345"  -->  false
//   "a234"   -->  false

function validatePIN(pin) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return !/\s/g.test(pin) && !specialChars.test(pin) && !isNaN(pin) === true && pin % 1 === 0 && (pin.length === 4 || pin.length === 6)
}

//   or 

function validatePIN(pin) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!/\s/g.test(pin) && !specialChars.test(pin) && !isNaN(pin) === true && pin % 1 === 0 && (pin.length === 4 || pin.length === 6)) {
        return true;
    } else {
        return false
    }
}

//   You might know some pretty large perfect squares. But what about the NEXT one?
//   Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//   If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
//   Examples:(Input --> Output)
//   121 --> 144
//   625 --> 676
//   114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
    let nextSqr = Math.sqrt(sq);
    if (nextSqr % 1 === 0) {
        return Math.pow(Math.sqrt(sq) + 1, 2);
    } else {
        return -1
    }
}

//   Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

function rowSumOddNumbers(n) {
    return Math.pow(n, 3)
}

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// Examples:
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str, ending) {
    return str.endsWith(ending)
}

//   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }

    return sum
}

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    } else if (names.length === 1) {
        return `${names[0]} likes this`
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
}

//   Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//   Examples
//       16  -->  1 + 6 = 7
//      942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//   132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//   493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    let newArr = `${n}`.split('')

    return newArr.reduce((acc, i) => {
        acc += +i
        if (`${acc}`.length >= 2) {
            return `${acc}`.split('').reduce((sf, t) => {
                return sf += +t
            }, 0)
        } else {
            return acc
        }
    }, 0)
}

//   Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.
// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// CHECKS IF NUMBER/VALUE OF ARRAY IS NOT IN ANOTHER ARRAY 

function arrayDiff(a, b) {
    return a.filter(v => {
        return !b.includes(v)
    })
}

// CHECKS IF NUMBER/VALUE OF ARRAY IS IN ANOTHER ARRAY 

function arrayDiff(a, b) {
    return a.filter(v => {
        return b.includes(v)
    })
}

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string) {
    return string.split(' ').map(i => {
        if (i.length >= 5) {
            return i.split('').reverse().join('')
        } else {
            return i
        }
    }).join(' ')
}

//   Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
//   Example
//   "abcde" -> 0 # no characters repeats more than once
//   "aabbcde" -> 2 # 'a' and 'b'
//   "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
//   "indivisibility" -> 1 # 'i' occurs six times
//   "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
//   "aA11" -> 2 # 'a' and '1'
//   "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {

    let newArr = text.toLowerCase().split('').sort()

    let newCount = [];

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === newArr[i + 1]) {
            newCount.push(newArr[i]);
        }
    }

    return newCount.filter((l, i, s) => {
        return s.indexOf(l) == i
    }).length
}

//   or 

function duplicateCount(text) {
    return text.toLowerCase().split('').filter(function (val, i, arr) {
        return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

//   You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers) {

    let even = [];
    let odd = [];

    for (let i = 0; i < integers.length; i++) {
        if (integers[i] % 2 === 0) {
            even.push(integers[i])
        } else {
            odd.push(integers[i])
        }
    }

    if (even.length === 1) {
        return even[0]
    } else {
        return odd[0]
    }

}

//   or 

function findOutlier(integers) {

    let even = integers.filter(n => {
        return n % 2 === 0;
    })
    let odd = integers.filter(n => {
        return n % 2 !== 0;
    })

    return even.length === 1 ? even[0] : odd[0];

}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.
// "a" = 1, "b" = 2, etc.
// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {

    return text.toLowerCase().replace(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~0-9]/ig, '').split('').map(l => {
        return l.charCodeAt() - 96
    }).join(' ');
}

//   Create array from a-z 

// var letters = [];

for (let i = 65; i <= 90; i++) {
    letters.push(String.fromCharCode(i).toLowerCase());
}

// function reverseString() {
//     var string = "Text";
// }

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// function getAmountWithTax(amount, taxRate) {
//     //return total amount with taxes
//     var totalAmount = (amount * taxRate) + amount;
//     return totalAmount;
// }

// let amountsArr = [200, 300, 400];
// let newArr = [];
// let sum = 0; 

// function getAmountWithTax(amountsArr, taxRate){
//     //return total amount with taxes
//     for(let i=0; i < amountsArr.length; i++){
//        newArr.push((amountsArr[i] * taxRate) + amountsArr[i]);
//         console.log(newArr);
//     }

//     for(let j=0; j < newArr.length; j++){
//        sum += newArr[j];
//     }
// }

// const strings = [1, 2, 3, 4, 5];

// const numbers = strings.map(string => parseInt(string, 10)); 

// console.log(numbers);


// const fruits = ['apple', 'pear', 'cherry'];

// const capitalizedFruits = fruits.map(fruit => {
//   fruit.toUpperCase();
// });

// console.log(capitalizedFruits);

// const prices = [5, 4.23, 6.4, 8.09, 3.20];

// const priceSign = prices.map(price => `$${price.toFixed(2)}`);

// console.log(priceSign);


// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
// For example:
// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder = function (iterable) {
    //your code here - remember iterable can be a string or an array
    let newArr = [];

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== iterable[i + 1]) {
            newArr.push(iterable[i])
        }
    }

    return newArr
}

//   Given an array of integers, find the one that appears an odd number of times.
//   There will always be only one integer that appears an odd number of times.
//   Examples
//   [7] should return 7, because it occurs 1 time (which is odd).
//   [0] should return 0, because it occurs 1 time (which is odd).
//   [1,1,2] should return 2, because it occurs 1 time (which is odd).
//   [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//   [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).  

function findOdd(A) {
    //happy coding!
    let count = 0
    A = A.sort((a, b) => a - b)
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A.length; j++) {
            if (A[i] === A[j]) {
                count++
            }
        }
        if (count % 2 === 1) {
            return A[i]
        }

    }
}

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let count = 0;
    while (num.toString().length > 1) {
        num = num.toString().split('').reduce((acc, el) => acc *= +el, 1)
        count++
    }
    return count
}