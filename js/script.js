// recuperer les donnees depuis un  JSON
async function loadData() {
  const response = await fetch("../players.json");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data.players; // Make sure to return just the players array
}

async function addIdsToPlayers(players) {
  return players.map((player, index) => ({
    ...player,
    id: `player-${index + 1}`,
  }));
}

async function init() {
  try {
    if (!JSON.parse(localStorage.getItem("players"))) {
      const players = await loadData();
      const playersWithIds = await addIdsToPlayers(players);
      localStorage.setItem("players", JSON.stringify(playersWithIds));
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

init();
//ajouter players
let players = JSON.parse(localStorage.getItem("players")) || [];

const button = document.getElementById("valider");
button.addEventListener("click", function () {
  const playerPosition = document.getElementById("select").value;

  let playerData = {
    name: document.getElementById("inp1").value,
    photo: document.getElementById("inp2").value,
    nationality: document.getElementById("inp3").value,
    flag: document.getElementById("inp4").value,
    club: document.getElementById("inp5").value,
    logo: document.getElementById("inp6").value,
    rating: document.getElementById("inp7").value,
    position: playerPosition,
  };
  if (playerPosition === "GK") {
    playerData.diving = document.getElementById("inp8").value;
    playerData.handling = document.getElementById("inp9").value;
    playerData.kicking = document.getElementById("inp10").value;
    playerData.reflexes = document.getElementById("inp11").value;
    playerData.speed = document.getElementById("inp12").value;
    playerData.positioning = document.getElementById("inp13").value;
  } else {
    playerData.pace = document.getElementById("inp14").value;
    playerData.shooting = document.getElementById("inp15").value;
    playerData.passing = document.getElementById("inp16").value;
    playerData.dribbling = document.getElementById("inp17").value;
    playerData.defending = document.getElementById("inp18").value;
    playerData.physical = document.getElementById("inp19").value;
  }

  console.log(playerData);

  // Validation des champs requis
  console.log("console.log(playerData.rating);", playerData.rating);
  if (!playerData.name || !playerData.photo) {
    alert("Veuillez remplir les champs requis !");
    return;
  } else if (!playerData.nationality || !playerData.flag) {
    alert("Veuillez remplir les champs requis !");
    return;
  } else if (!playerData.club || !playerData.logo) {
    alert("Veuillez remplir les champs requis !");
    return;
  } 
  else if(!playerData.rating) {
    alert("Veuillez remplir les champs requis !");

  }
  else if (parseInt(playerData.rating) > 100) {
    alert("Les statistiques entre 0 et 100 !");

    return;
  }
  if (playerPosition === "GK") {
    if (!playerData.diving || !playerData.handling) {
      alert("Veuillez remplir les champs requis !");
      return;
      
    } else if (parseInt(playerData.diving) > 100 || parseInt(playerData.handling) >100) {
      alert("Les statistiques entre 0 et 100 !");
  
      return;
    }
    else if (!playerData.kicking || !playerData.reflexes) {
      alert("Veuillez remplir les champs requis !");
      return;
    }
    else if (parseInt(playerData.kicking) > 100 || parseInt(playerData.reflexes) >100) {
      alert("Les statistiques entre 0 et 100 !");
  
      return;
    }
     else if (!playerData.speed || !playerData.positioning) {
      alert("Veuillez remplir les champs requis !");
      return;
    }
    else if (parseInt(playerData.speed) > 100 || parseInt(playerData.positioning) >100) {
      alert("Les statistiques entre 0 et 100 !");
  
      return;
    }
  } else {
    if (!playerData.pace || !playerData.shooting) {
      alert("Veuillez remplir les champs requis !");
      return;
    } else if (parseInt(playerData.pace) > 100 || parseInt(playerData.shooting) >100) {
      alert("Les statistiques entre 0 et 100 !");
  
      return;
    }
    else if (!playerData.passing || !playerData.dribbling) {
      alert("Veuillez remplir les champs requis !");
      return;
    } else if (parseInt(playerData.passing) > 100 || parseInt(playerData.dribbling) >100) {
      alert("Les statistiques entre 0 et 100 !");
  
      return;
    }
    else if (!playerData.defending || !playerData.physical) {
      alert("Veuillez remplir les champs requis !");
      return;
    }
    else if (parseInt(playerData.defending) > 100 || parseInt(playerData.physical) >100) {
      alert("Les statistiques entre 0 et 100 !");
  
      return;
    }
  }
  const playerIndex = button.getAttribute("data-player-index");
  if (playerIndex === null || playerIndex === "") {
    // ajouter un nouveau joueur
    players.push(playerData);
    console.log("Joueur ajouté :", playerData);
  } else {
    // modifier un joueur existe
    players[playerIndex] = playerData;
    console.log("Joueur modifié :", playerData);
  }

  localStorage.setItem("players", JSON.stringify(players));
  document.getElementById("formulle").classList.add("hidden");
  document.getElementById("formulle").reset();
  button.removeAttribute("data-player-index");
  showPLyers();
});
//afficher les joueurs
document.addEventListener("DOMContentLoaded", showPLyers());

function showPLyers() {
  console.log("im called");

  const cartContainer = document.getElementById("playersCarte"); //parent(la carte)
  console.log(cartContainer);
  const players = JSON.parse(localStorage.getItem("players"));

  console.log(players);

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const playerCard = document.createElement("div"); //enfant(les informations)
    playerCard.setAttribute("onclick", "choosePlayer(this)");
    playerCard.className = "container relative  w-auto h-[300px]  ";
    console.log("player.position : ", player.position);
    if (player.position != "GK") {
      playerCard.innerHTML = `

           <img src="images/badge_gold.webp" class=" w-52  " >
            <button data-player-index="${i}"  class="delet hidden   border  rounded-full  " id="delet">Supprimer</button> 
              <button data-player-index="${i}" onclick="editPlayer(event)" class="edit    border hidden rounded-full "  id="edit">Modifier</button> 
                         <div class="font-bold text-xl mx-12 -my-56">
                             <h1>${player.rating}</h1>
                             <h1>CF</h1>
                         </div>
                             <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
                                 <img src="${
                                   player.photo ||
                                   "https://via.placeholder.com/150?text=No+Image"
                                 }" >
                                 <h1 class="font-bold flex justify-center">${
                                   player.name
                                 }</h1>
                                 <div class="flex gap-1 font-bold text-xs">
                                 <div class="div1 flex flex-col">
                                     <h1>PAC</h1>
                                     <h1>${player.pace}</h1>
                                 </div>
                                 <div class="div2 flex flex-col">
                                     <h1>SHO</h1>
                                     <h1>${player.shooting}</h1>
                                 </div>
                                 <div class="div3 flex flex-col">
                                     <h1>PAS</h1>
                                     <h1>${player.passing}</h1>
                                 </div>
                                 <div class="div4 flex flex-col">
                                     <h1>DRI</h1>
                                     <h1>${player.dribbling}</h1>
                                 </div>
                                 <div class="div5 flex flex-col">
                                     <h1>DEF</h1>
                                     <h1>${player.defending}</h1>
                                 </div>
                                 <div class="div6 flex flex-col">
                                     <h1>PHY</h1>
                                     <h1>${player.physical}</h1>
                                 </div>
                             </div>
                             <div>
                                 <img src="${
                                   player.flag ||
                                   "https://via.placeholder.com/150?text=No+Image"
                                 }" rel="" class="w-5 mx-16 my-1">
                                 <img src="${
                                   player.logo ||
                                   "https://via.placeholder.com/150?text=No+Image"
                                 }" class="w-5 mx-[95px] -my-[20px]">
                             </div>
 
                             </div>
                            
             `;
      cartContainer.appendChild(playerCard);
    } else {
      playerCard.innerHTML = `
             <img src="images/badge_gold.webp" class="w-full" >
               <button data-player-index="${i}" class="delet  hidden border  rounded-full  " id="delet">Supprimer</button> 
              <button data-player-index="${i}" onclick="editPlayer(event)" class="edit hidden border   rounded-full "  id="edit">Modifier</button> 
         <div class="font-bold text-xl mx-12 -my-56">
             <h1>${player.rating}</h1>
             <h1>CF</h1>
         </div>
             <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
                 <img src="${player.photo}" >
                 <h1 class="font-bold flex justify-center">${player.club}</h1>
                 <div class="flex gap-1 font-bold text-xs">
                 <div class="div1 flex flex-col">
                     <h1>DIV</h1>
                     <h1>${player.diving}</h1>
                 </div>
                 <div class="div2 flex flex-col">
                     <h1>HAD</h1>
                     <h1>${player.handling}</h1>
                 </div>
                 <div class="div3 flex flex-col">
                     <h1>KIC</h1>
                     <h1>${player.kicking}</h1>
                 </div>
                 <div class="div4 flex flex-col">
                     <h1>REF</h1>
                     <h1>${player.reflexes}</h1>
                 </div>
                 <div class="div5 flex flex-col">
                     <h1>SPD</h1>
                     <h1>${player.speed}</h1>
                 </div>
                 <div class="div6 flex flex-col">
                     <h1>POS</h1>
                     <h1>${player.positioning}</h1>
                 </div>
             </div>
             <div>
                 <img src="${player.flag}" rel="" class="w-5 mx-16 my-1">
                 <img src="${player.logo}" class="w-5 mx-[95px] -my-[20px]">
             </div>
 
             </div>
               
         `;

      cartContainer.appendChild(playerCard);
    }
    //hover
    playerCard.addEventListener("mouseenter", function () {
      playerCard.classList.add("bg-yellow-100");
      playerCard.classList.add("opacity-80");
      const deleteButton = playerCard.querySelector(".delet");
      console.log;
      const editButton = playerCard.querySelector(".edit");

      deleteButton.classList.remove("hidden");
      editButton.classList.remove("hidden");
      console.log("hi");
    });

    playerCard.addEventListener("mouseleave", function () {
      playerCard.classList.remove("bg-yellow-100");
      playerCard.classList.remove("opacity-80");
      const deleteButton = playerCard.querySelector(".delet");
      const editButton = playerCard.querySelector(".edit");

      deleteButton.classList.add("hidden");
      editButton.classList.add("hidden");
    });
  }
}
//supprimer
const delet = document.querySelectorAll(".delet");
delet.forEach((element) => {
  element.addEventListener("click", function () {
    const playerIndex = element.getAttribute("data-player-index");
    players.splice(playerIndex, 1);
    localStorage.setItem("players", JSON.stringify(players));
    element.closest(".container").remove();
  });
});

//modifier
function editPlayer(e) {
  const playerIndex = e.target.getAttribute("data-player-index");
  const validerButton = document.getElementById("valider");
  validerButton.setAttribute("data-player-index", playerIndex);

  document.getElementById("select").value = players[playerIndex].position;
  if (players[playerIndex].position === "GK") {
    document.getElementById("GK").classList.remove("hidden");
    document.getElementById("other").classList.add("hidden");
  } else {
    document.getElementById("other").classList.remove("hidden");
    document.getElementById("GK").classList.add("hidden");
  }

  document.getElementById("formulle").classList.remove("hidden");
  document.getElementById("inp1").value = players[playerIndex].name;
  document.getElementById("inp2").value = players[playerIndex].photo;
  document.getElementById("inp3").value = players[playerIndex].nationality;
  document.getElementById("inp4").value = players[playerIndex].flag;
  document.getElementById("inp5").value = players[playerIndex].club;
  document.getElementById("inp6").value = players[playerIndex].logo;
  document.getElementById("inp7").value = players[playerIndex].rating;
  console.log(players[playerIndex].position);

  if (players[playerIndex].position === "GK") {
    document.getElementById("inp8").value = players[playerIndex].diving;
    document.getElementById("inp9").value = players[playerIndex].handling;
    document.getElementById("inp10").value = players[playerIndex].kicking;
    document.getElementById("inp11").value = players[playerIndex].reflexes;
    document.getElementById("inp12").value = players[playerIndex].speed;
    document.getElementById("inp13").value = players[playerIndex].positioning;
  } else {
    document.getElementById("inp14").value = players[playerIndex].pace;
    document.getElementById("inp15").value = players[playerIndex].shooting;
    document.getElementById("inp16").value = players[playerIndex].passing;
    document.getElementById("inp17").value = players[playerIndex].dribbling;
    document.getElementById("inp18").value = players[playerIndex].defending;
    document.getElementById("inp19").value = players[playerIndex].physical;
  }
}
//ajouter les joueurs au terrain
//Affiche les details d'un joueur selectione.
let card = "";

function selectPlayer(element) {
  console.log("element : ", element);

  const players = JSON.parse(localStorage.getItem("players"));
  console.log("players : ", players);

  const playerName = element.getAttribute("data-player-name");

  const playerSelected = players.find((player) => player.name === playerName);

  if (playerSelected) {
    const card = document.getElementById("playerDetailsCard");
    card.innerHTML = "";

    if (playerSelected.position !== "GK") {
      card.innerHTML = `
          <img src="images/badge_gold.webp" class="w-[15%]">
          <div class="font-bold text-xl mx-12 -my-56">
            <h1>${playerSelected.rating}</h1>
            <h1>CF</h1>
          </div>
          <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
            <img src="${playerSelected.photo}">
            <h1 class="font-bold flex justify-center">${playerSelected.name}</h1>
            <div class="flex gap-1 font-bold text-xs">
              <div class="div1 flex flex-col">
                <h1>PAC</h1>
                <h1>${playerSelected.pace}</h1>
              </div>
              <div class="div2 flex flex-col">
                <h1>SHO</h1>
                <h1>${playerSelected.shooting}</h1>
              </div>
              <div class="div3 flex flex-col">
                <h1>PAS</h1>
                <h1>${playerSelected.passing}</h1>
              </div>
              <div class="div4 flex flex-col">
                <h1>DRI</h1>
                <h1>${playerSelected.dribbling}</h1>
              </div>
              <div class="div5 flex flex-col">
                <h1>DEF</h1>
                <h1>${playerSelected.defending}</h1>
              </div>
              <div class="div6 flex flex-col">
                <h1>PHY</h1>
                <h1>${playerSelected.physical}</h1>
              </div>
            </div>
          </div>
          <div>
            <img src="${playerSelected.flag}" rel="" class="w-5 mx-16 my-1">
            <img src="${playerSelected.logo}" class="w-5 mx-[95px] -my-[20px]">
          </div>
        `;
    } else {
      card.innerHTML = `
          <img src="images/badge_gold.webp" class="w-52">
          <div class="font-bold text-xl mx-12 -my-56">
            <h1>${playerSelected.rating}</h1>
            <h1>CF</h1>
          </div>
          <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
            <img src="${playerSelected.photo}">
            <h1 class="font-bold flex justify-center">${playerSelected.club}</h1>
            <div class="flex gap-1 font-bold text-xs">
              <div class="div1 flex flex-col">
                <h1>DIV</h1>
                <h1>${playerSelected.diving}</h1>
              </div>
              <div class="div2 flex flex-col">
                <h1>HAD</h1>
                <h1>${playerSelected.handling}</h1>
              </div>
              <div class="div3 flex flex-col">
                <h1>KIC</h1>
                <h1>${playerSelected.kicking}</h1>
              </div>
              <div class="div4 flex flex-col">
                <h1>REF</h1>
                <h1>${playerSelected.reflexes}</h1>
              </div>
              <div class="div5 flex flex-col">
                <h1>SPD</h1>
                <h1>${playerSelected.speed}</h1>
              </div>
              <div class="div6 flex flex-col">
                <h1>POS</h1>
                <h1>${playerSelected.positioning}</h1>
              </div>
            </div>
          </div>
          <div>
            <img src="${playerSelected.flag}" rel="" class="w-5 mx-16 my-1">
            <img src="${playerSelected.logo}" class="w-5 mx-[95px] -my-[20px]">
          </div>
        `;
    }
  }
}
//Positionne un joueur selectioner sur une carte sur le terrain.
let cartTrain;
let playerChoosed;
function choosePlayer(element) {
  if (cartTrain) {
    const newCard = document.createElement("div");
    newCard.innerHTML = element.innerHTML;
    newCard.className = element.className;
    newCard.classList.add("flex", "justify-center", "items-center");

    newCard
      .querySelector("img")
      .classList.add("absolute", "left-12", "scale-[1.75]");

    cartTrain.innerHTML = "";
    cartTrain.appendChild(newCard);

    cartTrain.querySelector(".opacity-80").classList.remove("opacity-80");
    cartTrain.querySelector(".bg-yellow-100").classList.remove("bg-yellow-100");
    cartTrain.classList.add(
      "flex",
      "justify-center",
      "items-center",
      "scale-50",
      "-translate-x-5",
      "-translate-y-[25%]"
    );
  }
}
//preparer l'emplacement sur le terrain
function testTerainCard(element) {
  cartTrain = element;
  console.log("testTerainCard : ", element);
}
