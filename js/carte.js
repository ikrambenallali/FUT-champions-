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
      // Fetch the players data
      const players = await loadData();
      // Add unique IDs to each player
      const playersWithIds = await addIdsToPlayers(players);

      // Save the players data with IDs to localStorage
      localStorage.setItem("players", JSON.stringify(playersWithIds));
    }
  } catch (error) {
    console.error("Error loading data:", error);
  }
}

init();
let players = JSON.parse(localStorage.getItem("players")) || [];

const button = document.getElementById("valider");
button.addEventListener("click", function () {
  let playerData = {
    name: document.getElementById("inp1").value,
    photo: document.getElementById("inp2").value,
    nationality: document.getElementById("inp3").value,
    flag: document.getElementById("inp4").value,
    club: document.getElementById("inp5").value,
    logo: document.getElementById("inp6").value,
    rating: document.getElementById("inp7").value,
    pace: document.getElementById("inp8").value,
    shooting: document.getElementById("inp9").value,
    passing: document.getElementById("inp10").value,
    dribbling: document.getElementById("inp11").value,
    defending: document.getElementById("inp12").value,
    physical: document.getElementById("inp13").value,
    diving: document.getElementById("inp14").value,
    handling: document.getElementById("inp15").value,
    kicking: document.getElementById("inp16").value,
    reflexes: document.getElementById("inp17").value,
    speed: document.getElementById("inp18").value,
    positioning: document.getElementById("inp19").value,
  };
  console.log(playerData);

  if (!playerData.name || !playerData.photo) {
    alert("Veuillez remplir les champs requis !");
    return;
  }
  players.push(playerData);
  localStorage.setItem("players", JSON.stringify(players));
  showPLyers();
});

document.addEventListener("DOMContentLoaded", showPLyers());

function showPLyers() {
  console.log("im called");

  const cartContainer = document.getElementById("playersCarte");
  console.log(cartContainer);
  const players = JSON.parse(localStorage.getItem("players"));

  console.log(players);

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    const playerCard = document.createElement("div");
    playerCard.setAttribute("onclick","choosePlayer(this)");
    playerCard.className = "container relative  w-auto h-[300px]  ";
    console.log("player.position : ", player.position);
    if (player.position != "GK") {
      playerCard.innerHTML = `
                             <img src="images/badge_gold.webp" class="w-52" >
                              <!--  <button class="delet hidden border  rounded-full " id="delet">Supprimer</button> -->
                              <!--  <button class="edit hidden border  rounded-full "  id="edit">Modifier</button>  -->
                         <div class="font-bold text-xl mx-12 -my-56">
                             <h1>${player.rating}</h1>
                             <h1>CF</h1>
                         </div>
                             <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
                                 <img src="${player.photo}" >
                                 <h1 class="font-bold flex justify-center">${player.name}</h1>
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
                                 <img src="${player.flag}" rel="" class="w-5 mx-16 my-1">
                                 <img src="${player.logo}" class="w-5 mx-[95px] -my-[20px]">
                             </div>
 
                             </div>
             `;
      cartContainer.appendChild(playerCard);
    } else {
      playerCard.innerHTML = `
      
             <img src="images/badge_gold.webp" class="w-full" >
            <!--   <button class="delet hidden border  rounded-full  " id="delet">Supprimer</button>-->
            <!--   <button class="edit hidden border  rounded-full "  id="edit">Modifier</button>   -->
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
    

    playerCard.addEventListener('mouseenter', function() {
        playerCard.classList.add('bg-green-400');
        playerCard.classList.add('opacity-20') ;
        const deleteButton = playerCard.querySelector('.delet');
        const editButton = playerCard.querySelector('.edit');
        
        deleteButton.classList.remove('hidden');
        editButton.classList.remove('hidden');
        deleteButton.classList.remove('opacity-20');
        editButton.classList.remove('opacity-20');

    });
    
    playerCard.addEventListener('mouseleave', function() {
        playerCard.classList.remove('bg-green-400');
        playerCard.classList.remove('opacity-20') ;  
        const deleteButton = playerCard.querySelector('.delet');
        const editButton = playerCard.querySelector('.edit');
        
        deleteButton.classList.add('hidden');
        editButton.classList.add('hidden');
    });
    
  }
}
// function supprimerJoueur(){
//     const deleteButton = playerCard.querySelector('.delet');
//     deleteButton.addEventListener('click', function(){
//         const player = JSON.parse(localStorage.getItem('players'));
//         const index = player.findIndex(player => player.id === parseInt(deleteButton.dataset.id));
//         if (index !== -1) {
//             player.splice(index, 1);
//             localStorage.setItem('players', JSON.stringify(player));
//             playerCard.remove();
//         }
// });
// }
//terrain
let card = "";
// function cardContainer(cardID){
//     card = document.getElementById(cardID);
//     console.log("card : ",card);
// }
function selectPlayer(element) {
    console.log("element : ", element);
  
    const players = JSON.parse(localStorage.getItem("players"));
    console.log("players : ", players);
  
    const playerName = element.getAttribute("data-player-name");
  
    const playerSelected = players.find(player => player.name === playerName);
  
    if (playerSelected) {
      const card = document.getElementById("playerDetailsCard");
      card.innerHTML = ""; 
  
      if (playerSelected.position !== "GK") {
        card.innerHTML = `
          <img src="images/badge_gold.webp" class="w-52">
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
            <h1>GK</h1>
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
  //formation








let cartTrain ;
let playerChoosed ;
function choosePlayer(element){

  

  if(cartTrain){


    const newCard = document.createElement('div');
    newCard.innerHTML = element.innerHTML;
    newCard.className = element.className
    newCard.classList.add('flex', 'justify-center', 'items-center');

    newCard.querySelector('img').classList.add('absolute', 'left-12', 'scale-[1.75]')

    cartTrain.innerHTML = '';
    cartTrain.appendChild(newCard);
    
    cartTrain.querySelector('.opacity-20').classList.remove('opacity-20')
    cartTrain.querySelector('.bg-green-400').classList.remove('bg-green-400')
    cartTrain.classList.add('flex', 'justify-center', 'items-center', 'scale-50', '-translate-x-5')
  }

}

function testTerainCard(element){
  cartTrain = element ;
  console.log("testTerainCard : ",element);

}


