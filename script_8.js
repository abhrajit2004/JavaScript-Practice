let heading = "Ready Jawans";
let names = ["Major Ram Sharma", "Vikram Rathore", "Veer Pratap Singh"];
let html = `<h2>${heading}</h2><ul>`;

for(const x of names){
    html += `<li>${x}</li>`;
}
html += `</ul>`;
document.getElementById("demo").innerHTML = html;