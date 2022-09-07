/*

const name = "Raissa"

let notaDoPrimeiroBimestre = 9
let notaDoSegundoBimestre = 7
let notaDoTerceiroBimestre = 4
let notaDoQuartoBimestre = 2

const notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

let notaFixada = notaFinal.toFixed(1)

console.log(`Bem vindo, ${name}`)
console.log(notaFixada)



Revisão:
- Variáveis
- Strings
- console.log
- toFixed()
- Operaões matemáticas
- Concatenação

*/

function calcular() {
    
    let firstBim = Number(document.querySelector(".firstbim").value)
    let secondBim = Number(document.querySelector(".secondbim").value)
    let thirdBim = Number(document.querySelector(".thirdbim").value)
    let fourthBim = Number(document.querySelector(".fourthbim").value)
    
    /*
    let sum = firstBim + secondBim + thirdBim + fourthBim
    let average = sum / 4
    */
    
    let sum = (firstBim + secondBim + thirdBim + fourthBim) / 4
    let average = sum
    
    let msg = document.querySelector(".msg")
    let input = document.querySelector(".input")
    let img = document.querySelector(".img")
    let aprovedMsg = document.querySelector(".result")
    
    const schoolAverage = 7 
    
    if(average >= schoolAverage){
        input.innerHTML = ""
      
        let congrats = document.createElement("h4")
        congrats.setAttribute("class", "congrats")
        congrats.innerText = "Parabéns!"
        msg.appendChild(congrats)

        let averageMsg = document.createElement("p")
        averageMsg.setAttribute("class", "averagemsg")
        averageMsg.innerHTML = `Sua média foi de <strong>${average.toFixed(1)}</strong> pts`
        msg.appendChild(averageMsg)

        img.src = "https://i.postimg.cc/15333Pb3/aproved.png"

        let aproved = document.createElement("h1")
        aproved.setAttribute("class", "aprovado")
        aproved.innerText = "APROVADO"
        aproved.style.color = "#1eb80f"
        aprovedMsg.appendChild(aproved)

    } else {
        input.innerHTML = ""
       
        let congrats = document.createElement("h4")
        congrats.setAttribute("class", "congrats")
        congrats.innerText = "Estude mais!"
        msg.appendChild(congrats)
       
        let averageMsg = document.createElement("span")
        averageMsg.setAttribute("class", "averagemsg")
        averageMsg.innerHTML = `Sua média foi de <strong>${average.toFixed(1)}</strong> pts`
        msg.appendChild(averageMsg)

        img.src = "https://i.postimg.cc/3JfJyVHC/reproved.png"

        let aproved = document.createElement("h1")
        aproved.setAttribute("class", "aprovado")
        aproved.innerText = "REPROVADO"
        aproved.style.color = "#e01c1c"
        aprovedMsg.appendChild(aproved)
    }
}
