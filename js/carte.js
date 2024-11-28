let players = JSON.parse(localStorage.getItem("players")) || [];
async function loadData() {
    const response = await fetch('./players.json');

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
}

async function init() {
    try {
        const players = await loadData();
        localStorage.setItem('players', JSON.stringify(players));
        
    } catch (error) {
        console.error('Error loading data:', error);
    }
}

init().then(() => {
    console.log('Données récupérées depuis localStorage :', players);
});
if (!Array.isArray(players)) {
    players = []; 
}
const button=document.getElementById('valider');
button.addEventListener('click',function(){
    playerData={
 inp1:document.getElementById('inp1').value,
 inp2:document.getElementById('inp2').value,
 inp3:document.getElementById('inp3').value,
 inp4:document.getElementById('inp4').value,
 inp5:document.getElementById('inp5').value,
 inp6:document.getElementById('inp6').value,
 inp7:document.getElementById('inp7').value,
 inp8:document.getElementById('inp8').value,
 inp9:document.getElementById('inp9').value,
 inp10:document.getElementById('inp10').value,
 inp11:document.getElementById('inp11').value,
 inp12:document.getElementById('inp12').value,
 inp13:document.getElementById('inp13').value,
 inp14:document.getElementById('inp14').value,
 inp15:document.getElementById('inp15').value,
 inp16:document.getElementById('inp16').value,
 inp17:document.getElementById('inp17').value,
 inp18:document.getElementById('inp18').value,
 inp19:document.getElementById('inp19').value,
    };
    if (!playerData.inp1 || !playerData.inp2) { 
        alert('Veuillez remplir les champs requis !');
        return;
    }
     players.push(playerData);
     localStorage.setItem('players', JSON.stringify(players));
});



document.addEventListener('DOMContentLoaded', function() {
   const cartContainer = document.getElementById("playersCarte");
   console.log(cartContainer);
   const allPlayers = JSON.parse(localStorage.getItem("players"));
   const players = allPlayers.players;

   for(let i = 0 ; i < players.length; i++) {
        const player = players[i];
        const playerCard = document.createElement("div");
        playerCard.className = "container relative  w-auto h-[300px]  ";
        console.log("player.position : ", player.position);
        if(player.position != "GK"){
            playerCard.innerHTML = `
                            <img src="images/badge_gold.webp" class="w-52" >
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
            `
            cartContainer.appendChild(playerCard);
        }
        else{
            playerCard.innerHTML = `
            <img src="images/badge_gold.webp" class="w-52" >
        <div class="font-bold text-xl mx-12 -my-56">
            <h1>${player.rating}</h1>
            <h1>CF</h1>
        </div>
            <div class="absolute w-44 h-44 top-[19%] left-10 my-2 -mx-4 flex flex-col justify-center items-center">
                <img src="${player.photo}" >
                <h1 class="font-bold flex justify-center">${player.name}</h1>
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
        `
        cartContainer.appendChild(playerCard);

        }
    }




});
function addplayer(){
    let inp1 = document.getElementById("inp1");
    let inp2 = document.getElementById("inp2");
    let inp3 = document.getElementById("inp3");
    let inp4 = document.getElementById("inp4");
    let inp5 = document.getElementById("inp5");
    let inp6 = document.getElementById("inp6");
    let inp7 = document.getElementById("inp7");
    let inp8 = document.getElementById("inp8");
    let inp9 = document.getElementById("inp9");
    let inp10 = document.getElementById("inp10");
    let inp11 = document.getElementById("inp11");
    let inp12 = document.getElementById("inp12");
    let inp13 = document.getElementById("inp13");
    let inp14 = document.getElementById("inp14");
    let inp15 = document.getElementById("inp15");
    let inp16 = document.getElementById("inp16");
    let inp17 = document.getElementById("inp17");
    let inp18 = document.getElementById("inp18");
    let inp19 = document.getElementById("inp19");
}