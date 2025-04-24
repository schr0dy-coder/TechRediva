document.addEventListener('DOMContentLoaded', function () {
  // Wait for 1 second to show the logo
  setTimeout(function () {
    const redText = document.querySelector('.red-text');
    const ivaText = document.querySelector('.iva-text');
    const loadingScreen = document.getElementById('loadingAnimation');

    redText.style.animation = 'moveRed 1s forwards';
    ivaText.style.animation = 'moveIva 1s forwards';

    // After animations complete, fade out the loading screen
    setTimeout(function () {
      loadingScreen.style.animation = 'fadeIn 0.5s forwards';
    }, 1000);
  }, 1000);

  // Show the container after fade-out
  const container = document.querySelector('.container-new');
  container.style.opacity = '0';
  setTimeout(function () {
    container.style.opacity = '1';
  }, 2000);
});
