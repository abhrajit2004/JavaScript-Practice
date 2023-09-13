const btnhide = document.getElementById('btnhide');
const btndisplay = document.getElementById('btndisplay');
btnhide.addEventListener("click",()=>{
    document.getElementById('para').style.display = 'none';
})
btndisplay.addEventListener("click",()=>{
    document.getElementById('para').style.display = 'block';
})