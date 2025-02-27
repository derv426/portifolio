

const Downloand = document.getElementById('cv-downloand').addEventListener('click', () => {
  const link = document.createElement('a')
  link.href = 'src/upload/ocurriculo-15df3e92-6891-49d3-ac35-d83c8f7986c9.pdf'
  link.downloand = 'curriculo-derv.pdf'
  link.target = '_blank'
  link.click()
})