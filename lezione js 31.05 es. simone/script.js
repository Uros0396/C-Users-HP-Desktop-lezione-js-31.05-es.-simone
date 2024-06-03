// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro

let h1 = "il mio negozio";

function newTitle () {
    const title1 = document.getElementById("firstTitle");
    title1.innerText = "Il mio negozio online2"

}
newTitle(h1)

// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina

function changeColor () {
   const body = document.querySelector("body")
   body.style.backgroundColor = "pink"
}
changeColor()

// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio

function changeAdress () {
    const newAdress = document.getElementById("newAdress")
    newAdress.innerText = "Iseo (BS) via martiri della liberta' 40"
}
changeAdress()

// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella




// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine



