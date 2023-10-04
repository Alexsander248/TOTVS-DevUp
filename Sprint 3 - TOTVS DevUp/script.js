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

function coletaNomeCliente() {
  const nomeCliente = prompt("Digite o seu nome completo:");

  return nomeCliente;
}

function coletaEmail() {
  const email = prompt("Agora nos diga qual é o seu melhor email:");

  return email;
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
