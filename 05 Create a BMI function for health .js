/**
 * Create a BMI function for health 
 */


function bmiCalc(weight, height) {

        return `Your bmi is ${weight / (height * height)}`;

}

// For Collecting Data From User 

// var weight = prompt("what's your weight in kg?");
// var height = prompt("what's your height in meter?");
// alert("check browser console to show result")
// console.log(bmiCalc(weight, height));


console.log(bmiCalc(80, 4));

