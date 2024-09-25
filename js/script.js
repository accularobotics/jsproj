
function mediaf() {
    let umanota = Number(document.getElementById("umanota").value)
    let duasnotas = Number(document.getElementById("duasnotas").value)
    let tresnotas = Number(document.getElementById("tresnotas").value)
    let medianotas = (umanota + duasnotas + tresnotas) / 3

    if (medianotas >= 6) {
        document.getElementById("situacaaluno").innerText = "Aluno Aprovado !"
    } else {
        document.getElementById("situacaaluno").innerText = "Aluno Reprovado !"

    }
}

function rendaper() {
    let redape = Number(document.getElementById("renda").value)
    const salariominino = 1412
    let redapercap = Number(salariominino * 1.5)
    if (redape <= redapercap) {
        document.getElementById("criterio").innerText = "Aluno Apto a engressar no Senac !"
    } else {
        document.getElementById("criterio").innerText = "Pessoa Não aceito para esse curso"
    }
}

// function soppaxy() {
//     let ezzex = Number(document.getElementById("recx").value)
//     let essey = Number(document.getElementById("recebey").value)
//     // let xvezesy 
//     // if (ezzex == essey) {
//     //     xvezesy = ezzex * essey)
//     // } else { 
//     //    xvezesy = (ezzex / essey)
//     // }
//     document.getElementById("aqui").innerText = "O Resultado de X vezes Y = " += xvezesy

// }


function soppaxy() {
    let recebix = Number(document.getElementById("recx").value)
    let recey = Number(document.getElementById("recebey").value)
    let vazia = null 
   
    if (recebix == recey) {
        vazia = recebix * recey
        document.getElementById("aqui").innerText = "x *y = " + vazia 
        
    } else {
        vazia = recebix / recey
        document.getElementById("aqui").innerText = "x / y = " + vazia
    }
}

function pesoideal() {
    let sexo = Number(document.getElementById("sexo").value)
    let peso = Number(document.getElementById("peso").value)
    let altura = Number(document.getElementById("altura").value)
    let pesoideal = null
    if (sexo == 1){

        pesoideal = (72.7 * altura) - 58 
    } else {

        pesoideal = (62.1 * altura) - 44.7 
    }

    document.getElementById("pesoideal").innerText =  pesoideal

}
function mediafs() {
    let umanotas = Number(document.getElementById("umanotas").value)
    let duasnotass = Number(document.getElementById("duasnotass").value)
    let tresnotass = Number(document.getElementById("tresnotass").value)
    let medianotass = (umanotas + duasnotass + tresnotass) / 3

    if (medianotass >= 7) {
        document.getElementById("situacaalunos").innerText = "Aluno Aprovado !"
    } 
    
    if (medianotass < 6) {
        document.getElementById("situacaalunos").innerText = "Aluno Reprovado !"

    }
    if (medianotass >= 6 &&  medianotass <= 5.9)  {
        document.getElementById("situacaalunos").innerText = "Aluno Recuperação !"

    }
}