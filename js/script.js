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

function Soma() {

    let n1 = Number(document.getElementById("n1").value)

    let n2 = Number(document.getElementById("n2").value)
    let soma = n1 + n2
    document.getElementById("soma").innerText = soma


}