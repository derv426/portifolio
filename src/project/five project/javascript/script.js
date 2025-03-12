const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');
const qrCodeInput = document.querySelector('#qr-form input');
const qrCodeIMG = document.querySelector('#qr-code img');

// Função para gerar o QR Code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value.trim()

  if(!qrCodeInputValue) return

  qrCodeBtn.textContent = 'Gerando QR Code...'
  qrCodeIMG.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}`

  qrCodeIMG.addEventListener('load', () => {
    container.classList.add('active')
    qrCodeBtn.textContent = 'Gerar QR Code'
  })

}

qrCodeBtn.addEventListener('click', () => {
  generateQrCode()
})


qrCodeInput.addEventListener('keydown', (event) => {
  if(event.code === 'Enter'){
    generateQrCode()
  }
})

qrCodeInput.addEventListener('keyup', () => {
  if(!qrCodeInput.value){
    generateQrCode()
    container.classList.remove('active')
    qrCodeBtn.textContent = 'Gerar QR Code'
  }
})