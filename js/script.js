const lista = [
    'samuele@gmail.com',
    'luca@gmail.com',
    'loris@gmail.com',
    'stefano@gmail.com',
];

const inputMail = prompt('Scrivi la tua e-mail');
console.log(inputMail); 


for (let i = 0; i < lista.length; i++) {

  if(inputMail == lista[i]){
      errore.innerHTML =``
      
      console.log('La mail è presente')
  }else{
    const errore = document.getElementById('errore');
    errore.innerHTML =`
    Il tuo account non è registrato con questa e-mail
    `
  }
  
}