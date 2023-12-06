// declarando variáveis

let nomeHeroi = "Beliack"
let XP
let statusHeroi 

// condicional para atribuir o nível do herói
// considerando o enunciado passado
for (XP = 0;XP < 12000;XP+=1000){
    if(XP <= 1000){
        statusHeroi = "Ferro"
    }else if (XP >= 1001 && XP <= 2000){
        statusHeroi = "Bronze"
    }else if(XP >= 2001 && XP <= 5000){
        statusHeroi = "Prata"
    }else if(XP >= 6001 && XP <= 7000){
        statusHeroi = "Ouro"
    }else if(XP >= 7001 && XP <= 8000){
        statusHeroi = "Platina"
    }else if(XP >= 8001 && XP <= 9000){
        statusHeroi = "Ascendente"
    }else if(XP >= 9001 && XP <= 10000){
        statusHeroi = "Imortal"
    }else if(XP >= 10001){
        statusHeroi = "Radiante"
    }else{
        statusHeroi = "Nenhum"
    }
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + statusHeroi + " e seu XP é de " + XP)
}

console.log("Com enunciado alterado:")
// condicional para atribuir o nível do herói
// considerando a minha correção do enunciado
for (XP = 0;XP < 12000;XP+=1000){
    if(XP <= 1000){
        statusHeroi = "Ferro"
    }else if (XP >= 1001 && XP <= 2000){
        statusHeroi = "Bronze"
    }else if(XP >= 2001 && XP <= 5000){
        statusHeroi = "Prata"
    }else if(XP >= 5001 && XP <= 7000){
        statusHeroi = "Ouro"
    }else if(XP >= 7001 && XP <= 8000){
        statusHeroi = "Platina"
    }else if(XP >= 8001 && XP <= 9000){
        statusHeroi = "Ascendente"
    }else if(XP >= 9001 && XP <= 10000){
        statusHeroi = "Imortal"
    }else if(XP >= 10001){
        statusHeroi = "Radiante"
    }else{
        statusHeroi = "Nenhum"
    }
    // mensagem de saída que se repetirá antes de adicionar mais 1000 na variável 
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + statusHeroi + " por ter seu XP igual a " + XP)
}

// - Variáveis: nomeHeroi, XP, statusHeroi
// - Operadores: relacionais (<= e >=), lógicos (&&)
// - Laços de repetição: for
// - Estruturas de decisões: if else if
// adicionei o valor de XP para verificar se ele estava realizando as verificações corretamente e assim encontrei o erro do enunciado
// poderia ficar assim também: 

console.log("Mensagem de saída pedida: ")

for (XP = 0;XP < 12000;XP+=1000){
    if(XP <= 1000){
        statusHeroi = "Ferro"
    }else if (XP >= 1001 && XP <= 2000){
        statusHeroi = "Bronze"
    }else if(XP >= 2001 && XP <= 5000){
        statusHeroi = "Prata"
    }else if(XP >= 5001 && XP <= 7000){
        statusHeroi = "Ouro"
    }else if(XP >= 7001 && XP <= 8000){
        statusHeroi = "Platina"
    }else if(XP >= 8001 && XP <= 9000){
        statusHeroi = "Ascendente"
    }else if(XP >= 9001 && XP <= 10000){
        statusHeroi = "Imortal"
    }else if(XP >= 10001){
        statusHeroi = "Radiante"
    }else{
        statusHeroi = "Nenhum"
    }
    console.log("O Herói de nome " + nomeHeroi + " está no nível de " + statusHeroi)
}
