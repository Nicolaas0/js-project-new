const btn = document.querySelectorAll('button');
let res = document.getElementById('res');
let comres = document.getElementById('comres');

for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', game);
}

    function game(e) {
        let Player = e.target.innerText;

        let com = Math.random();

        if (com < .34) {
            com = "sc";
        } else if (com <= .67) {
            com = "ro";
        } else {
            com = "pa";
        }

        let result = logic(Player, com);

        let resmod = judge(result);
        
        res.innerHTML = resmod;

        comres.innerHTML = '<span>Computer</span> is choosing ' +"<i>"+"<span>"+ com + "</span>" + "</i>";

    }

    function judge(result) {
        if (result === 'Player') {
          return  result += ' win!';
        }

        if (result === 'Computer') {
           return result += " lose!";
        }

        if (result === 'draw') {
           return result = " Its even!";
        }
    }

    function logic(Player, com) {
        if (Player === com) {
            return 'draw';
        }

        if (Player === 'pa') {
            if (com === 'sc') {
                return 'Computer'
            } else {
                return 'Player'
            }
        }

        if (Player === "sc") {
            if (com === "ro") {
                return "Player";
            } else {
                return "Computer";
            }
        }
    
        if (Player === "ro") {
            if (com === "pa") {
                return "Player";
            } else {
                return "Computer";
            }
        }
    }

