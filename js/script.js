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
const Button1 = document.getElementById('ajou');
const Button2=document.getElementById('modifier');
const Button3 = document.getElementById('supprimer');
Button1.addEventListener('click',function(){

});
Button2.addEventListener('click',function(){

});
Button3.addEventListener('click',function(){

});
