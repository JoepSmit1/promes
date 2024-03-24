// CC: Kennisclips van Arthur
let toegangsLeeftijd = 18
let leeftijd = 20

// Keuze met twee condities
if(leeftijd >= toegangsLeeftijd){
  console.log("Welkom")
} else {
  console.log("Helaas je bent niet oud genoeg")
}

// Met een constante wordt bedoeld dat de waarde van het veld niet meer kan veranderens
// queryselector is een functie die het eerst voorkomende element in het document zoekt op basis van een atrribute (tag, id, class)
// querySelectorAll selecteert die alle "square" in het document
const squares = document.querySelectorAll('.square')
const promes = document.querySelector('.promes')
// # = ID en . = class 
const timeLeft = document.querySelector('#tijd-over')
const score = document.querySelector('#score')


// Het trefwoord let in JavaScript wordt gebruikt om een ​​variabele te declareren die in JavaScript een blokbereik heeft
// je begint met resultaat 0, dit veranderd later, daarom is het een variabel
let result = 0 //Nummer
let hitPosition
let currentTime = 60 //Nummer
let timerId = null //Wanneer een timerId null is, dan is die klaar, of moet die nog beginnen en dan start die opnieuw.


function play() { //deze functie hebben we niet behandeld in de les en heb ik van CHATGPT
  var audio = new Audio('oei.mp3')
  audio.play()
}

// Een functie is een blok code die een specifieke taak heeft en meestal een unieke naam toegewezen krijgt. Functies maakt het overzichtelijker en bondiger
// deze functie kies een random vierkant, waar de class 'promes" in word verwijderd
function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('promes')
  });

// deze functie kies een random vierkant, waar promes in word gezet
// Met Math.random word er een random vierkant gekozen van de 9.
// Met Math.floor word het nummer naar beneden afgerond
  let randomSquare = squares[Math.floor(Math.random() * 9)]

// met randomSquare.classlist word Promes in een van de 9 vierkanten gezet
// ik wil meerdere waarden in een variable opslaan, dus maak ik gebruik van een array. Elke array heeft een volgnummer. het nummer komt niet boven de 8 uit want je begint met tellen bij 0 <- dit is de indexwaarde
// het nummer komt niet boven de 8 uit want je begint met tellen bij 0
  randomSquare.classList.add('promes')

  hitPosition = randomSquare.id
}


squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    if (square.id == hitPosition) { //Dit zorgt ervoor als je op een vierkant klikt waar promes op staat je een punt erbij krijgt en je score omhoog gaat.
      result++
      score.textContent = result
      hitPosition = null //als je het resultaat hebt gehad begint die weer op 0
      audio.play() // hier wordt de audio afgespeeld
    }
  })
})

// Deze functie zorgt ervoor, dat Promes iedere 500 millie seconde per vierkant word verplaats.
function movePromes() {
  timerId = setInterval(randomSquare, 500)
};

// Geen gebruik gemaakt van parameters

movePromes();

function countDown() {
 currentTime-- //met dezer functie loopt de timer af
 timeLeft.textContent = currentTime;

 //dit zorgt ervoor dat alles gewist wordt.
 if (currentTime == 0) {
   clearInterval(countDownTimerId)
   clearInterval(timerId)
   alert('Afgelopen! Je score is ' + result)
 };

};

let countDownTimerId = setInterval(countDown, 1000);

// Bronnen
// CC: Powerpoint slides op DLO
// CC: ChatGPT
// CC: Youtube Tutorial
// CC: FreeCodeCamp.org
// CC: Kennisclips van Arthur
