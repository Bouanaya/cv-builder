

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
const btnNext8 = document.querySelector("#next-8")
const progressIncrement = 100 / steps.length;
var data = []
// //      // Form data  DataInformationpersonnel
const DataInformationpersonnel = () => {
  const fullName = document.getElementById('full-name').value;
  const profilePicture = document.getElementById('profile-picture').files[0];
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;
  const jobTitle = document.getElementById("job-title").value
  const editor = document.getElementById('editor').value
 
 
 
 





  const formData = {
    fullName,
    profilePicture,
    email,
    phone,
    website,
    linkedin,
    github,
    jobTitle,
    editor,
    
 
    
     


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

btnNext1.addEventListener("click", () => {
  if (PersonalInformation()) {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
     

    }
  }
})
btnNext2.addEventListener("click", () => {
  if (JobTitlevalidation()) {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    

    }
  }
})


btnNext3.addEventListener("click", () => {


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

btnNext4.addEventListener("click", () => {
  if (validlanguage()) {

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      DataInformationpersonnel()

     

    }
  }
});

btnNext5.addEventListener("click", () => {


  if (validhobbies()) {

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      DataInformationpersonnel()

    }
  }
})


btnNext6.addEventListener("click", () => {


  if (validEducation()) {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);

    }
  }
})

btnNext7.addEventListener("click", () => {


  if ("valid") {
  
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);

    }
  }
})

btnNext8.addEventListener("click", () => {


  if ("valid") {
    console.log('next8');
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);

    }
  }
})
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

// Add new input for languages
const form = document.getElementById('languages-form');
const addLanguageButton = document.getElementById('add-language');
const languagesContainer = document.getElementById('languages');


addLanguageButton.addEventListener('click', function () {
  // Create new language input field
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'language[]';
  newInput.className = 'bg-gray-50 border  w-full my-2 border-gray-300 text-gray-900 text-sm rounded-lg';
  newInput.placeholder = 'Language';
  newInput.required = true;

  // Create new select for language level
  const newSelect = document.createElement('select');
  newSelect.name = 'language-level[]';
  newSelect.className = 'block bg-gray-50 border w-full   mx-4 border-gray-300 text-gray-900 text-sm rounded-lg my-2';
  newSelect.required = true;


  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Native'];
  levels.forEach(level => {
    const option = document.createElement('option');
    option.value = level;
    option.textContent = level;
    newSelect.appendChild(option);


  });

  languagesContainer.appendChild(newInput);
  languagesContainer.appendChild(newSelect);

})





 //add hobbies 
const addHobbyButton = document.getElementById('add-hobby');
const hobbiesContainer = document.getElementById('hobbies');

// Add new input  for hobbies
addHobbyButton.addEventListener('click', function () {
  // Create new hobby input  
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'hobbies[]';
  newInput.className = 'bg-gray-50 w-full border mb-2 border-gray-300 text-gray-900 text-sm rounded-lg';
  newInput.placeholder = 'Hobby';
  newInput.required = true;

  // Append new input to the container
  hobbiesContainer.appendChild(newInput);
})

 

// add input education 
const addEducationButton = document.getElementById('add-education');
const educationContainer = document.getElementById('education');
var count = 0
// Add new education fields
addEducationButton.addEventListener('click', function () {
  const newFields = document.createElement('div');
  count++
  newFields.innerHTML = `
           <label
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Education ${count}</label
              <input
                type="text"
                name="institution[]"
                class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Institution"
                required
              />
              <input
                type="text"
                name="degree[]"
                class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Degree"
                required
              />
              <input
                type="text"
                name="field[]"
                class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Field of Study"
                required
              />
              <input
                type="text"
                name="years[]"
                class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Years"
                required
              />
          `;
  educationContainer.appendChild(newFields);
})



// Add new work experience
const addWorkExperienceButton = document.getElementById('add-work-experience');
const workExperienceContainer = document.getElementById('work-experience');
addWorkExperienceButton.addEventListener('click', function () {
  const newFields = document.createElement('div');
  newFields.classList.add('work-experience-entry');

  newFields.innerHTML = `
        <input
          type="text"
          name="job-title[]"
          class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Job Title"
          required
        />
        <input
          type="text"
          name="company[]"
          class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Company"
          required
        />
        <input
          type="text"
          name="years[]"
          class="bg-gray-50 border border-gray-300 mb-2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Years"
          required
        />
    `;
  workExperienceContainer.appendChild(newFields);
})
