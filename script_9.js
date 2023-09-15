// const cars = ["Volvo","BMW","Volkswagen","Mercedes"]
// for (let index = 0; index < cars.length; index++) {
//    console.log(cars[index])   
// }
// console.log(cars)
// console.log(cars.length)
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// cars[0] = "Wagon R"
// console.log(cars[0])
// console.log(cars.sort())

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fsize = fruits.length;

let text = "<ul>";

for (let index = 0; index < fsize; index++) {
    text += "<li>" + fruits[index] + "</li>";
}
text += "</ul>";

document.getElementById("demo").innerHTML = text;
console.log(fruits.slice(0, 3))
// function myFunction() {
//     fruits.push("Lemon");
//     document.getElementById("demo").innerHTML = "<li>" + fruits + "</li>";
// }
