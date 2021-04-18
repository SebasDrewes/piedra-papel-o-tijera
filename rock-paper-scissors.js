let winsPlayer = '';
let winsComputer = '';


function computerPlay() {
    const plays = ['papel','piedra','tijera'];
    const computerChoice = plays[Math.floor(Math.random()*plays.length)];
    return computerChoice;
}
function playRound(playerSelection, computerSelection) {
    const pwins = document.querySelector("#pwins");
    const cwins = document.querySelector("#cwins");
    const resultRound = document.querySelector("#resultRound");
    const jugadorPlay = document.querySelector("#jugadorPlay");
    const compuPlay = document.querySelector("#compuPlay");
    const body = document.querySelector("#body");

    if (playerSelection === computerSelection) {
        resultRound.textContent = "Empataste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;
    } else if (playerSelection === "piedra" && computerSelection === "tijera") {
        ++winsPlayer
        pwins.textContent = "Rondas ganadas: " + winsPlayer;
        resultRound.textContent = "Ganaste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;
    } else if (playerSelection === "tijera" && computerSelection === "papel") {
        ++winsPlayer
        pwins.textContent = "Rondas ganadas: " + winsPlayer;
        resultRound.textContent = "Ganaste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;
    } else if (playerSelection === "papel" && computerSelection === "piedra") {
        ++winsPlayer
        pwins.textContent = "Rondas ganadas: " + winsPlayer;
        resultRound.textContent = "Ganaste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;
    } else if (playerSelection === "tijera" && computerSelection === "piedra") {
        ++winsComputer
        cwins.textContent = "Rondas ganadas por la compu: " + winsComputer;
        resultRound.textContent = "Perdiste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;
    } else if (playerSelection === "papel" && computerSelection === "tijera") {
        ++winsComputer
        cwins.textContent = "Rondas ganadas por la compu: " + winsComputer;
        resultRound.textContent = "Perdiste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;
    } else if (playerSelection === "piedra" && computerSelection === "papel") {
        ++winsComputer
        cwins.textContent = "Rondas ganadas por la compu: " + winsComputer;
        resultRound.textContent = "Perdiste la ronda!";
        jugadorPlay.textContent = "Elegiste: " + playerSelection;
        compuPlay.textContent = "La compu eligio: " + computerSelection;              
    }
    if (winsPlayer === 5 ) {
        resultRound.textContent = ("Ganaste!!");
        botonPapel.style.visibility = 'hidden'; 
        botonPiedra.style.visibility = 'hidden'; 
        botonTijera.style.visibility = 'hidden'; 
        document.getElementById("papel").disabled = true;
        document.getElementById("piedra").disabled = true;
        document.getElementById("tijera").disabled = true;
    } else if (winsComputer === 5 ) {
        resultRound.textContent = ("Perdiste!");
        botonPapel.style.visibility = 'hidden'; 
        botonPiedra.style.visibility = 'hidden'; 
        botonTijera.style.visibility = 'hidden'; 
        document.getElementById("papel").disabled = true;
        document.getElementById("piedra").disabled = true;
        document.getElementById("tijera").disabled = true;
    }}

function startNewGame() {
    winsPlayer = 0;
    winsComputer = 0;
    pwins.textContent = "Rondas ganadas: 0";
    cwins.textContent = "Rondas ganadas por la compu: 0";
    document.getElementById("papel").disabled = false;
    document.getElementById("piedra").disabled = false;
    document.getElementById("tijera").disabled = false;
    botonPapel.style.visibility = 'visible'; 
    botonPiedra.style.visibility = 'visible'; 
    botonTijera.style.visibility = 'visible'; 
    resultRound.textContent = "¿Piedra, papel o tijera?";  
    jugadorPlay.textContent = "";
    compuPlay.textContent = ""; 
}


const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    startNewGame()
});

const botonPapel = document.querySelector('#papel');
botonPapel.addEventListener('click', () => {
    playRound('papel', computerPlay())
});

const botonPiedra = document.querySelector('#piedra');
botonPiedra.addEventListener('click', () => {
    playRound('piedra', computerPlay())
});

const botonTijera = document.querySelector('#tijera');
botonTijera.addEventListener('click', () => {
    playRound('tijera', computerPlay())
});