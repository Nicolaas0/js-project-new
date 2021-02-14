const sc = document.getElementById("sc");
const pa = document.getElementById("pa");
const ro = document.getElementById("ro");
const player;
const com;
const win = true;
const lose = false;
const even = null;

function pMove() {
  const scv = scissors.value; //sc
  const pav = pa.value; //pa
  const rov = ro.value; //ro

  if (scv === "sc") {
    player = scv;
    gameLogic(player);
  } else if (pav === "pa") {
    player = pav;
    gameLogic(player);
  } else if (rov === "ro") {
    player = rov;
    gameLogic(player);
  }
}

function gameLogic(player,com) {
  if (gameLogic(player == pav && com)) {
    scPlay(scv, pav2, rov2, scv2);
  } else if (gameLogic(pav)) {
    paPlay(pav, pav2, rov2, scv2);
  } else if (gameLogic(rov)) {
    roPlay(rov, rov2, pav2, scv2);
  }
}

function scPlay() {
  const svp = (scv, pav2) => {
    if (scv && pav2 != null);
    return win();
  };
  const svr = (scv, rov2) => {
    if (scv && rov2 != null) {
      return lose();
    }
  };
  const svs = (scv, scv2) => {
    if (scv && scv2) {
      return even();
    }
  };
}

function paPlay() {
  const pvp = (pav, pav2) => {
    if (pav && pav2 != null) {
      return even();
    }
  };
  const pvr = (pav, rov2) => {
    if (pav && rov2 != null) {
      return lose();
    }
  };
  const pvs = (pav, scv2) => {
    if (pav && scv2 != null) {
      return win();
    }
  };
}

function roPlay() {
  const rvp = (rov, pav2) => {
    if (rov && pav2 != null) {
      return lose();
    }
  };
  const rvr = (rov, rov2) => {
    if (rov && rov2 != null) {
      return even();
    }
  };
  const rvs = (rov, scv2) => {
    if (rov && scv2 != null) {
      return win();
    }
  };
}

const win = () => {
  document.getElementById("res").innerHTML = "YOU WIN!";
};

const lose = () => {
  document.getElementById("res").innerHTML = "YOU LOSE!";
};
