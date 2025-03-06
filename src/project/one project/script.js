

let ClickCouter = 0

const button = document.getElementById('clickButton')
const Contador = document.getElementById('counter')

button.addEventListener('click', function(){
  ClickCouter++
  Contador.textContent = `Cliques: ${ClickCouter}`
})