const countdownEl = document.getElementById("countdown");
const numberList = document.getElementById("numbers-list");
const startButton = document.getElementById("start-button");
const utentForm = document.getElementById("answers-form");

// funzione che genera un numero casuale 
const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random()*(max-min+1)+min);
}
// creazione dell'array che contenga i numeri generati 
const numberGenerated = [];
// ciclo che inserisca 5 numeri nell'array dei numeri da memorizzare 
for(let i = 0; i < 5; i++){
    numberGenerated.push(generateRandomNumber(1, 50));
}

// funzione che fa sparire i numeri e mostra il form 

const formStart = () => {
   numberList.classList.add("d-none"); 
   utentForm.classList.remove("d-none"); 
}






// // creazione countdown
// let timeLeft = 10000; //timer di partenza

// const handleCountdown = () => {
//     startButton.classList.add("d-none");
//     timeLeft -= 1000;
//     countdownEl.textContent = timeLeft;

    
//     if(timeLeft > 0){
//         console.log(timeLeft / 1000);
//     }else{

//     }
    
// }

// const finishCountdown = () =>{
//     setInterval(handleCountdown, 1000);
// }

// startButton.addEventListener("click", finishCountdown);