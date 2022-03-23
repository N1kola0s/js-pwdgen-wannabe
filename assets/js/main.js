// chiedere all'utente il suo nome, il suo cognome, il suo colore preferito e comunichiamo la sua password

// chiedere all'utente il suo nome

const first_name = prompt("Qual è il tuo nome?");
console.log(first_name);

// chiedere all'utente il suo cognome

const last_name = prompt ("Qual è il tuo cognome?");
console.log(last_name);

// chiedere all'utente il suo colore preferito
const color = prompt ("Qual è il tuo colore preferito?");
console.log(color);

// Aggiungere al nome, il cognome il colore e 22

const psw = first_name + last_name + color + 22


// comunicare la sua password

console.log(`Ciao, la tua password è: ${psw}`);

document.getElementById("password").innerHTML = psw ;