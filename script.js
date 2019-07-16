//  setTimeout(function(){
//      console.log("sou uma função")
//  }, 3000);

// function alerta(){
//       alert("Eu sou alert");
//  }

// let intervalo = setInterval(() => {
//     alert("eu sou um alert chato")
// }, 2000);
//  clearInterval(intervalo);

let texto = document.querySelector("h1");
let tempo = Number(prompt("Digite quantos segundos você quer contar?"));
texto.innerHTML = tempo;

function diminuir(){
    tempo--;
    texto.innerHTML = tempo;
    if(tempo == 0){
        clearInterval(idIntervalo);
    }
}
let idIntervalo = setInterval(diminuir, 1000);
