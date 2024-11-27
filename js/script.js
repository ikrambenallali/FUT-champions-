
const Button1 = document.getElementById('ajou');
const Button2=document.getElementById('modifier');
const Button3 = document.getElementById('supprimer');
const Button4 = document.getElementById('valider');


Button1.addEventListener('click',function(){
    const form = document.getElementById('formulle');
    const joueur = document.createElement('div');
    const x=document.getElementById('select');
    x.addEventListener('change',function(){
    let y=x.value ;
    if(y==='GK'){
        document.getElementById('GK').classList.remove('hidden');
        document.getElementById('other').classList.add('hidden');
    }
    else{
        document.getElementById('other').classList.remove('hidden');
        document.getElementById('GK').classList.add('hidden');
    
    }
    });
let teta=document.getElementById('buttons');
teta.classList.add('opacity-40');
let phi=document.getElementById('imagee');
phi.classList.add('opacity-40');
let lamda=document.getElementById('formulle');
lamda.classList.remove('hidden');
lamda.classList.add('block', 'opacity-100');
Button4.addEventListener('click',function(){
    lamda.classList.add('hidden');
    teta.classList.remove('opacity-40');
    phi.classList.remove('opacity-40');
});
});
// Button2.addEventListener('click',function(){

// });
// Button3.addEventListener('click',function(){

// });
