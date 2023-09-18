let text = '{"students":[' +
    '{"firstName" : "Abhrajit", "lastName" : "Gupta"},' +
    '{"firstName" : "Sukalyan", "lastName" : "Roy"},' +
    '{"firstName" : "Ankita", "lastName" : "Sikdar"}]}';

// console.log(text);
const obj = JSON.parse(text);
console.log(obj);
console.log(obj.students[0].firstName + " " + obj.students[0].lastName);
console.log(obj.students[1].firstName + " " + obj.students[1].lastName);
console.log(obj.students[2].firstName + " " + obj.students[2].lastName);