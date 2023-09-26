//1. Com as estruturas de repetição for e while, faça o que se pede:

//a) Mostre os números de 1 a 50 na tela, dizendo se é par ou ímpar:
//   1 é ímpar
//     2 é par
//   3 é ímpar
//...
//   49 é ímpar
//   50 é par

// b) Mostre apenas os múltiplos de 3 entre 1 e 100:
// 3 6 9 12 ... 93 96 99

// c) Mostre a seguinte sequência (de 100 até 0, pulando de dois em dois):
// 100 98 96 94 92 ... 6 4 2 0

// Exemplo A
let x = 1;
// Enquanto
while (x <= 50) {
  if (x % 2 === 0) {
    console.log(x + " é par");
  } else {
    console.log(x + " é ímpar");
  }
  x += 1;
}

// Exemplo B
let y = 0;
// Enquanto
while (y <= 100) {
  console.log(y);
  y += 3;
}

// Exemplo C
let z = 100;
// Enquanto
while (z >= 0) {
  console.log(z);
  z -= 2;
}

//2. O jogo do PIM é um jogo em que o Sílvio Santos pedia para os participantes de seu programa contar de 1 até 40 da seguinte forma:

for (let i = 1; i <= 40; i++) {
  if (i % 3 === 0) {
    console.log("PIM");
  } else {
    console.log(i);
  }
}
