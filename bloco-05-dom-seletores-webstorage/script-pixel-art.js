// botão limpar cores - requisito 9
function clearButton() {
    const button = document.querySelector('#clear-board');
    let backgroundSquare = randomColor();
    const newBackgroundColor = 'white';
  
    button.addEventListener('click', () => {
      for (let index = 0; index < button.length; index += 1) {
        if (button[index].style.backgroundSquare !== newBackgroundColor) {
          backgroundSquare = newBackgroundColor;
        }
        return backgroundSquare;
      }
    });
  }
  clearButton();
  