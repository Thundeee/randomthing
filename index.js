let playerArray;

let form = document.querySelector('.playerForm');
let team1 = document.querySelector('.team1');
let team2 = document.querySelector('.team2');

console.log(form);
form.addEventListener('submit', function(e) {
    if (document.querySelectorAll(".player")) {
        console.log('players exist');
        let players = document.querySelectorAll('.player');
        for (let i = 0; i < players.length; i++) {
            players[i].remove();
        }


        
    }
 playerArray = [];
  e.preventDefault();
  for (let i = 0; i < form.length -1; i++) {
    if (form[i].value === '') {
        continue;
        
    }
        
    playerArray.push(form[i].value);
  }
  console.log(playerArray);

  //randomize the array
    for (let i = playerArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [playerArray[i], playerArray[j]] = [playerArray[j], playerArray[i]];

    }

    for (let i = 0; i < playerArray.length; i++) {
        let playerElement = document.createElement('li');
        playerElement.textContent = playerArray[i];
        playerElement.classList.add('player');
        if (i % 2 === 0) {
            team1.appendChild(playerElement);


        } else {
            team2.appendChild(playerElement);
            
        }
    }
  
});
