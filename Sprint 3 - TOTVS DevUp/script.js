function coletaDados() {
  const dataNasc = coletaDataNasc();
  coletaCPF();
  coletaNomeCliente();
  coletaEmail();
  coletaNumeroContato();
  coletaEndereco();
  coletaCidade();
  coletaProfissao();
  coletaSalario();
  coletaSenha();
}

coletaDados();

function coletaDataNasc() {
  const dataNasc = prompt("Qual a sua data de nascimento? (DD/MM/AAAA)");

  return dataNasc;
}

function coletaCPF() {
  const cpf = prompt("Qual o seu CPF? (xxx.xxx.xxx.-xx)");
}

function coletaNomeCliente() {
  const nomeCliente = prompt("Digite o seu nome completo:");
}

function coletaEmail() {
  const email = prompt("Agora nos diga qual é o seu melhor email:");
}

function coletaNumeroContato() {
  const celular = prompt("Digite um número de celular válido:");
  const telefone = prompt(
    "Digite um número de telefone para contato. Caso não possua clique em OK para prosseguir."
  );
}

function coletaEndereco() {
  const endereco = prompt(
    "Qual o seu endereço? (R. das Flores, 195, Bairro Tristeza"
  );
}

function coletaCidade() {
  const cidade = prompt("Qual cidade e estado você mora? (Porto Alegre - RS)");
}

function coletaProfissao() {
  const profissao = prompt("Conta para nós, qual é a sua profissão?");
}

function coletaSalario() {
  const salario = prompt("E qual a sua renda mensal aproximada?");
}

function coletaSenha() {
  const senha = prompt(
    "Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência)"
  );
}
