let amigos = [];
let listaAmigos = document.getElementById('listaAmigos');
let resultadoAmigo = document.getElementById('resultado');

function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value.trim();

    if(nomeAmigo != ''){
        amigos.push(nomeAmigo);
    } else {
        alert("Por favor, insira um nome!");
    }
    nomeAmigo.value='';
    atualizarAmigos();
    return nomeAmigo;
}

function atualizarAmigos(){
    listaAmigos.innerHTML = '';

    for(let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Adicionar ao menos um amigo para poder sortear!");
    }

    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = `<li>O amigo secreto é: ${sorteado}</li>`;
}