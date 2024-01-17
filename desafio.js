//variaveis
let vitorias
let derrotas

//função para calcular o saldo
function saldoDeVitorias(vitorias, derrotas) {
   return vitorias - derrotas
}
let saldo = saldoDeVitorias(100,19)
console.log(saldo)
let nivelDoHeroi


if (saldo <= 10) {nivelDoHeroi = "Ferro"}
else if (saldo <= 20) {nivelDoHeroi= "Bronze"}
else if (saldo <= 50) {nivelDoHeroi= "Prata"}
else if (saldo <= 80) {nivelDoHeroi= "Ouro"}
else if (saldo <= 90){nivelDoHeroi= "Diamante"}
else if (saldo <= 100) {nivelDoHeroi= "Lendário"}
else {nivelDoHeroi= "Imortal"}


console.log("O Herói tem de saldo de " + saldo + " e está no nível de " + nivelDoHeroi)