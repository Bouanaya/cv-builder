let currentStep = 0;
const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const nextButtons = document.querySelectorAll('[id^="next-"]');
const prevButtons = document.querySelectorAll('[id^="prev-"]');
const progressIncrement = 100 / steps.length;
var data = []
// //      // Form data  DataInformationpersonnel
 const DataInformationpersonnel=()=>{
  const fullName = document.getElementById('full-name').value;
  const profilePicture = document.getElementById('profile-picture').files[0];
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;

  const formData = {
      fullName,
      profilePicture,
      email,
      phone,
      website,
      linkedin,
      github
  };

  data.push(formData)
  console.log(data);
  
}



const showStep = (stepIndex) => {
    steps.forEach((step, index) => {
        step.classList.toggle('hidden', index !== stepIndex);
    });
    progressBar.style.width = `${(stepIndex + 1) * progressIncrement}%`;
};

nextButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (validateForm()) {
            if (currentStep < steps.length - 1) {
                currentStep++;
                showStep(currentStep);
                DataInformationpersonnel()
            }
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

 
 