/**
 * Create a function that will return the area of a rectangle, square, triangle
 */

function areaCalc(type, width, height) {

        if (type == 'r') {

                return (`area of rectangle is ${width * height}`)
        } else if (type == 's') {

                return (`area of square is ${width * width}`)
        } else if (type == 't') {

                return (`area of triangle is ${.5 * width * height}`)
        } else {
                return `Enter Correct Value`;
        }



}

// For Collecting Data From User 

// var type = prompt("type?");
// var width = prompt("width?");
// var height = prompt("height?");
// alert("check browser console to show result")
// console.log(areaCalc(type, width, height));



console.log(areaCalc('t', 23, 23));