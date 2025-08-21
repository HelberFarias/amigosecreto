// 1. criar uma função que leia e armezene os dados enviados pelo usuario.
// 2. criar uma função para sortear um nome aleatorio enviado pelo usuario.
//    - verificar se o nome escolhido não seja escolhido de novo.
// 3. fazer uma validacao de campo vazio (usar alert).
// 4. criar um alert avisando que todos os nomes na lista foram sorteados.

// detalhes: 
//  - botao de reiniciar.
//  - certificar de que ao clicar em sortear nome, na tela apareça apenas o nome sorteado e não outra lista.
//  - deixar a primeira letra dos nomes visiveis da lista maiuscula.


let nomesUsuario = [];
let exibirResultado = document.createElement("h2");

function adicionarAmigo () {
    let nome = document.getElementById("amigo").value;
        if (nome == '')
            alert("CAMPO VAZIO! Favor digitar um nome!");
    
    nome = capitalizar(nome);    
    document.getElementById("amigo").value = '';
    document.getElementById("amigo").focus();
    nomesUsuario.push(nome);
    let listaVisivel = document.createElement("li");
    listaVisivel.textContent = nome;
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.appendChild(listaVisivel);
    console.log(listaAmigos);
    return;
}

function sortearAmigo() {
    if (nomesUsuario.length === 0) {
        alert("Todos os nomes foram sorteados!");
        return; 
    }
    let indiceAleatorio = Math.floor(Math.random() * nomesUsuario.length);
    let nomeSorteado = nomesUsuario[indiceAleatorio];
    nomesUsuario.splice(indiceAleatorio, 1);
    let limparCampo = document.getElementById("listaAmigos");
    exibirResultado.textContent = nomeSorteado
    limparCampo.innerHTML = '';
    
    let resultado = document.getElementById("resultado");
    resultado.appendChild(exibirResultado);   
    
}

function capitalizar (nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase(); 
}

function botaoReiniciar() {
    nomesUsuario = [];
    exibirResultado.innerHTML = '';
   



}


