function pass_message(){
    document.getElementById("senha")
    alert("insira a senha com no minímo 6 caracteres e com pelo menos 1 número");
}


function check_passwords(){
    var senha = document.getElementById('senha')
    var confirme = documento.getElementById('confirmacao')

if(senha.value != confirme.value){
    alert("as senhas não conferem")
}
}