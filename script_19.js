// const person = {
//     firstName: "Abhrajit",
//     lastName: "Gupta",
//     id: 2234,
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// };
// console.log(person.fullName());
hello = () => {
    console.log("hello function is executed");
}
hello();
hello();
// function sum(a, b) {
//     return a + b;
// }
// console.log(sum(5, 4));
sum = (a, b) => {
    console.log("The sum of", a, "and", b, "is", a + b);
}
sum(25, 75);