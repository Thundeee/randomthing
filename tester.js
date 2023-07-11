/* eslint-disable default-case */
let playerArray;

let form = document.querySelector(".opgg");
let team1 = document.querySelector(".team1");
let team2 = document.querySelector(".team2");

form.addEventListener("submit", function (e) {
    if (document.querySelectorAll(".player")) {
        console.log("players exist");
        let players = document.querySelectorAll(".player");
        for (let i = 0; i < players.length; i++) {
            players[i].remove();
        }
    }
    e.preventDefault()
    console.log(form[0].value);
    let opggInput = form[0].value
    const lines = opggInput.split(" joined the lobby");

    playerArray = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
  
    if (line.length === 0) {
      continue;
    }
  
    playerArray.push(line);
  }
  

let players


function randomer(arg) {
    for (let i = arg.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));
        [arg[i], arg[j]] = [arg[j], arg[i]];
        
    }
    return arg;
}

//add roles
function roler(arg) {
players = [];
for (let i = 0; i < arg.length; i++) {
    let player = [];
    switch (i) {
        case 0:
        case 1:
            player.push(arg[i]);
            player.push("TOP");
            player.push("Position_Challenger-Top.png");
            break;
        case 2:
        case 3:
            player.push(arg[i]);
            player.push("JUNGLE");
            player.push("Position_Challenger-Jungle.png");

            break;
        case 4:
        case 5:
            player.push(arg[i]);
            player.push("MID");
            player.push("Position_Challenger-Mid.png");

            break;
        case 6:
        case 7:
            player.push(arg[i]);
            player.push("ADC");
            player.push("Position_Challenger-Bot.png");
            break;
        case 8:
        case 9:
            player.push(arg[i]);
            player.push("SUPP");
            player.push("Position_Challenger-Support.png");
            break;
    }
    players.push(player)
    
}
}

function checker() {
    if (localStorage.getItem("data2")) {
        //sjekk for like navn
        let draft1 = JSON.parse(localStorage.getItem("data"));
        let draft2 = JSON.parse(localStorage.getItem("data2"));
        let draft3 = players;
        let name;
        let role;
        let roleCheck;
            for (let i = 0; i < draft3.length; i++) {
                
                 name = draft3[i][0];
                 role = draft3[i][1];
                if (draft1.some((player) => player[0] === name) && draft2.some((player) => player[0] === name)) {
                    if (
                        draft1.some((player) => player[0] === name && player[1] === role) &&
                        draft2.some((player) => player[0] === name && player[1] === role)
                      ) {
                        roleCheck = true;
                        break;
                      }
                    
                }
            }
        
            if (roleCheck) {
                console.log(name, role)
                console.log("roleCheck ble poppa ass vi reroller");
                console.log(draft1, draft2, draft3);
                //randomize draft 3
                randomer(playerArray)
                roler(playerArray)
                checker()
            } else {
                console.log(draft1, draft2, draft3);
                console.log("no same name on same index");
                localStorage.setItem("data", JSON.stringify(draft2));
                localStorage.setItem("data2", JSON.stringify(players));
            }
        
    } else if (localStorage.getItem("data")) {
        localStorage.setItem("data2", JSON.stringify(players));
    } else {
        localStorage.setItem("data", JSON.stringify(players));
    }
}


randomer(playerArray)
roler(playerArray)
checker()
dommer(players)


});


function dommer(arg) {
    for (let i = 0; i < arg.length; i++) {
        let playerElement = document.createElement("li");
        playerElement.textContent = arg[i][0];

        let picture = document.createElement("img");
        picture.width = 50;
        picture.height = 50;
        picture.src = arg[i][2]
        playerElement.appendChild(picture);


        playerElement.classList.add("player");
        if (i % 2 === 0) {
            team1.appendChild(playerElement);
        } else {
            team2.appendChild(playerElement);
        }
    }
}