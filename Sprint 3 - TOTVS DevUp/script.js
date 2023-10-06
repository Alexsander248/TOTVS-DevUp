import { verificaDataNasc, verificaEmail, verificaSenha } from "./verificacoes.js";


function coletaDados() {
  const dataNasc = coletaDataNasc()
  const cpf = coletaCPF()
  const nomeCliente = coletaNomeCliente()
  const email = coletaEmail()
  const numerosContato = coletaNumerosContato()
  const endereco = coletaEndereco()
  const cidade = coletaCidade()
  const profissao = coletaProfissao()
  const salario = coletaSalario()
  const senha = coletaSenha()

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
    senha: senha
  }

  alert(`
Confirme os seus dados:
Nome completo: ${CLIENTE.nomeCliente.toUpperCase()}
CPF: ${CLIENTE.cpf}
Data de Nascimento: ${CLIENTE.dataNasc.dataNasc}
Idade: ${CLIENTE.dataNasc.idade}

E-mail: ${CLIENTE.email}
Celular: ${CLIENTE.numerosContato.celular}
Telefone: ${CLIENTE.numerosContato.telefone}

Endereço: ${CLIENTE.endereco}
Cidade/UF: ${CLIENTE.cidade}

Profissao: ${CLIENTE.profissao.toUpperCase()}
Salario: ${CLIENTE.salario}

Senha Cadastrada: ${CLIENTE.senha}
`)

  let credito
  if (CLIENTE.salario >= 1000 && CLIENTE.salario < 3000) {
    credito = salario * .2

  } else if (CLIENTE.salario >= 3000 && CLIENTE.salario < 5000) {
    credito = salario * .28
  } else if (CLIENTE.salario >= 5000) {
    credito = salario * .31
  }

  alert(`Você tem direito a um crédito inicial de R$${credito}. Deseja aderir?`)
  alert(`Bem Vindo(a)! ${CLIENTE.nomeCliente}`)
}

coletaDados()

function coletaDataNasc() {
  const dataNasc = prompt('Qual a sua data de nascimento? (DD/MM/AAAA)')
  const idade = verificaDataNasc(dataNasc)

  return {
    dataNasc,
    idade
  }
}



function coletaCPF() {
  let cpf = prompt('Qual o seu CPF? (xxx.xxx.xxx-xx)')

  //        false
  while (!verificaCPF(cpf)) {
    cpf = prompt('Qual o seu CPF? (xxx.xxx.xxx-xx)')
  }

  return cpf
}

function verificaCPF(cpf) {
  const cpfLimpo = cpf.split(/[.-]/).join('')
  if (cpfLimpo.length === 11) {
    alert('Tudo certo! Vamos prosseguir.')
    return true
  }

  alert('Verificamos aqui e seu CPF parece ser um número inválido. Tente novamente.')
  return false

}

function coletaNomeCliente() {
  const nomeCliente = prompt('Digite o seu nome completo:')

  return nomeCliente
}

function coletaEmail() {
  let email = prompt('Agora nos diga qual é o seu melhor email:')

  while (!verificaEmail(email)) {
    email = prompt('Agora nos diga qual é o seu melhor email:')
  }

  return email
}



function coletaNumerosContato() {
  let celular = prompt('Digite um número de celular válido: ') // => ''
  while (celular === '') {
    celular = prompt('Digite um número de celular válido: ')
  }

  let telefone = prompt('Digite um número de telefone para contato. Caso não possua clique em OK para prosseguir.')
  if (telefone === '') {
    telefone = 'Não informado'
  }

  return {
    celular: celular,
    telefone: telefone
  }
}

function coletaEndereco() {
  const endereco = prompt('Qual o seu endereço? (R. das Flores, 195, Bairro Tristeza)')

  return endereco
}

function coletaCidade() {
  const cidade = prompt('Qual cidade e estado você mora? (Porto Alegre - RS)')

  return cidade
}

function coletaProfissao() {
  const profissao = prompt('Conta para nós, qual é a sua profissão?')

  return profissao
}

function coletaSalario() {
  const salario = prompt('E qual a sua renda mensal aproximada?')

  return salario
}

function coletaSenha() {
  let senha = prompt('Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência):')
  //     ! = falso
  while (!verificaSenha(senha)) {
    senha = prompt('Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência):')

  }

  return senha
}











