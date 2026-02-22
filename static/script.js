
let rods = {
  A: document.getElementById("A"),
  B: document.getElementById("B"),
  C: document.getElementById("C")
};

function createDisks(n) {
  rods.A.innerHTML = "";
  rods.B.innerHTML = "";
  rods.C.innerHTML = "";

  for (let i = n; i >= 1; i--) {
    let disk = document.createElement("div");
    disk.className = "disk";
    disk.style.width = `${i * 30}px`;
    rods.A.appendChild(disk);
  }
}

function startAnimation() {
  let n = document.getElementById("diskInput").value;

  fetch(`/solve?n=${n}`) //GET /solve?n=3 : browser will send a request (calling app.py's solve function) (app.py ends there completely after returning the JSON response)
  
  //Response
    .then(res => res.json())
    .then(data => {
      createDisks(data.n); //First create disks 
      animateMoves(data.moves);// Second animate moves
    });
}

function animateMoves(moves) {
  let i = 0;

  let interval = setInterval(() => {
    if (i >= moves.length) {
      clearInterval(interval);
      return;
    }

    let move = moves[i];
    moveDisk(move.from, move.to);

    document.getElementById("stepNum").textContent = i + 1;  //steps number
    document.getElementById("moveCounter").textContent =
      `Move from ${move.from} → ${move.to}`;  //Moves info

    i++;
  }, 800);
}

// DOM manipulation = visual movement.
function moveDisk(from, to) {
  let disk = rods[from].lastElementChild;
  if (disk) {
    rods[to].appendChild(disk);
  }
}


