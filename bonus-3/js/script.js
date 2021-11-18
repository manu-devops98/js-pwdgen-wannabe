/* 
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

BONUS:
chiediamo all'utente anche il suo numero preferito
al numero preferito sommiamo 5
attacchiamo alla password, al posto del 21, il risultato */


// NAME 
let user_name = prompt('Inserisci il tuo nome');
// console.log(user_name);
// COGNOME
let user_lastname = prompt('Inserisci il tuo cognome');
// console.log(user_lastname);
// COLORE 
let user_color = prompt('Inserisci il tuo colore preferito');
// console.log(user_color);
let user_number = prompt('Inserisci il tuo numero preferito');

let user_password = prompt('Inserisci password');

let text = document.getElementById('my_id').innerHTML = user_name + user_lastname + user_color + (parseInt(user_number) + 5) + user_password;
