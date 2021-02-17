const btn = document.querySelectorAll('button');
let res = document.getElementById('res');
let comres = document.getElementById('comres');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', game);
}

    function game(e) {
        let player = e.target.innerText;

        let com = Math.random();

        if (com < .34) {
            com = "sc";
        } else if (com <= .67) {
            com = "ro";
        } else {
            com = "pa";
        }

        let result = logic(player, com);

        let resmod = judge(result);
        
        res.innerHTML = resmod;

        comres.innerHTML = 'Computer is choosing ' + com;

    }

    function judge(result) {
        if (result === 'player') {
          return  result += 'Wins!';
        }

        if (result === 'computer') {
           return result += "Lose!";
        }

        if (result === 'draw') {
           return result = "Its even!";
        }
    }

    function logic(player,com) {
        
    }
    function logic(player, com) {
        if (player === com) {
            return 'draw';
        }

        if (player === 'pa') {
            if (com === 'sc') {
                return 'computer'
            } else {
                return 'player'
            }
        }

        if (player === "sc") {
            if (com === "ro") {
                return "player";
            } else {
                return "computer";
            }
        }
    
        if (player === "ro") {
            if (com === "pa") {
                return "player";
            } else {
                return "computer";
            }
        }
    }

