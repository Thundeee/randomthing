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

  //randomize the array
    for (let i = playerArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [playerArray[i], playerArray[j]] = [playerArray[j], playerArray[i]];

    }
  
    if (localStorage.getItem("data2")){
        //sjekk for like navn
        let draft1 = localStorage.getItem("data").split(',')
        let draft2 = localStorage.getItem("data2").split(',')
        let draft3 = playerArray

        //check if all arrays has same string on same index
        for (let i = 0; i < draft1.length; i++) {
        
            if (draft1[i] === draft2[i] && draft1[i] === draft3[i] && draft2[i] === draft3[i]) {
                console.log('same name on same index');
                console.log(draft1, draft2, draft3)
                //randomize again
                for (let i = playerArray.length - 1; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    [playerArray[i], playerArray[j]] = [playerArray[j], playerArray[i]];
                }
                localStorage.setItem("data", playerArray)
                localStorage.removeItem("data2")
            
            } else {
                console.log('no same name on same index')
                localStorage.setItem("data", draft2)
                localStorage.setItem("data2", playerArray)
            }
        
        }

                

    
    } else if (localStorage.getItem("data")) {
        localStorage.setItem("data2", playerArray)
    
}
     else {
        localStorage.setItem("data", playerArray)
    }

    for (let i = 0; i < playerArray.length; i++) {
        let playerElement = document.createElement('li');
        playerElement.textContent = playerArray[i];
        //add pciture element to playerElement
        let picture = document.createElement('img');
        picture.width = 50;
        picture.height = 50;
        playerElement.appendChild(picture);
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
