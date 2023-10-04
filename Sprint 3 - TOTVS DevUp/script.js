function coletaDados() {
  const dataNasc = coletaDataNasc();
  const cpf = coletaCPF();
  const nomeCliente = coletaNomeCliente();
  const email = coletaEmail();
  const numerosContato = coletaNumeroContato();
  const endereco = coletaEndereco();
  const cidade = coletaCidade();
  const profissao = coletaProfissao();
  const salario = coletaSalario();
  const senha = coletaSenha();

  const CLIENTE = {
    dataNasc: dataNasc,
    cpf: cpf,
    nomeCliente: nomeCliente,
    email: email,
    numerosContato: numerosContato,
    endereco: endereco,
    cidade: cidade,
    profissao: profissao,
    salario: salario,
    senha: senha,
  };
}

coletaDados();

function coletaDataNasc() {
  const dataNasc = prompt("Qual a sua data de nascimento? (DD/MM/AAAA)");

  return dataNasc;
}

function coletaCPF() {
  const cpf = prompt("Qual o seu CPF? (xxx.xxx.xxx.-xx)");

  return cpf;
}

function verificarCPF(cpf) {
  const cpfLimpo = cpf.split(/[.-]/).join("");
  if (cpfLimpo.length === 11) {
    alert("Tudo certo! Vamos prosseguir.");
  } else {
    alert(
      "Verificamos aqui e seu CPF parece ser um número inválido. Tente novamente."
    );
    coletaCPF();
  }
}

function coletaNomeCliente() {
  const nomeCliente = prompt("Digite o seu nome completo:");

  return nomeCliente;
}

function coletaEmail() {
  const email = prompt("Agora nos diga qual é o seu melhor email:");

  return email;
}

function verificarEmail(email) {
  const emailValido = email.indexOf("@");
  if (emailValido === -1) {
    alert("Ops! Tem certeza que esse e-mail está correto? Tente novamente.");
    coletaEmail();
  }
}

function coletaNumeroContato() {
  const celular = prompt("Digite um número de celular válido:");
  const telefone = prompt(
    "Digite um número de telefone para contato. Caso não possua clique em OK para prosseguir."
  );

  return {
    celular: celular,
    telefone: telefone,
  };
}

function coletaEndereco() {
  const endereco = prompt(
    "Qual o seu endereço? (R. das Flores, 195, Bairro Tristeza"
  );

  return endereco;
}

function coletaCidade() {
  const cidade = prompt("Qual cidade e estado você mora? (Porto Alegre - RS)");

  return cidade;
}

function coletaProfissao() {
  const profissao = prompt("Conta para nós, qual é a sua profissão?");

  return profissao;
}

function coletaSalario() {
  const salario = prompt("E qual a sua renda mensal aproximada?");

  return salario;
}

function coletaSenha() {
  const senha = prompt(
    "Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência)"
  );

  return senha;
}
