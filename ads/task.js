document.addEventListener("DOMContentLoaded", function() {
    const rotators = document.querySelectorAll('.rotator__case');
    let currentIndex = 0;
  
    setInterval(() => {
      rotators.forEach(rotator => rotator.classList.remove('rotator__case_active'));
      rotators[currentIndex].classList.add('rotator__case_active');
      currentIndex = (currentIndex + 1) % rotators.length;
    }, 1000);
  });
  