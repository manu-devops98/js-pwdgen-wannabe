
let account = 'Nome Utente:';
let email = 'Email:';
let yearBirth = 'Anno di nascita:';

let user_name = prompt('Inserisci nome utente');
let user_email = prompt('Inserisci email');
let user_yearBirth = prompt('Inserisci anno di nascita');

let account_text = document.getElementById('first-id').innerHTML = `<h1>${account} <span class = "rosso">${user_name}</span></h1>`;

let email_text = document.getElementById('second-id').innerHTML = `<h1>${email} <span class = "rosso">${user_email}</span></h1>`;

let birth_text = document.getElementById('third-id').innerHTML = `<h1>${yearBirth} <span class = "rosso">${user_yearBirth}</span></h1>`;

