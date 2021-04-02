
const yourSafDOM = document.querySelector(".your-saf");
const placeAvailable = document.querySelector(".place-available");
var availableSaf;
var buttonPlacementDiv = document.querySelector(".button-placement")
var buttonGenerate = document.querySelector(".button-generate")
var inputJemaah;
var numberOfJemaah;
/*window.addEventListener("DOMContentLoaded",() => {
    var inputJemaah = prompt("Enter Number Of Jemaah")
    console.log(inputJemaah);
});

for(let i = 0;i<inputJemaah;i++){
    console.log(`NO${i}`);
}*/

const generate = () => {
    var numberOfJemaah = prompt("Masukkan bilangan jemaah yang boleh ditampung oleh masjid");
    console.log(numberOfJemaah);
    availableSaf = numberOfJemaah;
    buttonPlacementDiv.textContent=" "
    
        buttonGenerate.textContent =  "Reset";
        buttonGenerate.setAttribute("onclick","location.reload()")
        
    for(let i = 1;i<=numberOfJemaah;i++){
        var button = document.createElement("button")
        button.classList.add("btn");
        button.classList.add("btn-primary");
        button.classList.add("my-3");
        button.classList.add("mx-2");
        button.textContent = `NO${i}`
        button.setAttribute("onclick","chooseSaf(this)");
        button.id = `NO${i}`;
        button.setAttribute("data-saf","off");
       buttonPlacementDiv.appendChild(button);
       
    }
}
const chooseSaf = (numSaf) => {
    
    
 console.log(numSaf.id);
 const safAvailable = numSaf.dataset.saf;
 if(safAvailable === "off"){
     numSaf.style.backgroundColor = "#ff8906"
     numSaf.dataset.saf = "on"
     availableSaf--;
     console.log(`Saf yang masih kosong : ${availableSaf}`);
     yourSafDOM.textContent = `Saf anda : ${numSaf.id}`;
     placeAvailable.textContent = `Saf yang masih kosong : ${availableSaf}`;
 }else{
     numSaf.style.backgroundColor = "#f25f4c"
     numSaf.dataset.saf = "off"
     availableSaf++
     console.log(`Saf yang masih kosong : ${availableSaf}`);
      yourSafDOM.textContent = "Terima Kasih";
      placeAvailable.textContent = `Saf yang masih kosong : ${availableSaf}`
 }
 
}
