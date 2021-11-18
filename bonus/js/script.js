let user_name = prompt('Inserisci nome');
let lastname = prompt('Inserisci cognome');
let age = prompt('Inserisci la tua età');

// let text = document.writeln(age);
// console.log(text);

/* let text = document.getElementById('my_id').innerHTML = '<h1> Benvenuto ' + user_name + ' ' + lastname + '. La tua età è di ' + age + '' + ' anni.' + '</h1>'; */

const currentYear = 2021;

let saluto = document.getElementById('my_id').innerHTML = `<h1> Benvenuto <span class = "rosso">${user_name}</span> <span class = "rosso">${lastname}</span>. La tua età è di <span class = "rosso">${age}</span> anni. Il tuo anno di nascita è il <span class = "rosso">${currentYear - parseInt(age)}</span>.</h1>`