const insertValue = (num) => {
  const input = document.getElementById('input-value').value
  document.getElementById('input-value').value = input + num 
}

const calculate = () => {
    const input = document.getElementById('input-value').value
    document.getElementById('input-value').value = eval(input)
}