// variabili
let nomeUtente = prompt("Il tuo nome");
let cognomeUtente = prompt("Il tuo cognome");
let colorePreferito = prompt("Il tuo colore preferito");
let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber)
console.log(nomeUtente + cognomeUtente + colorePreferito + randomNumber)

document.getElementById("password").innerHTML = nomeUtente + cognomeUtente + colorePreferito + randomNumber