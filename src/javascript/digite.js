

const text = 'Desenvolvedor WEB'
let index = 0
const speed = 100
const elemento = document.getElementById('paragraph-dev-web')

function DigiteType(){
  if(index < text.length){
    elemento.textContent += text.charAt(index); index++;
    setTimeout(DigiteType, speed)
  } else{
  setTimeout(DigiteReset, 1000)
  }
}

function DigiteReset(){
  elemento.textContent = ''
  index = 0
  DigiteType()
}

DigiteType()