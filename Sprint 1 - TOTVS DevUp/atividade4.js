//Resolva as operações mentalmente, primeiro, para que possa consolidar melhor os conceitos de variáveis e ordem de precedência.

// Definindo valores
let inteiro = 7;
let decimal = 3.5;

// Resolvendo as operações
let adicao = inteiro + decimal; // 7 + 3.5 = 10.5
let subtracao = inteiro - decimal; // 7 - 3.5 = 3.5
let potenciacao = (adicao - 0.5) ** 2; // (10.5 - 0.5) ^ 2 = 100
let expressao1 = inteiro - 4 / 2 / 2; // 7 - (4 / 2 / 2) = 6
let expressao2 = (inteiro - 4) / 2; // (7 - 4) / 2 = 1.5
let expressao3 = 2 + subtracao * 2; // 2 + (3.5 * 2) = 9
let expressao4 = (2 + subtracao) * 2; // (2 + 3.5) * 2 = 11
let modulo1 = potenciacao % 2; // 100 % 2 = 0 (100 é divisível por 2)
let modulo2 = (inteiro - 1) % 2; // (7 - 1) % 2 = 0 (6 é divisível por 2)

// Exibindo os valores das variáveis.
console.log(
  adicao +
    "\n" +
    subtracao +
    "\n" +
    potenciacao +
    "\n" +
    expressao1 +
    "\n" +
    expressao2 +
    "\n" +
    expressao3 +
    "\n" +
    expressao4 +
    "\n" +
    modulo1 +
    "\n" +
    modulo2
);
