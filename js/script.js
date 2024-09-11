function mostrarNome() {
    let nomeUsuario = document.getElementById("nomeUsuario").value
    document.getElementById("paragrafo").innerText = "Bem vindo," + nomeUsuario
}

function calcAreaCirculo(){
    let raio= document.getElementById("raio").value
    const pi = 3.14
    let area= pi*raio**2
    document.getElementById("area").innerText = area
}