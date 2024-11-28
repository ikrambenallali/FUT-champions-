let players = JSON.parse(localStorage.getItem("players")) || [];

if (!Array.isArray(players)) {
    players = []; 
}

const button=document.getElementById('valider');
button.addEventListener('click',function(){
   let playerData={
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

