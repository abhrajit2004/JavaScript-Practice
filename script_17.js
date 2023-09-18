// const student_names = new Set(['Abhra', 'Abhi', 'Sinchan','Sukalyan']);
// student_names.add('Kaif');
// student_names.delete('Abhra');
// console.log(student_names);
// student_names.forEach(element =>{
//     console.log(element);
// })
// console.log(student_names.size)

const fruits = new Map([
    ["apples", 500],
    ["bananas", 400],
    ["oranges", 200]
]);
const employeeIds = new Map([
    [1, 235700],
    [2, 167400],
    [3, 156200]
]);
// fruits.set("apples",300);
fruits.set("mango", 600);
// console.log(fruits.get("bananas"));
fruits.delete("apples");
console.log(fruits.has("mango"));
console.log(fruits.has("apples"));
for (const iterator of fruits) {
    console.log(iterator);
}
console.log("The size of the map is", fruits.size);
for (const iterator of employeeIds) {
    console.log(iterator);
}
employeeIds.forEach(element => {
    console.log(element);
});