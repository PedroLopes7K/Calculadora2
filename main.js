let Num1 = document.getElementById('number1')
let Num2 = document.getElementById('number2')
let result = document.querySelector('.resultado')
let resultado = 0

let opcaoCalc = document.getElementById('calcOPT')
const btnCalc = document.querySelector('.calc')

btnCalc.addEventListener('click', calcular)

function calcular() {
  if (Num1.value == '' || Num2.value == '') {
    result.innerHTML = 'Insira todos os valores!'
  } else if (opcaoCalc.value == 'soma') {
    Soma(Num1, Num2)
    clear()
  } else if (opcaoCalc.value == 'subtracao') {
    Subtracao(Num1, Num2)
    clear()
  } else if (opcaoCalc.value == 'divisao') {
    Divisao(Num1, Num2)
    clear()
  } else if (opcaoCalc.value == 'multiplicacao') {
    Multiplicacao(Num1, Num2)
    clear()
  }
}

function Soma(number1, number2) {
  resultado = parseFloat(number1.value) + parseFloat(number2.value)
  result.innerHTML = ` Resultado: ${resultado}`
}

function Subtracao(number1, number2) {
  resultado = parseFloat(number1.value) - parseFloat(number2.value)
  result.innerHTML = ` Resultado: ${resultad}`
}

function Divisao(number1, number2) {
  resultado = parseFloat(number1.value) / parseFloat(number2.value)
  result.innerHTML = ` Resultado: ${resultado}`
}

function Multiplicacao(number1, number2) {
  resultado = parseFloat(number1.value) * parseFloat(number2.value)
  result.innerHTML = ` Resultado: ${resultado}`
}

function clear() {
  Num1.value = ''
  Num2.value = ''
}
