 

let currentStep = 0;
const steps = document.querySelectorAll('.step');
const progressBar = document.getElementById('progress-bar');
const nextButtons = document.querySelectorAll('[id^="next-"]');
const prevButtons = document.querySelectorAll('[id^="prev-"]');
const btnNext1 = document.querySelector("#next-1")
const btnNext2 = document.querySelector("#next-2")
const btnNext3 = document.querySelector("#next-3")
const btnNext4 = document.querySelector("#next-4")
const btnNext5 = document.querySelector("#next-5")
const btnNext6 = document.querySelector("#next-6")
const btnNext7 = document.querySelector("#next-7")
const submitforms = document.querySelector("#submit")
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

btnNext1.addEventListener("click", ()=>{
  if (PersonalInformation()) {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
        DataInformationpersonnel()
    }
}
})
btnNext2.addEventListener("click", ()=>{
  if (JobTitlevalidation()) {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
       
    }
}
})


btnNext3.addEventListener("click", ()=>{
 
  
  if (valtechnicalSkills()) {
    console.log('next3');
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
       
    }
}
})

prevButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });
});

showStep(currentStep);


// Add Technical Skill input  
const addTechnicalSkillButton = document.getElementById('add-technical-skill');
const technicalSkillsContainer = document.getElementById('technical-skills');

addTechnicalSkillButton.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'technical-skills[]';
    newInput.className = 'bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    technicalSkillsContainer.appendChild(newInput);
});

// Add Soft Skill input 
const addSoftSkillButton = document.getElementById('add-soft-skill');
const softSkillsContainer = document.getElementById('soft-skills');

addSoftSkillButton.addEventListener('click', () => {
    const newInput = document.createElement('input');
    newInput.type = 'text';
    newInput.name = 'soft-skills[]';
    newInput.className = 'bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    softSkillsContainer.appendChild(newInput);
});



 
 