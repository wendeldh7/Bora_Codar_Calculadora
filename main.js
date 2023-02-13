let input = document.getElementById('countOperation')
let result = document.getElementById('result')
const copy = document.querySelector('.copy')
const tooltip = document.querySelector('.tooltip')

document.querySelectorAll('.charKey').forEach(function (charBtn) {
  charBtn.addEventListener('click', () => {
    const value = charBtn.dataset.value
    input.value += value
  })
})

document.getElementById('clear').addEventListener('click', () => {
  input.value = ''
  result.innerText = ''
  copy.classList.remove('active')
  result.classList.remove('active')
  tooltip.classList.remove('active')

})

document.getElementById('back').addEventListener('click', backspace)

document.getElementById('equal').addEventListener('click', calculator)

copy.addEventListener('click', copyResult)

function backspace() {
  let resultado = document.getElementById('countOperation').value
  document.getElementById('countOperation').value = resultado.substring(
    0,
    resultado.length - 1
  )
}

function calculator() {
  const countResult = eval(input.value)

  result.innerText = countResult
  input.value = ''
  copy.classList.remove('active')
  result.classList.remove('active')
  tooltip.classList.remove('active')
}

function copyResult() {
  if (result.innerText.length === 0) {
    copy.classList.remove('active')
  } else {
    copy.classList.add('active')
    result.classList.add('active')
    tooltip.classList.add('active')
  }

  navigator.clipboard.writeText(result.innerText);
}


