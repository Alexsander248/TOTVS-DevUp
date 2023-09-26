// Uma piscina redonda está sendo construída, e sabe-se que ela tem o raio de 3,5m, e uma altura de 1,6m.
// O construtor notou um erro no volume de água em litros que o software da empresa está retornando, em torno de 0,06L, e resolveu entrar em contato com a equipe de TI.
// Construa uma lógica que calcula a quantidade de litros que a piscina suportará e identifique o problema na lógica do software.

//📝 Para calcular o volume (m³) da piscina com base circular (um cilindro), basta multiplicar a área da base pela altura. ■ 1m³ = 1000L ■ π = 3.14

// Dados da piscina
var raio = 3.5; // em metros
var altura = 1.6; // em metros

// Calculando o volume em metros cúbicos
var volumeMetrosCubicos = Math.PI * Math.pow(raio, 2) * altura;

// Convertendo o volume para litros
var volumeLitros = volumeMetrosCubicos * 1000;

// Exibindo o resultado
console.log("O volume da piscina é de " + volumeLitros.toFixed(2) + " litros.");

// Comparando com o valor do software
var valorSoftware = 0.06; // em litros
if (Math.abs(volumeLitros - valorSoftware) < 0.01) {
  console.log("O software está correto.");
} else {
  console.log("Há um problema no software. O valor esperado é diferente.");
}
