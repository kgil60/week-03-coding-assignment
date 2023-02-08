console.log('\n 1 A \n\n');
let ages = [3, 9, 23, 64, 2, 8, 28, 93] // create array "ages"
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