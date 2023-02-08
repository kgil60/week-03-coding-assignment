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

console.log('\n 2B \n\n');
let nameConcat = ""; // initialize concated name string

// concat all names to nameConcat
for (let i=0; i<names.length; i++) {
    nameConcat += (names[i] + " "); // add name plus space character to nameConcat
}
console.log(nameConcat);