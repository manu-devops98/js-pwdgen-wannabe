/* Richiesta esercizio:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21 */


// NAME 
let user_name = prompt('Inserisci il tuo nome');
console.log(user_name);
// COGNOME
let user_lastname = prompt('Inserisci il tuo cognome');
console.log(user_lastname);
// COLORE 
let user_color = prompt('Inserisci il tuo colore preferito');
console.log(user_color);

let text = document.getElementById('my_id').innerHTML = user_name + user_lastname + user_color + 21;