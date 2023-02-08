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
console.log(wordConcat('Hello', 3));