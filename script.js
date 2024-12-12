const messagesNo3 = [
  { h1: "Allez, accepte ! 😭", p: "C'est vraiment pas cool 😭" },
  { h1: "Tu me brises le cœur ! 💔", p: "Pourquoi fais-tu ça ? 😢" },
  {
    h1: "S'il te plaît, ne sois pas si dure ! 😩",
    p: "Tu m'abandonnes comme ça ? 😞",
  },
  {
    h1: "Je ne peux pas supporter ça ! 😭",
    p: "Je t'en supplie, accepte ! 😣",
  },
  {
    h1: "Alors, c'est oui ou c'est oui ? 😉",
    p: "Dis oui, et je t’appartiens",
  },
  {
    h1: "Ne me laisse pas dans l’incertitude ! 😩",
    p: "Fais-moi rêver, dis oui !",
  },
  {
    h1: "Je n'ai jamais été aussi sérieux ! 🧐",
    p: "Un petit oui et tout est parfait !",
  },
  { h1: "Ne me brise pas comme ça ! 😭", p: "Tu sais que tu veux dire oui 😏" },
  {
    h1: "Tu ne peux pas me dire non, si ? 😜",
    p: "Je suis trop irrésistible !",
  },
  { h1: "Je suis tout ouïe... 😇", p: "Fais le bon choix, je suis prêt !" },
  { h1: "Ça va me faire mal, mais... 😢", p: "Tu n'oseras pas dire non, si ?" },
  {
    h1: "Sérieusement, tu me laisses en suspense ? 🤭",
    p: "Je sais que tu veux dire oui !",
  },
  {
    h1: "Ce serait trop cruel de me dire non... 😣",
    p: "Allez, un petit oui pour me rendre heureux !",
  },
  {
    h1: "Je te jure, je ne pourrai pas supporter un non... 😩",
    p: "Alors, fais-moi plaisir, dis oui !",
  },
  {
    h1: "C'est maintenant ou jamais... 😏",
    p: "Allez, ne me laisse pas en plan !",
  },
  {
    h1: "Si tu dis non, je vais fondre en larmes ! 😭",
    p: "Mais si tu dis oui, je suis à toi ! ❤️",
  },
  {
    h1: "Je n'ai pas d'autre choix que de compter sur toi ! 😇",
    p: "Fais-moi ce cadeau, dis oui !",
  },
];

// Fonction qui choisit un message aléatoire
function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messagesNo3.length);
  return messagesNo3[randomIndex];
}

function changePage(option) {
  const container = document.getElementById("main-container");
  const gifContainer = document.getElementById("gif-container");
  const h1 = document.querySelector("h1");
  const p = document.querySelector("p");
  const btn = document.querySelector(".btn");

  if (option === "yes") {
    createConfetti();
    gifContainer.setAttribute("data-postid", "253027946666209433");
    h1.textContent = "Je le savais ! Je t'aime aussi 😘";
    p.textContent = "";
    btn.innerHTML = "";
  } else if (option === "no1") {
    gifContainer.setAttribute("data-postid", "22050818");
    h1.textContent = "Réfléchis bien ! 🙄";
    p.textContent = "Ne dis pas non si vite 😥";
    btn.innerHTML = `<button onclick="changePage('yes')">Oui</button><button onclick="changePage('no2')">Non</button>`;
  } else if (option === "no2") {
    gifContainer.setAttribute("data-postid", "15195810");
    h1.textContent = "Pense encore une fois ! 😣";
    p.textContent = "Pourquoi fais-tu ça ? Accepte stp😣";
    btn.innerHTML = `<button onclick="changePage('yes')">Oui</button><button onclick="changePage('no3')">Non</button>`;
  } else if (option === "no3") {
    gifContainer.setAttribute("data-postid", "15974530976611222074");
    const randomMessage = getRandomMessage();
    h1.textContent = randomMessage.h1;
    p.textContent = randomMessage.p;

    btn.innerHTML = `<button onclick="changePage('yes')">Oui</button><button id="move-random" onclick="moveRandom()">Non</button>`;

    const moveRandomBtn = document.querySelector("#move-random");
    moveRandom();
  }
}

function moveRandom() {
  const btn = document.querySelector("#move-random");

  const newTop = Math.floor(Math.random() * 90 + 5) + "%";
  const newLeft = Math.floor(Math.random() * 90 + 5) + "%";

  btn.style.top = newTop;
  btn.style.left = newLeft;

  const randomMessage = getRandomMessage();
  document.querySelector("h1").textContent = randomMessage.h1;
  document.querySelector("p").textContent = randomMessage.p;
}

const activationRange = 150;

let lastMoveTime = 0;
const moveInterval = 300;

document.addEventListener("mousemove", function (e) {
  const currentTime = Date.now();
  if (currentTime - lastMoveTime > moveInterval) {
    const btn = document.querySelector("#move-random");

    if (btn) {
      const btnRect = btn.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      if (
        mouseX > btnRect.left - activationRange &&
        mouseX < btnRect.right + activationRange &&
        mouseY > btnRect.top - activationRange &&
        mouseY < btnRect.bottom + activationRange
      ) {
        moveRandom();
        lastMoveTime = currentTime;
      }
    }
  }
});

document
  .getElementById("gif-container")
  .addEventListener("click", function (event) {
    event.preventDefault();
  });

function createConfetti() {
  const colors = ["#ff0", "#f00", "#0f0", "#00f", "#ff69b4"];
  const numConfetti = 150;

  for (let i = 0; i < numConfetti; i++) {
    const confetti = document.createElement("div");
    const size = Math.random() * 8 + 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const angle = Math.random() * 360;
    const distance = Math.random() * 300 + 200;

    confetti.classList.add("confetti");
    confetti.style.width = `${size}px`;
    confetti.style.height = `${size}px`;
    confetti.style.backgroundColor = color;
    confetti.style.left = "50%";
    confetti.style.top = "50%";
    confetti.style.transformOrigin = "center center";

    confetti.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    confetti.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 3000);
  }
}
