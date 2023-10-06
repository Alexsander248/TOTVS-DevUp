export function verificaDataNasc(dataNasc) {
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

  export function verificaEmail(email) {
    const emailValido = email.indexOf('@')
    if(emailValido === -1) {
      alert('Ops! Tem certeza que esse e-mail está correto? Tente novamente.')
      return false
    }
  
    return true
  }


  export function verificaSenha(senha){
    //Verifica se tem 4 caracteres
    if(senha.length !==4){
    alert('A senha possui o tamanha invalido')
    return false
    
  }
  
    //Verifica se os caracteres são numéricos
    if(!/^\d+$/.test(senha)){
      alert('Senha contém caracteres não numéricos')
      return false
    }
  
    //Verifica se os números não se repetem
    for(let a = 0; a < senha.length; a++){
      for(let b = 0; b < senha.length; b++){
        if(senha[a] === senha[b] && a !== b){
        alert('Senha contém caracteres iguais')
      return false
        }
      }
    }
  
    //Verifica se nao é uma sequência
    for(let a = 0; a < senha.length; a ++){
      if( Number(senha[a]) + 1 === Number(senha[a + 1]) || Number(senha[a]) -1 === Number(senha[a + 1])  ){
        alert('Senha contém uma sequência')
        return false
      }
    }
    return true
  }