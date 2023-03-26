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
        //add pciture element to playerElement
        let picture = document.createElement('img');
        picture.width = 50;
        picture.height = 50;
        playerElement.appendChild(picture);
console.log(i);
        //add picture depending on index
        switch (i) {
            case 0:
            case 1:
                picture.src = 'Position_Challenger-Top.png'
                break;
            case 2:
            case 3:
                picture.src = 'Position_Challenger-Jungle.png'
                break;
            case 4:
            case 5:
                picture.src = 'Position_Challenger-Mid.png'
                break;
            case 6:
            case 7:
                picture.src = 'Position_Challenger-Bot.png'
                break;
            case 8:
            case 9:
                picture.src = 'Position_Challenger-Support.png'
                break;
        }

        playerElement.classList.add('player');
        if (i % 2 === 0) {
            team1.appendChild(playerElement);


        } else {
            team2.appendChild(playerElement);
            
        }
    }

  
});
