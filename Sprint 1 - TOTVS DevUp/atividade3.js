// Crie uma lógica que armazene dois números inteiros em duas variáveis. Em seguida, troque o valor dessas variáveis e exiba na tela.
// Por exemplo, uma variável a e outra b, em algum momento a vai valer b, e b vai valer a, mas quando a = b, o valor inicial de apode ser perdido, atenção!

// Definindo duas variáveis com números inteiros
let x = 25;
let y = 52;

// Trocando o valor das variáveis usando uma variável temporária
let temporaria = x;
x = y;
y = temporaria;

// Exibindo os valores das variáveis trocadas
console.log("O valor da variável x depois da troca: " + x); // deve ser 52
console.log("O valor da variável y depois da troca: " + y); // deve ser 25
