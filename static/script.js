// fetch("TOH_moves.json")
//     .then((response) => response.json())
//     .then(moves => {
//         console.log("Moves loaded:", moves);

//         if(moves.length === 0) {
//             console.log(`First move: disk ${moves[0].disk} from ${moves[0].from} to ${moves[0].to}`);
//         }
//     })

//     .catch((error) => {
//         console.error("Error loading moves:", error);
//     });




// let rods = {
//   A: document.getElementById("A"),
//   B: document.getElementById("B"),
//   C: document.getElementById("C")
// };

// function createDisks(n) {
//   rods.A.innerHTML = "";
//   rods.B.innerHTML = "";
//   rods.C.innerHTML = "";

//   for (let i = n; i >= 1; i--) {
//     let disk = document.createElement("div");
//     disk.className = "disk";
//     disk.dataset.size = i;
//     disk.style.width = `${i * 30}px`;
//     rods.A.appendChild(disk);
//   }
// }

// function startAnimation() {
  
// fetch(`/solve?n=${n}`)
//   .then(res => res.json())
//   .then(moves => {
//         let i = 0;

//         let interval = setInterval(() => {
//             if (i >= moves.length) {
//                 clearInterval(interval);
//                 return;
//             }

//             let move = moves[i];

//              //  1. Highlight active rods
//             Object.values(rods).forEach(r => r.classList.remove("active"));
//             rods[move.from].classList.add("active");
//             rods[move.to].classList.add("active");


//             //  2. Update step info
//             document.getElementById("stepNum").textContent = i + 1;
//             document.getElementById("moveInfo").textContent =
//             `Move from ${move.from} → ${move.to}`;

//             //  3. Move the disk
//             moveDisk(move.from, move.to);
//             i++;
//     }, 800);

//   });
// }


//   function moveDisk(from, to) {
//   let disk = rods[from].lastElementChild;
//   rods[to].appendChild(disk);
// }

// document.getElementById("startBtn").addEventListener("click", () => {
//   const n = parseInt(document.getElementById("diskInput").value);
//   createDisks(n);
//   startAnimation();
// });



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

  fetch(`/solve?n=${n}`)
    .then(res => res.json())
    .then(data => {
      createDisks(data.n);
      animateMoves(data.moves);
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

    document.getElementById("stepNum").textContent = i + 1;
    document.getElementById("moveInfo").textContent =
      `Move from ${move.from} → ${move.to}`;

    i++;
  }, 800);
}

function moveDisk(from, to) {
  let disk = rods[from].lastElementChild;
  rods[to].appendChild(disk);
}


