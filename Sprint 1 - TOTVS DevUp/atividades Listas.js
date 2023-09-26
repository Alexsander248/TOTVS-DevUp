// 1. Crie uma lista chamada pessoa, coloque valores dentro dela como: nome (string),
// idade (inteiro), CPF (string), altura (decimal), se é maior de idade ou não (valor booleano true ou false).

// Criando uma lista de pessoas
var pessoa = [
  {
    nome: "João",
    idade: 25,
    CPF: "123.456.789-00",
    altura: 1.75,
    maiorDeIdade: true,
  },
];

// Exemplo de como acessar informações da lista
console.log("Nome da primeira pessoa:", pessoa[0]);

// 2. Crie um programa que recebe uma quantidade máxima de 10 de letras e ao final exibe todas elas no console.
const letras = [];

for (let i = 1; i <= 10; i++) {
  const letra = prompt(`Digite a letra ${i}:`);
  letras.push(letra);
}

console.log("Letras digitadas:", letras.join(", "));

//3. Considerando o exercício anterior, refaça ele criando uma lista que irá armazenar as letras e em seguida mostre no console:

// a) A primeira letra digitada
// b) A quarta letra digitada
// c) A quinta letra digitada
// d) A última letra digitada
// e) O tamanho da lista criada

const letras = [];

for (let i = 1; i <= 10; i++) {
  const letra = prompt(`Digite a letra ${i}:`);
  letras.push(letra);
}

console.log("Letras digitadas:", letras.join(", "));

if (letras.length > 0) {
  console.log("A primeira letra digitada:", letras[0]);
  if (letras.length >= 4) {
    console.log("A quarta letra digitada:", letras[3]);
  } else {
    console.log("Não foram digitadas pelo menos quatro letras.");
  }
  if (letras.length >= 5) {
    console.log("A quinta letra digitada:", letras[4]);
  } else {
    console.log("Não foram digitadas pelo menos cinco letras.");
  }
  console.log("A última letra digitada:", letras[letras.length - 1]);
  console.log("Tamanho da lista criada:", letras.length);
} else {
  console.log("Nenhuma letra foi digitada.");
}
