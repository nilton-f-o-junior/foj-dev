function copyCode(button) {

  const container = button.closest('.code-container');
  const code = container.querySelector('code').innerText;


  navigator.clipboard.writeText(code).then(() => {

    button.innerText = "✓ Copiado";
    button.classList.add('copied');


    setTimeout(() => {
      button.innerText = "Copiar";
      button.classList.remove('copied');
    }, 2000);
  }).catch(err => {

    console.error('Erro ao copiar:', err);
    button.innerText = "Erro";
    setTimeout(() => {
      button.innerText = "Copiar";
    }, 2000);
  });
}
