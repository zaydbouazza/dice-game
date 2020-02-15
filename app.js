/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var score, roundscore, activePLayer, totalscore, gameplaying,input;
initial()

var lastdice;
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gameplaying) {
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice1').style.display = 'block';
        document.getElementById('dice2').style.display = 'block';
        document.getElementById('dice1').src = 'img/dice-' + dice1 + '.png';
        document.getElementById('dice2').src = 'img/dice-' + dice2 + '.png';
        if (dice1!==1 && dice2!==1) {
            roundscore+=dice1+dice2;
            document.querySelector('#current-'+activePLayer).textContent=roundscore
        } else {
            nextplayer()
        }
//         if (lastdice === 6 && dice === 6) {
//             score[activePLayer] = 0
//             document.querySelector('#score-' + activePLayer).textContent = '0';
//             nextplayer()
//         } else if (dice !== 1) {
//             roundscore += dice
//             document.querySelector('#current-' + activePLayer).textContent = roundscore;

//         } else {
//             nextplayer()
//         }

//     }
//     lastdice = dice;
    }})

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gameplaying) {
        score[activePLayer] += roundscore;
        document.querySelector('#score-' + activePLayer).textContent = score[activePLayer];
        input = document.querySelector('.winning-score').value;
        console.log(input)
        var winningScore;
        if (input) {
             winningScore=input;
         }else{
             winningScore=100
         }
        if (score[activePLayer] >= winningScore) {
            document.querySelector('#name-' + activePLayer).textContent = 'Winner!'
            document.getElementById('dice1').style.display = 'none';
            document.getElementById('dice2').style.display = 'none';
            document.querySelector('.player-' + activePLayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePLayer + '-panel').classList.remove('active');
            gameplaying = false;

        }
        else {
            nextplayer()
        }


    }

})
function nextplayer() {
    activePLayer === 0 ? activePLayer = 1 : activePLayer = 0;
    roundscore = 0
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.getElementById('dice1').style.display = 'none';
    document.getElementById('dice2').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', initial);

function initial() {
    score = [0, 0];
    roundscore = 0;
    activePLayer = 0;
    totalscore = 0;
    gameplaying = true;
    document.getElementById('dice1').style.display = 'none';
        document.getElementById('dice2').style.display = 'none';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.querySelector('#score-1').textContent = '0';
    document.querySelector('#score-0').textContent = '0';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-1').textContent = 'player2'
    document.querySelector('#name-0').textContent = 'player1'
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}

