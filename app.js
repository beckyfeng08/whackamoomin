const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');
    console.log("changed")
    hitPosition = randomSquare.id;
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            square.classList.toggle("clickedhit");
            result++;
            score.textContent = result;
            hitPosition = null;

            setTimeout(function() {
                square.classList.remove("clickedhit");
              }, 200);
              
        } else {
            square.classList.toggle("clickedmiss");
            setTimeout(function() {
                square.classList.remove("clickedmiss");
              }, 200);
        }
        
    })
})

function moveMole() {
        timerId = setInterval(randomSquare, 1000);


    
}


function countDown() {
    currentTime --;
    timeLeft.textContent = currentTime;
    moveMole();
    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your final score is ' + result);
    }
}
let countDownTimerId = setInterval(countDown, 1000);
