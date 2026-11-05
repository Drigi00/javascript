const cimElem = document.getElementById("cimn")
cimElem.textContent = "Kedvencek"
 
let gyumolcsElemek = document.getElementsByClassName("gyumolcs")
console.log(gyumolcsElemek)
gyumolcsElemek[0].textContent="ALMA"
 
gyumolcsElemek[1].textContent=gyumolcsElemek[2].textContent
 
let divElem=document.getElementById("uzenet")
divElem.addEventListener("click",beIr)
 
function beIr(){
    let felsElem=document.getElementById("felsorolas")
    let inputElem=document.getElementById("kedvenc")
    let ertek=inputElem.value
    felsElem.insertAdjacentHTML("beforeend",`<li class='gyumolcs'>${ertek}</li>`)
 
}