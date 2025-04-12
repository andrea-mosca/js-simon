const countdownEl = document.getElementById("countdown");
const numberList = document.getElementById("numbers-list");
const utentForm = document.getElementById("answers-form");

const formButton = document.getElementById("form-button");

//* funzione che genera un numero casuale 
const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random()*(max-min+1)+min);
}
// *creazione dell'array che contenga i numeri generati 
const numberGenerated = [];
// *ciclo che inserisca 5 numeri nell'array dei numeri da memorizzare 
for(let i = 0; i < 5; i++){
    numberGenerated.push(generateRandomNumber(1, 50));
}

//* inserimento dei numeri generati nell'html
for(let i = 0; i < numberGenerated.length; i++){
    const currentNumber = numberGenerated[i];
    const listItem = document.createElement("li"); // crea un elemento <li> per ogni numero
    listItem.textContent = currentNumber; // imposta il testo dell'elemento
    numberList.appendChild(listItem);
}

//*creazione countdown

let timeLeft = 5000; // tempo iniziale

const countdown = setInterval(function() {
    timeLeft -= 1000;
    countdownEl.textContent = (timeLeft / 1000);

    if (timeLeft <= 0) {
        clearInterval(countdown); // ferma il countdown quando arriva a 0 
        numberList.classList.add("d-none");
        utentForm.classList.remove("d-none");
    }
}, 1000); // aggiorna ogni secondo



// * form script


formButton.addEventListener("click", function(event){
    event.preventDefault();
    // crea un array di numeri con i numeri inseriti dal form
    const utentNumbers = [];
    document.querySelectorAll(".form-control").forEach(input => {
    utentNumbers.push(Number(input.value)); 
    });

    // se un numero inserito è presente nei numeri generati,stampalo e aggiungi 1
    const foundedNumbers = utentNumbers.filter(num => numberGenerated.includes(num));
    console.log(foundedNumbers);
    console.log("hai trovato ", foundedNumbers.length, "numeri: ", "(",foundedNumbers.toString(), ")");
});





