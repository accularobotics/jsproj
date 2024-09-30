
function Matematica() {
    let x = Number(document.getElementById("x").value)
    let y = Number(document.getElementById("y").value)
    let operacao = document.getElementById("operacao").value
    let resultado


switch (operacao) {
    
    case "+":
        resultado = x+y
         document.getElementById("numero").innerText += "resultado :" + resultado  
          
    break
    case "-":
        resultado = x-y
        document.getElementById("numero").innerText += "resultado :" + resultado 
    break 
    case "*":
        resultado = x*y
        document.getElementById("numero").innerText += "resultado :" + resultado
        
    break
    case "/":
        resultado = x/y
        document.getElementById("numero").innerText += "resultado :"  + resultado
    break
    default:
    document.getElementById("numeros").innerHTML = `erro !`
    

}
}

function salario() {
    let salario = Number(document.getElementById("salario").value)
    let senoriedade = document.getElementById("senoriedade").value
    
    let resultadox

switch (senoriedade) {
    
    case "j":
        resultadox = salario + (salario*1.1)
         document.getElementById("numerow").innerText += "resultado :" + resultadox  
          
    break
    case "p":
        resultadox = salario + (salario*1.075)
         document.getElementById("numerow").innerText += "resultado :" + resultadox  
    break 
    case "s":
        resultadox = salario + (salario*1.05)
         document.getElementById("numerow").innerText += "resultado :" +  resultadox  
        
    break

    
    default:
    document.getElementById("numerow").innerHTML = `erro !`
    

}
}




