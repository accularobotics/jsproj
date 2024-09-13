function mostrarNome() {
    let nomeUsuario = document.getElementById("nomeUsuario").value
    document.getElementById("paragrafo").innerText = "Bem vindo, " + nomeUsuario
}

function calcAreaCirculo() {
    let raio = document.getElementById("raio").value
    const pi = 3.14
    let area = pi * raio**2
    document.getElementById("area").innerText = area
}

function soma() {
    let n1 = Number(document.getElementById("n1").value)
    let n2 = Number(document.getElementById("n2").value)
    let soma = n1 + n2
    document.getElementById("soma").innerText = soma
}
function somaRet() {
    let ret1 = Number(document.getElementById("ret1").value)
    let ret2 = Number(document.getElementById("ret2").value)
    let soma = ret1 + ret2
    document.getElementById("somaRet").innerText = soma + "m²"
}
function AreaTric() {
    let tri1 = Number(document.getElementById("tri1").value)
    let tri2 = Number(document.getElementById("tri2").value)
    let AreaTri = (tri1 * tri2) / 2
    document.getElementById("AreaTri").innerText = AreaTri + "m²"
}

function Losango() {
    let losas1 = Number(document.getElementById("losas1").value)
    let losas2 = Number(document.getElementById("losas2").value)
    let Arealosango = (losas1 * losas2) / 2
    document.getElementById("AreaLosa").innerText = Arealosango + "m²"
}
function Trapezio() {
    let basemenor = Number(document.getElementById("basemenor").value)
    let Basemaior = Number(document.getElementById("Basemaior").value)
    let alt = Number(document.getElementById("altura").value)
    let AreaTrap = ((basemenor + Basemaior) *alt)/ 2
    document.getElementById("AreaTrapezio").innerText = AreaTrap + "m²"
}
function volumeCubo() {
    let vcubo1 = Number(document.getElementById("ladodocubo").value)
    let vcubo = vcubo1 **3 
    document.getElementById("volumeCubo").innerText += vcubo + "m²"
}
function paral() {
    let vparal1 = Number(document.getElementById("ladoparal").value)
    let vparal = vparal1 **3 
    document.getElementById("paral1").innerText = vparal + "m²"
}
function esfera() {
    let vesfera1 = Number(document.getElementById("esfera").value)
    let vesferal = vesfera1 **3 * 3.14 * 1.33
    document.getElementById("esfera2").innerText = vesferal + "m²"
}

function cilindro() {
    let cilil = Number(document.getElementById("cilindro").value)
    let altx = Number(document.getElementById("alturap").value)
    
    let vcilindro = cilil **2 * 3.14 * altx
    document.getElementById("cilindrox").innerText = vcilindro + "m²"
}

function cone() {
    let cone1 = Number(document.getElementById("cone").value)
    let coneh = Number(document.getElementById("alturacone").value)
    
    let coner = cone1 **2 * 3.14 * coneh * 0.33
    document.getElementById("conex").innerText = coner + "m²"
}


function piramide() {
    let pirar1 = Number(document.getElementById("piramide").value)
    let piral = Number(document.getElementById("alturapir").value)

    let pirar = (pirar1 **2 * piral) / 3
    document.getElementById("piramidox").innerText = pirar + "m²"
}


function bascara() {
    let VA = Number(document.getElementById("A1").value)
    let VB = Number(document.getElementById("B1").value)
    let VC = Number(document.getElementById("C1").value)

    let delta = ((VB**2) - (4 * VA * VC))
    let X1 = (- VB - ( delta**0.5)) / (2 *VA)
    let X2 = (- VB + ( delta**0.5)) / (2 *VA)
    
    document.getElementById("raizes").innerText = "x1= "+ X1 + "--" + " x2= "+ X2 +" delta= "+ delta
}