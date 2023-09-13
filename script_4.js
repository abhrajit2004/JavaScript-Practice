const employee = {
    name: 'Abhrajit',
    role: 'SDE',
    employeeID: 342167,
    age: 19
};
console.log(typeof(employee))
console.log(employee)
console.log(employee['name'])
console.log(employee['role'])
// let employeeID = employee['employeeID'].toString();
// console.log(typeof(employeeID))
console.log(typeof(employee['employeeID']))
console.log(employee.name, "is",employee.age,"years old")