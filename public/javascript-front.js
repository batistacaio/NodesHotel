// function pass_message(){
//     document.getElementById("senha")
//     alert("insira a senha com no minímo 6 caracteres e com pelo menos 1 número");
// };


// function check_passwords(){
//     var senha = document.getElementById('senha')
//     var confirmacao = document.getElementById('confirmacao')

// if(senha.value != confirmacao.value){
//     alert("as senhas não conferem")
// }
// };

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





