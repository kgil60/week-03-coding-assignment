console.log('\n 1 A \n\n');
let ages = [3, 9, 23, 64, 2, 8, 28, 93]; // create array "ages"
console.log(ages);

console.log('\n 1 B \n\n');
ages.push(ages[ages.length - 1] - ages[0]); //subtract the value of the first element from the value of the last and push to array
console.log(ages);
ages.push(ages[ages.length - 1] - ages[0]); // repeat step from line 6 to ensure it is dynamic
console.log(ages);

console.log('\n 1 C \n\n');
let agesCount = 0; // initialize total sum variable to calculate average age

// get total sum of ages
for (let i=0; i<ages.length; i++) {
    agesCount += ages[i]; // add current age to total sum
}

let averageAge = agesCount / ages.length; // calculate average age
console.log(averageAge);

console.log('\n 2 A \n\n');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; // create array "names"
console.log(names);

let totalLetters = 0; // initialize total_letters variable

// get total sum of letters in names
for (let i=0; i<names.length; i++) {
    totalLetters += names[i].length // add length of current name to total
}

let averageLength = totalLetters / names.length; // calculate average length
console.log(averageLength);

console.log('\n 2 B \n\n');
let nameConcat = ""; // initialize concated name string

// concat all names to nameConcat
for (let i=0; i<names.length; i++) {
    nameConcat += (names[i] + " "); // add name plus space character to nameConcat
}
console.log(nameConcat);

console.log('\n 3 \n\n');

// ANSWER TO STEP 3:
// arrayName[arrayName.length - 1]

// TO VIEW ANSWER IN BROWSER:
console.log('arrayName[arrayName.length - 1]');

console.log('\n 4 \n\n');

// ANSWER TO STEP 4:
// arrayName[0]

// TO VIEW ANSWER IN BROWSER:
console.log('arrayName[0]');

console.log('\n 5 \n\n');
let nameLengths = []; // initialize nameLengths array

// loop over names array and add each length to nameLengths
for (let i=0; i<names.length; i++) {
    nameLengths.push(names[i].length) // add current name length to nameLengths
}
console.log(nameLengths);

console.log('\n 6 \n\n');
let lengthsTotal = 0; // initialize variable to calculate total lengths sum

// calculate total sum of values in nameLengths
for (let i=0; i<nameLengths.length; i++) {
    lengthsTotal += nameLengths[i]; // add current length to total
}
console.log(lengthsTotal);

console.log('\n 7 \n\n');

// function that concatenates provided word n amount of times
function wordConcat(word, n) {
    let concatString = ""; // initialize the concatenated string variable

    // loop n amount of times and add word to concatString
    for (let i=0; i<n; i++) {
        concatString += word;
    }

    return concatString;
}
console.log(wordConcat('Hello', 3)); // test wordConcat

console.log('\n 8 \n\n');

// takes a first and last name and returns a full name
function fullNameConcat(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

console.log(fullNameConcat('John', 'Smith')); // test fullNameConcat

console.log('\n 9 \n\n');

// takes array of numbers and returns true if sum of all numbers is greater than 100
function isSumOver100(numbers) {
    let total = 0 // initialize total counter

    // loop over numbers and obtain total sum
    for (let i=0; i<numbers.length; i++) {
        total += numbers[i]; // adds current number to total
    }

    // determines whether or not total is greater than 100
    if (total > 100) {
        return true;
    }
    return false;
}

// tests for isSumOver100
console.log(isSumOver100([1, 2, 3, 4, 5])) // should return false
console.log(isSumOver100([50, 60, 70])) // should return true

console.log('\n 10 \n\n');

// takes an array of numbers and returns the average of all the elements
function calculateAverage(numbers) {
    let total = 0; // initialize total counter

    // calculate total sum of elements
    for (let i=0; i<numbers.length; i++) {
        total += numbers[i];
    }

    return (total / numbers.length);
}

console.log(calculateAverage([1, 2, 3, 4, 5])) // test for calculateAverage, should return 3

console.log('\n 11 \n\n');

// takes 2 arrays of numbers and returns true of the average of the first array is greater than the second
function greaterAverage(array1, array2) {
    // initialize total count variables for both arrays
    let total1 = 0;
    let total2 = 0;

    // calculate total sum of array1
    for (let i=0; i<array1.length; i++) {
        total1 += array1[i]; // add current value to the total
    }

    // calculate total sum of array 2
    for (let i=0; i<array2.length; i++) {
        total2 += array2[i] // add current value to the total
    }

    // calculate both averages
    let array1Average = total1 / array1.length;
    let array2Average = total2 / array2.length;

    // determine if array1Average is greater than array2Average
    return array1Average > array2Average;
}

// tests for greaterAverage
console.log(greaterAverage([1,2,3,4,5], [6,7,8,9,10])) // should return false
console.log(greaterAverage([6,7,8,9,10], [1,2,3,4,5])) // should return true

console.log('\n 12 \n\n');

// returns true if it is hot outside and there is enough money in pocket
function willBuyDrink(isHotOutside, moneyInPocket) {
    return (isHotOutside && moneyInPocket > 10.50);
}

// tests for willBuyDrink
console.log(willBuyDrink(true, 10.00)) // should return false
console.log(willBuyDrink(true, 11.00)) // should return true
console.log(willBuyDrink(false, 11.00)) // should return false
console.log(willBuyDrink(false, 5.00)) // should return false

console.log('\n 13 \n\n')

// determines if it is a leap year or not
function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true
            }
            return false
        }
        return true
    }
}

// tests for isLeapYear
console.log(isLeapYear(2000)) // should return true
console.log(isLeapYear(1900)) // should return true

// ANSWER FOR STEP 13:
// This function determines whether or not the given year is a leap year.
// I made this function because the rules that determine a leap year are very confusing and it is much more simple to let a computer do it

// TO VIEW ANSWER IN BROWSER:
console.log('This function determines whether or not the given year is a leap year. I made this function because the rules that determine a leap year are very confusing and it is much more simple to let a computer do it')