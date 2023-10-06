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

  console.log(CLIENTE)
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

function verificaDataNasc(dataNasc) {
  const particaoData = dataNasc.split('/')
  const diaNasc = parseInt(particaoData[0])
  const mesNasc = parseInt(particaoData[1])
  const anoNasc = parseInt(particaoData[2])

  const dataNascObj = new Date(anoNasc, mesNasc - 1, diaNasc)
  const dataAtual = new Date()

  const idadeEmMiliseg = dataAtual - dataNascObj
                                  // 1000ms -> 1s - 60s -> 1min    --- arredondamento por causa de anos bissextos
  const idadeEmAnos = Math.floor(idadeEmMiliseg / (1000 * 60 * 60 * 24 * 365.2425))

  if(idadeEmAnos >= 18) {
    alert('Verificamos aqui e você pode abrir a sua conta conosco!')
  } else {
    alert(`Ops! Você ainda não tem a idade mínima para abrir uma conta conosco. Daqui ${18 - idadeEmAnos} anos você poderá tentar novamente!`)
  }

  return idadeEmAnos
}

function coletaCPF() {
  let cpf = prompt('Qual o seu CPF? (xxx.xxx.xxx-xx)')
  
  //        false
  while(!verificaCPF(cpf)) {
    cpf = prompt('Qual o seu CPF? (xxx.xxx.xxx-xx)')
  }
   
  return cpf
}

function verificaCPF(cpf) {
  const cpfLimpo = cpf.split(/[.-]/).join('')
  if(cpfLimpo.length === 11) {
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

  while(!verificaEmail(email)) {
    email = prompt('Agora nos diga qual é o seu melhor email:')
  }

  return email
}

function verificaEmail(email) {
  const emailValido = email.indexOf('@')
  if(emailValido === -1) {
    alert('Ops! Tem certeza que esse e-mail está correto? Tente novamente.')
    return false
  }

  return true
}

function coletaNumerosContato() {
  let celular = prompt('Digite um número de celular válido: ') // => ''
  while(celular === '') {
    celular = prompt('Digite um número de celular válido: ') 
  }

  let telefone = prompt('Digite um número de telefone para contato. Caso não possua clique em OK para prosseguir.')
  if(telefone === '') {
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
  const senha = prompt('Agora digite uma senha de 4 números (não pode repetir os números nem ser uma sequência):')

  return senha
}






