//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

let nomesAdicionados = document.querySelector("input");
let listaDeNomes = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");


function adicionarAmigo(){
    
    if (nomesAdicionados.value !== "") {
        amigos.push(nomesAdicionados.value);
        nomesAdicionados.value = "";
        console.log(amigos);

        listaDeNomes.innerHTML = ""

        amigos.forEach((item, index)=>{
            let criaLista = document.createElement("li");
            criaLista.innerText = amigos[index]
            listaDeNomes.appendChild(criaLista)
        })
    

    } else {
        alert("Por favor, insira um nome");
    }
}

function sortearAmigo(){


    if (amigos.length != 0) {

        let sorsteioArray = Math.floor(Math.random() * amigos.length)
        
        let criaRresultado = document.createElement("li");
        criaRresultado.innerText = amigos[sorsteioArray]
        resultado.appendChild(criaRresultado)
         listaDeNomes.innerHTML = ""
         amigos = []        
        console.log(amigos[sorsteioArray]) 
  
    }
    

    
}