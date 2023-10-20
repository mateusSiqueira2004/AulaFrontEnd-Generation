let nome = window.document.getElementById('nome');
let email =  document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let map = document.querySelector('#map');
function validaNome(){

    let inptNome = document.querySelector('#inptNome');
    let nomeRegex = /^[A-Za-z\sãõ]+$/;
    if(nome.value.match(nomeRegex) && nome.value.length > 2){
        inptNome.innerHTML = '';
        nomeOk = true;
    } else if(nome.value.length == 0){
        inptNome.innerHTML = 'Não pode ser vazio';
    }else{
        inptNome.innerHTML = 'Nome Inválido. Digite mais que 3 caracteres; Não pode possuir numeros ou carácteres especiais';
    }
}
function validaEmail(){

    let inptEmail = document.querySelector('#inptEmail'); 
    let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (email.value.match(emailRegex)) {
        inptEmail.innerHTML = '';
        emailOk = true;
    }else if(email.value.length === 0){
        inptEmail.innerHTML = 'Não pode ser vazio';
    }else {
        inptEmail.innerHTML = 'Email inválido. Digite um domínio Válido';
    }
}

function validaAssunto(){
    let inptAssunto = document.querySelector('#inptAssunto');

    if(assunto.value.length >= 150){
        inptAssunto.innerHTML = 'Texto acima do limite\nMAX.(150)';
    }else{
        inptAssunto.innerHTML = '';
        assuntoOk = true;
    }
}
function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert('enviado com sucesso')
    }else{
        alert('formulario inválido')
    }
}

function zoomMap(){
    map.style.width = '600px';
    map.style.height = '500px';
}
function normalMap(){
    map.style.width = '400px';
    map.style.height = '250px';
}