/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

const usuario = [];
const computador = [];
const carta = [];

   
const Menssagem =  "Boas vindas ao jogo de Blackjack!"
console.log(Menssagem)

let novaRodada = confirm ("Quer iniciar uma nova rodada");

if(!novaRodada) {
   alert("O Jogo Acabou!!!")
} 
else {
novaRodada === true;
const carta = comprarCarta();
console.log("Usuário", carta.texto)
console.log("Computador", carta.valor)
}


