//Il programma dovrà chiedere all'utente il numero di chilometri che vuole 
//percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio,
//secondo queste regole:
// Il prezzo del biglietto è definito in base ai km(0.21 € al km).
// Va applicato uno sconto del 20 % per i minorenni.
// Va applicato uno sconto del 40 % per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana 
//(con massimo due decimali, per indicare centesimi sul prezzo). 
//Questo richiederà un minimo di ricerca


//chiedo età
let age = parseInt(prompt('quanti anni hai?'))
//chitedo lunghezza del viaggio
let kilometri = parseFloat(prompt('quanti kilometri viaggerai?'))

//prova console
console.log('L\'utente ha' + ' ' + age + ' ' + 'anni e viaggerà per' + ' ' + kilometri + 'km');


//calcolo del prezzo
let price = parseFloat( 0.21 * kilometri );
console.log('il prezzo del biglietto è:' + ' ' + price + '$' );

//applico gli sconti
if (age <= 17){
    price=price - (price/100*20);
    console.log(', ma grazie allo sconto del 20% il minorenne pagherà:'+price+'$');
} else if (age >= 65){
    price = price - (price / 100 * 40);
    console.log(', ma grazie allo sconto del 40% l\'anziano pagherà:' + price + '$');
} 
else (18 <=age <=65);{
    price = price;
}