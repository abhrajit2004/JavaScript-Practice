let a = prompt("Enter your age: ");
if (a >= 18) {
    document.getElementById("check").innerHTML = "You are able to vote!";
}
else if (a < 18 && a > 0) {
    document.getElementById("check").innerHTML = "You are not able to vote!";
}
else {
    document.getElementById("check").innerHTML = "Please enter a valid age!";
}

let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";

}

document.getElementById("demo1").innerHTML = "Today is " + day;