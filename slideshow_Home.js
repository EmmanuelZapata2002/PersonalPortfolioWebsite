// For the slideshows to occur
function imageSwap(classes) {
    classes.forEach(cls => {
      const elements = document.querySelectorAll("." + cls);
      let imageIndex = 0;
  
      // Initially hide all images
      elements.forEach(element => {
        element.style.display = "none";
      });
  
      // Function to change the image
      function changeImage() {
        elements[imageIndex].style.display = "none";
        imageIndex = (imageIndex + 1) % elements.length;
        elements[imageIndex].style.display = "block";
      }
  
      // Start displaying the first image after a brief delay
      setTimeout(() => {
        elements[0].style.display = "block";
        // Set interval for each class
        setInterval(changeImage, image_interval);
      }, 100); // Delay in milliseconds, adjust as needed
    });
  }
  
  // Array of all classes you want to include in the slideshow
  const classes = ["slider", "projects", "involvements"];
  const image_interval = 3500; // Interval for the slideshow
  
  // Initialize the slideshow for all classes
  imageSwap(classes);