// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.getElementById("amigo").value;
    if (nombreAmigo === ""){
        alert("Tienes que ingresar un nombre.")
        return;
    }
    listaAmigos.push(nombreAmigo);
    console.log(listaAmigos);
    limpiarInput();
    actualizarLista();
    return;
}

function sortearAmigo(){
    let listaAmigosTamano = listaAmigos.length;
    if (listaAmigosTamano == 0){
        alert("No hay amigos para sortear");
        return;
    }
    let indiceAmigoAleatorio = Math.floor(Math.random()*listaAmigosTamano);
    actualizarAmigoSecreto(listaAmigos[indiceAmigoAleatorio]);
    return;
}

function limpiarInput(){
    let input = document.getElementById('amigo');
    input.value = '';
}

function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++){
        let li = document.createElement("li");
        li.textContent = `${i+1}. ${listaAmigos[i]}`;
        lista.appendChild(li);
    }
    return;
}

function actualizarAmigoSecreto(amigoSecreto){
    document.getElementById("listaAmigos").innerHTML = "";
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;
    listaAmigos = [];
    return;
}


