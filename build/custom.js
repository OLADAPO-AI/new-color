const numbersAndLetter = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let button = document.getElementById("button");
let firstCot = document.getElementById("first-container")
let firsttxt = document.getElementById("first-word")
let SecCot = document.getElementById("second-container")
let Sectxt = document.getElementById("second-word")
let thCot = document.getElementById("third-container")
let thtxt = document.getElementById("third-word")
const scrollingText = document.getElementById('scrolling-text');
scrollingText.style.width = scrollingText.scrollWidth + "px";

function generateRand() {
    let randomNunber = Math.floor(Math.random() * 16)
    return randomNunber;
}

button.addEventListener("click", function(){
    let hexCodeFirstBox = "#"
    let heXSecondBox ="#"
    let thBox ="#"
    for(let myFirstLoop = 0; myFirstLoop<6; myFirstLoop++){
        let randomHex = numbersAndLetter[generateRand()]
        hexCodeFirstBox += randomHex
    }
    
    for(let SecLoop = 0; SecLoop<6; SecLoop++){
        let randomHex = numbersAndLetter[generateRand()]
        heXSecondBox += randomHex
    }

    for(let SecLoop = 0; SecLoop<6; SecLoop++){
        let randomHex = numbersAndLetter[generateRand()]
        thBox += randomHex
    }



    firstCot.style.backgroundColor = hexCodeFirstBox
    firsttxt.innerText = hexCodeFirstBox
    
    SecCot.style.backgroundColor = heXSecondBox
    Sectxt.innerText = heXSecondBox
   
    thCot.style.backgroundColor = thBox
    thtxt.innerText = thBox
   
})


let animation = setInterval(() => {
    
    if (scrollingText.scrollLeft >= scrollingText.offsetWidth) {
      scrollingText.scrollLeft = 0;
    } else {
      scrollingText.scrollLeft += 2; 
    }
  }, 10); // Adjust the animation speed as needed

