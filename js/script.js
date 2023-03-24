const lista = [
    'samuele@gmail.com',
    'luca@gmail.com',
    'loris@gmail.com',
    'stefano@gmail.com',
];

const inputMail = prompt('Scrivi la tua e-mail');
console.log(inputMail); 

let conferma = document.getElementById('confermato')
let errore = document.getElementById('errore');
let emailTrovata = 0;
let player = document.getElementById('player');
let pc = document.getElementById('pc');
let vittoria = document.getElementById('vittoria')
let pareggio = document.getElementById('pareggio')
let button = document.getElementById('btn');



for (let i = 0; i < lista.length; i++) {
    
    if(inputMail === lista[i]){
        emailTrovata = 1;
    }
}


if(emailTrovata === 1){

    conferma.innerHTML =`
    La tua mail che hai inserito è corretta! <br>
    Adesso potrai giocare!!
    `
}
else{
    errore.innerHTML =`
    La tua email per accedere al gioco è sbagliata.
    ` 
    btn.classList.add('disabled');
}


btn.addEventListener('click', function(){

    let playerPoints = Math.floor(Math.random( ) * 7);
    let pcPoints = Math.floor(Math.random( ) * 7);

    player.innerHTML = playerPoints;
    pc.innerHTML = pcPoints;



    if(playerPoints > pcPoints){
        vittoria.innerHTML = `Giocatore HAI VINTO!`;
    }
    else if(playerPoints < pcPoints){
        vittoria.innerHTML = `Pc HAI VINTO!`;
    }
    else{
        vittoria.innerHTML = `PAREGGIO!`;
    }
    
})


