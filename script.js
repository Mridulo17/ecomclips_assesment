const videoContainer = document.querySelector('.video-container');
    const pipContainer = document.getElementById('pipContainer');
    const pipVideo = document.getElementById('pipVideo');
    const iframe = videoContainer.querySelector('iframe');

    // Function to enter PiP mode

    

    function enterPiP() {
      pipContainer.style.display = 'block';
    }

    // Function to exit PiP mode
    function closePiP() {
      pipContainer.style.display = 'none';
    }

    // Event listener to detect when the video is out of the viewport
    window.addEventListener('scroll', () => {
      const videoRect = videoContainer.getBoundingClientRect();
      if (videoRect.bottom < 0 || videoRect.top > window.innerHeight) {
        enterPiP();
      } else {
        closePiP();
      }
    });