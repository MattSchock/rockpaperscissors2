let name = prompt('Hi What is your First Name?');
name = name.toLowerCase()
let userChoice = prompt('please choose rock, paper or scissors');
userChoice = userChoice.toLowerCase();

var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = 'rock';
} else if (computerChoice <= 0.67) {
    computerChoice = 'paper';
  }  else {
        computerChoice = 'scissors';
    }


if (name === "matt") {
    if (userChoice === 'rock') {
        alert('You chose rock, computer picked scissors, congrats you win!');
    } else if (userChoice === 'paper') {
        alert('you chose paper, computer chose rock, congrats you win!');
    } else if (userChoice === 'scissors') {
        alert('you chose scissors, computer chose paper, congrats you win!');
    } else {
        alert('unexpected choice.');
    }
} else if (name === 'jolie') {
    if (userChoice === 'rock') {
        alert('you chose rock, computer chose paper, you lose!');
    } else if (userChoice === 'paper') {
        alert('you chose paper, computer chose scissors, you lose!');
    } else if (userChoice === 'scissors') {
        alert('you chose scissors, computer chose rock, you lose!');
    } else {
        alert('unexpected choice.');
    }
} else if (name ==='scott'){
    prompt('You lose get wrecked nerd');
} else {
    
        if (userChoice === computerChoice) {
            alert(`you chose ${userChoice}, computer chose ${computerChoice}.  Tie game!`);
        } else if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
                alert(`you chose ${userChoice}, computer chose ${computerChoice} computer wins!`);
            } else if (computerChoice === 'scissors') {
                alert(`you chose ${userChoice}, computer chose ${computerChoice}, you win!`);
            }
        } else if (userChoice === 'paper') {
            if (computerChoice === 'rock') {
                alert(`you chose ${userChoice}, computer chose ${computerChoice} You Win!`);
            } else if (computerChoice === 'scissors') {
                alert(`you chose ${userChoice}, computer chose ${computerChoice}, you lose!`);
            }
        } else if (userChoice === 'scissors') {
            if (computerChoice === 'paper') {
                alert(`you chose ${userChoice}, computer chose ${computerChoice}, You Win!`);
               }   else if (computerChoice === 'rock') {
                    alert(`you chose ${userChoice}, computer chose ${computerChoice}, you lose!`);
                }
            
        }
    }
