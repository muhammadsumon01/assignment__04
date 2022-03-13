/**
 * Create a function that will return children, teenagers, young
 * people, old people from the age
 */

function ageCalc(name, age) {

        if (age >= 0 && age < 12) {
                return `Hello ${name}! You are Baby`;
        } else if (age > 11 && age < 18) {
                return `Hello ${name}! You are khoka Babu`;
        } else if (age > 17 && age < 40) {
                return `Hello ${name}! You are Young`;
        } else if (age > 39) {
                return `Hello ${name}! You are Old`;
        } else {
                return `Please Enter a Sothik Number :(`
        }
}


// For Collecting Data From User 

// var name = prompt("What's your name?");
// var age = parseInt(prompt("What's your birth year?"));
// alert("check browser console to show result")
// console.log(ageCalc(name, age));



console.log(ageCalc('Muhammad', 22));