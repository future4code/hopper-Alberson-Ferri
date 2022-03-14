let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)



const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}




const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}

// Este array será usado para exemplificar as respostas de todos os itens
const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// Resposta item a.
80
30
130
40
60
21
70
120
90
103
110
55

// Resposta item b.
8
3 
13
4
6
2.1
7 
12
9
10.3
11 
5.5

// Resposta item c.
[80, 30, 130, 40, 60, 70, 120, 90, 110] 

// Resposta item d.
[ 'O elemento do índex 0 é 80',
  'O elemento do índex 1 é 30',
  'O elemento do índex 2 é 130',
  'O elemento do índex 3 é 40',
  'O elemento do índex 4 é 60',
  'O elemento do índex 5 é 21',
  'O elemento do índex 6 é 70',
  'O elemento do índex 7 é 120',
  'O elemento do índex 8 é 90',
  'O elemento do índex 9 é 103',
  'O elemento do índex 10 é 110',
  'O elemento do índex 11 é 55' ]

// Resposta e.
"O maior número é 130 e o menor é 21"