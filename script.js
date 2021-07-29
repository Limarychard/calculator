const insertValue = (num) => {
  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = input + num
}

const calculate = () => {
  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = eval(input)
}

const clearInput = () => {
  document.getElementById('input-value').value = " "
}

const invertValue = () => {
  calculate()

  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = input * -1
}

const percent = (num) => {
  calculate()

  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = eval(input) / 100
}