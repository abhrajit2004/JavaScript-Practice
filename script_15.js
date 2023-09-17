let txt = "";
let language = "JavaScript";
const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
for (let index = 0; index < cars.length; index++) {
    txt += cars[index] + "<br>";
}
document.getElementById("demo").innerHTML = txt;
// cars.forEach(element => {
//     console.log(element);
// });
// const person = {
//     fname: "Abhrajit",
//     lname: "Gupta",
//     age: 25
// };
// for (const key in person) {
//    console.log(person[key]);
// }

// for (const iterator of cars) {
//     console.log(iterator)
// }
for (const iterator of language) {
    console.log(iterator);
}