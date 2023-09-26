// Crie 5 variáveis e atribua valores, respeitando os tipos de dados a serem armazenados. Em seguida, em uma variável chamada profissional,
// concatene as variáveis abaixo formando uma string que faça sentido com os dados informados e apresente essa variável com o método document.write()
// em algum arquivo.html ou utilizando o console.log().

//a. nome (string)
//b. telefone (string)
//c. se possui convênio médico ou não (booleano)
//d. profissão (string)
//e. salário (number)

// Definindo as variáveis com os valores apropriados
let nome = "Pedro";
let telefone = "31-9-9999-9999";
let convenio = false;
let profissao = "Apicultor";
let salario = 5000;

// Eestrutura de condição verificando se a pessoa possui convênio médico
if (convenio == true) {
  convenio = "Possui Convenio.";
} else {
  convenio = "Não possui Convenio.";
}

// Concatenando as variáveis em uma string
let profissional =
  nome +
  " | " +
  telefone +
  " | " +
  convenio +
  " | " +
  profissao +
  " | " +
  salario;

// Exibindo a variável no console
console.log(profissional);
