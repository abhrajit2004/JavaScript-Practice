try {
    document.getElementById("demo1").innerHTML = "Try block is executed";
} catch (error) {
    document.getElementById("demo").innerHTML = error;
}
finally{
    console.log("finally block is executed");
}