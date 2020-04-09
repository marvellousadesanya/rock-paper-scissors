var name = prompt('Kindly input your name');

document.querySelector('.player-name-1').textContent = name;

var score1, score2, gamePlaying;
var gamePlaying = true;
init();

function randomPick() {
    if (gamePlaying) {
        var marvPick = Math.floor(Math.random() * 3);
        marvPickDOM = document.querySelector('#player-2-pick');
        marvPickDOM.src = 'pic-' + marvPick + '.jpg';
        return marvPick;
    }
     
}

function showRock() {
    var marvPick = randomPick();
    if (gamePlaying) {
        document.querySelector('#player-1-pick').src = 'pic-0.jpg';
        if (marvPick === 0) {
            document.getElementById('result').textContent = 'A tie. Choose again.';
            neutralColor();
        } else if (marvPick === 1) {
            document.getElementById('result').textContent = 'Marv wins!';
            MarvColor();
            updateScore2();
        } else if (marvPick === 2) {
            document.getElementById('result').textContent = 'You win!';
            playerColor();
            updateScore1();
        } else {
            document.getElementById('result').textContent = '';
        }
    }
    
}

function showPaper() {
    var marvPick = randomPick();
    document.querySelector('#player-1-pick').src = 'pic-1.jpg';
    if (gamePlaying) {
        if (marvPick === 0) {
            document.getElementById('result').textContent = 'You win!';
            playerColor();
            updateScore1();
        } else if (marvPick === 1) {
            document.getElementById('result').textContent = 'A tie. Choose again.';
            neutralColor();
        } else if (marvPick === 2) {
            document.getElementById('result').textContent = 'Marv wins!';
            MarvColor();
            updateScore2();
        } else {
            document.getElementById('result').textContent = '';
        }
    }
    
}

function showScissors() {
    var marvPick = randomPick();
    if (gamePlaying) {
        document.querySelector('#player-1-pick').src = 'pic-2.jpg';
        if (marvPick === 0) {
            document.getElementById('result').textContent = 'Marv wins!';
            MarvColor();
            updateScore2();
        } else if (marvPick === 1) {
            document.getElementById('result').textContent = 'You win!';
            playerColor();
            updateScore1();
        } else if (marvPick === 2) {
            document.getElementById('result').textContent = 'A tie. Choose again.';
            neutralColor();
        } else {
            document.getElementById('result').textContent = '';
        }
    }
    
}

/**Functions for updating score */

score1 = 0;
score2 = 0;
function updateScore1() {
    score1 += 5;
    document.getElementById('player-0-score').textContent = score1;
    if (score1 >= 40) {
        gamePlaying = false;
        document.getElementById('result').textContent = name + ' wins the game!';
    }
}
function updateScore2() {
    score2 += 5;
    document.getElementById('player-1-score').textContent = score2;
    if (score2 >= 40) {
        gamePlaying = false;
        document.getElementById('result').textContent = 'Marv wins!';

    }
}
/**************************** */

/**Buttons */
document.getElementById('rock').addEventListener('click', showRock);
document.getElementById('paper').addEventListener('click', showPaper);
document.getElementById('scissors').addEventListener('click', showScissors);
document.getElementById('new-game').addEventListener('click', init);
/**Buttons */

/**COLOUR HIGHLIGHTER */
function neutralColor() {
    document.querySelector('#player-2-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(0,0,0,0.26)';
    document.querySelector('#player-1-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(0,0,0,0.26)';
}

function playerColor() {
    document.querySelector('#player-1-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(245,3,3,1)';
    document.querySelector('#player-2-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(0,0,0,0.26)';
}

function MarvColor() {
    document.querySelector('#player-2-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(245,3,3,1)';
    document.querySelector('#player-1-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(0,0,0,0.26)';
}
/**COLOUR HIGHLIGHTER */


function init() {
    gamePlaying = true;
    score1 = 0;
    score2 = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('player-1-pick').src = 'white.png';
    document.getElementById('player-2-pick').src = 'marvpic.jpg';
    document.querySelector('#player-0-score').textContent = '0';
    document.querySelector('#player-1-score').textContent = '0';
    document.querySelector('.player-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(0,0,0,0.26)';
    document.querySelector('#player-2-pick').style = 'box-shadow: 0px 13px 24px 5px rgba(0,0,0,0.26)';
    //randomPick();
}
