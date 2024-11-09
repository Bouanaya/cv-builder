 
    const steps = Array.from(document.querySelectorAll('.step'));
    const nextButtons = Array.from(document.querySelectorAll('button[id^="next-"]'));
    const prevButtons = Array.from(document.querySelectorAll('button[id^="prev-"]'));
    const progressBar = document.getElementById('progress-bar');
    const progressIncrement = 100 / steps.length;
    
    let currentStep = 0;
  
    const showStep = (stepIndex)=> {
      steps.forEach((step, index) => {
        step.classList.toggle('hidden', index !== stepIndex);
      });
      progressBar.style.width = `${(stepIndex + 1) * progressIncrement}%`;
    }
  
    nextButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      });
    });
  
    prevButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      });
    });
  
    showStep(currentStep);
 
  