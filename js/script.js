const countdownEl = document.getElementById("countdown");
const numberList = document.getElementById("numbers-list");
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

// inserimento dei numeri generati nell'html
for(let i = 0; i < numberGenerated.length; i++){
    const currentNumber = numberGenerated[i];
    const listItem = document.createElement("li"); // crea un elemento <li> per ogni numero
    listItem.textContent = currentNumber; // imposta il testo dell'elemento
    numberList.appendChild(listItem);
}
