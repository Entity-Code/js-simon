document.write("Passeranno solo 3 secondi invece di 30");

//creo array nel quale pusho 5 numeri random da 0 a 50
var numeri = []; //numeri random

//popolo con 5 random numbers l'array numeri
while (numeri.length < 5) {
   var numeroPush = (randomNum(50));
   //controllo che pushi solo se numeroPush non sia già contenuto
   if (!numeri.includes(numeroPush)) {
      numeri.push(numeroPush);
   }
}

// alert 5 numeri per l'utente
alert(numeri);
console.log("Numeri da ricordare: " + numeri);

// dopo "30" secondi...
setTimeout(function () {
   //array in cui salvo i 5 numeri inseriti
   numeriInput = [];
   indovinati = [];
   //chiedi all'utente un numero alla volta presente nell'array numeri
   i = 0;
   while (i < 5) {
      var input = parseInt(prompt("Inserisci i numeri che hai memorizzato"));
      // se l'utente inserisce lo stesso numero 2 volte
      if (numeriInput.includes(input)) {
         alert("Hai già inserito questo numero");
         i--; //do la possibilità all'utente di reinserire lo count numero, ma diverso
      } else { // pusho l'input nel mio array "numeriInput"
         numeriInput.push(input);
      }
      // se l'input inserito corrisponde ad un elemento dell'array numeri
      if (numeri.includes(input)) {
         indovinati.push(input); //pushamelo nell'array indovinati
      }

      i++;
   }
   console.log(("Numeri salvati dall'utente: ") + numeriInput);

   //dichiarazione punteggio
   console.log("Ti sei ricordato " + indovinati.length + " numeri" + ": " + indovinati);
}, 3000);















//Functions

// random Num
function randomNum(max) {
   if (max) { //se max è stato inserito, allora ritornami il valore random
   return Math.floor(Math.random() * max);
} else { //sennò 0
      return 0;
   }
}
