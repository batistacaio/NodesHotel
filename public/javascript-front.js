

function habilitar(){
    var senha = document.getElementById('senha')
    var confirmacao = document.getElementById('confirmacao')
    var container = document.querySelector('.msg')
    if(senha.value == confirmacao.value && senha.value != "" && confirmacao.value != ""){
    document.getElementById('botao').disabled = false;
    container.style.display = 'none'
   
}};
function desabilitar(){
    var senha = document.getElementById('senha')
    var confirmacao = document.getElementById('confirmacao')
    var container = document.querySelector('.msg') 
    if(senha.value != confirmacao.value){
    document.getElementById('botao').disabled = true
    container.style.display = 'block'
   
}};





