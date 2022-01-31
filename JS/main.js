const words = document.querySelector('#words')
const result = document.querySelector('#result')

function encrypt() {
  let texto = words.value
  let teste = texto.split('')
  for (let i = 0; i < teste.length; i++) {
    if (teste[i] === 'e') {
      teste[i] = 'enter'
    } else if (teste[i] === 'i') {
      teste[i] = 'imes'
    } else if (teste[i] === 'a') {
      teste[i] = 'ai'
    } else if (teste[i] === 'o') {
      teste[i] = 'ober'
    } else if (teste[i] === 'u') {
      teste[i] = 'ufat'
    }
  }
  let juntar = teste.join('')
  result.value = juntar
}

function decrypt() {
  let texto = result.value
  let ufat = /ufat/gi
  let ober = /ober/gi
  let ai = /ai/gi
  let imes = /imes/gi
  let enter = /enter/gi

  let text = texto
    .replace(ufat, 'u')
    .replace(ober, 'o')
    .replace(ai, 'a')
    .replace(imes, 'i')
    .replace(enter, 'e')

  result.value = text
}

function copy() {
  navigator.clipboard.writeText(result.value)
}
