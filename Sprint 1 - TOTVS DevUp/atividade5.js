// No Brasil, uma pessoa é obrigada a votar se tiver idade entre 18 e 70 anos. Acima de 70 anos o voto é opcional,
// assim como para quem tem 16 ou 17 anos. Quem ainda não completou 16 anos não pode votar. Através de estruturas condicionais,
// crie um programa que dirá se uma pessoa pode ou não votar, de acordo com a idade que será armazenada em uma variável.

// Definindo valores
let idade = 5;

// Estrutura de condição
if (idade >= 18 && idade < 70) {
  console.log("O voto para essa faixa étaria é obrigatório");
} else if (idade == 16 || idade == 17 || idade >= 70) {
  console.log("O voto é opcional.");
} else {
  console.log("O voto é proibido.");
}
