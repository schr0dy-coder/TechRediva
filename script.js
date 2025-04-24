document.addEventListener('DOMContentLoaded', function() {
  // Wait for 1 second to show the logo
  const backgroundMusic = document.getElementById('backgroundMusic');
  
  // Set volume and try to play
  backgroundMusic.volume = 1.0;
  
  // Fix the audio source if needed
  // If the file is in the same directory as index.html
  const audioSource = backgroundMusic.querySelector('source');
  audioSource.type = 'audio/wav'; // Correct MIME type
  
  // Handle autoplay restrictions
  backgroundMusic.play().catch(function(error) {
    console.log("Audio autoplay prevented: ", error);
    // Add a button or enable play on first interaction
    document.addEventListener('click', function() {
      backgroundMusic.play();
    }, {once: true});
  });
  
  setTimeout(function() {
    // Get animation elements
    const redText = document.querySelector('.red-text');
    const ivaText = document.querySelector('.iva-text');
    const loadingScreen = document.getElementById('loadingAnimation');
    
    // Apply animations
    redText.style.animation = 'moveRed 1s forwards';
    ivaText.style.animation = 'moveIva 1s forwards';
    
    // After animations complete, fade out the loading screen
    setTimeout(function() {
      loadingScreen.style.animation = 'fadeIn 0.5s forwards';
    }, 1000);
  }, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
  // Get the container element
  const container = document.querySelector('.container-new');
  
  // Set initial style
  container.style.opacity = "0";
  
  // After 2 seconds, start showing the container
  setTimeout(function() {
    container.style.opacity = "1";
  }, 2000);
});