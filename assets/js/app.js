

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
const Cv1 = document.getElementById("")


const showStep = (stepIndex) => {
  steps.forEach((step, index) => {
    step.classList.toggle('hidden', index !== stepIndex);
  });
  progressBar.style.width = `${(stepIndex + 1) * progressIncrement}%`;
};

btnNext1.addEventListener("click", () => {
  if (true) {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      
     

    }
  }
})
btnNext2.addEventListener("click", () => {
  if (true) {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      
   

    }
  }
})


btnNext3.addEventListener("click", () => {


  if (true) {
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
  if (true) {

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
    

     

    }
  }
});

btnNext5.addEventListener("click", () => {


  if (true) {

    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
     

      

    }
  }
})


btnNext6.addEventListener("click", () => {


  if (true) {
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
      

    }
  }
})

btnNext7.addEventListener("click", () => {


  if (true) {
  
    if (currentStep < steps.length - 1) {
      currentStep++;
      showStep(currentStep);
     
    }
  }
})

btnNext8.addEventListener("click", () => {


  if (true) {
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
  let inputOrigine = document.querySelector(".technical-skills ").cloneNode(true)
  inputOrigine.value =""
  let btnremove =document.createElement("button")
  btnremove.className = "text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  btnremove.textContent = "remove"
  btnremove.type = "button"
  let semiparent = document.createElement("div")
  semiparent.appendChild(inputOrigine)
  semiparent.appendChild(btnremove)
  technicalSkillsContainer.appendChild(semiparent);
  btnremove.addEventListener("click", ()=>{
    semiparent.remove()
  })
});
 



// Add Soft Skill input 
const addSoftSkillButton = document.getElementById('add-soft-skill');
const softSkillsContainer = document.getElementById('soft-skills');

addSoftSkillButton.addEventListener('click', () => {
  let inputOrigine = document.querySelector(".soft-skills").cloneNode(true)
  inputOrigine.value =""
  let btnremove = document.createElement("button")
  btnremove.className = "btnremove text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  btnremove.textContent = "remove"
  btnremove.type = "button"
  let semiparent = document.createElement("div")
  semiparent.appendChild(inputOrigine)
  semiparent.appendChild(btnremove)
  softSkillsContainer.appendChild(semiparent);
  btnremove.addEventListener("click", ()=>{
    semiparent.remove()
});})

// Add new input for languages
const form = document.getElementById('languages-form');
const addLanguageButton = document.getElementById('add-language');
const languagesContainer = document.getElementById('languages');


addLanguageButton.addEventListener('click', function () {
  // Create new language input field
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.className = 'language bg-gray-50 border  w-full my-2 border-gray-300 text-gray-900 text-sm rounded-lg';
  newInput.placeholder = 'Language';
  newInput.required = true;

  // Create new select for language level
  const newSelect = document.createElement('select');
  newSelect.className = 'language-level  block bg-gray-50 border w-full   mx-4 border-gray-300 text-gray-900 text-sm rounded-lg my-2';
  newSelect.required = true;


  const levels = ['Beginner', 'Intermediate', 'Advanced', 'Native'];
  levels.forEach(level => {
    const option = document.createElement('option');
    option.value = level;
    option.textContent = level;
    newSelect.appendChild(option);


  });
  let btnremove =document.createElement("button")
  btnremove.className = "text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  btnremove.textContent = "remove"
  btnremove.type = "button"
const divConetent = document.createElement("div")


 

  divConetent.appendChild(newInput);
  divConetent.appendChild(newSelect);
  divConetent.appendChild(btnremove);
  languagesContainer.appendChild(divConetent)
btnremove.addEventListener("click", ()=>{
  divConetent.remove()
})
  

})





 //add hobbies 
const addHobbyButton = document.getElementById('add-hobby');
const hobbiesContainer = document.getElementById('hobbies');
 

// Add new input  for hobbies
addHobbyButton.addEventListener('click', function () {
  // Create new hobby input  
 
  let inputOrigine = document.querySelector(".soft-skills").cloneNode(true)
  inputOrigine.value =""
  inputOrigine.placeholder="Hobbies"
  let btnremove = document.createElement("button")
  btnremove.className = "text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
  btnremove.textContent = "remove"
  btnremove.type = "button"
  let semiparent = document.createElement("div")
 
 
  semiparent.appendChild(inputOrigine)
  semiparent.appendChild(btnremove)
  hobbiesContainer.appendChild(semiparent);
  btnremove.addEventListener("click", ()=>{

    semiparent.remove()
  // Append new input to the container
  
})
})

 

// add input education 
const addEducationButton = document.getElementById('add-education');
const educationContainer = document.querySelector('.education');
const educationContainers = document.getElementById('education');
const labelEducation = document.querySelector(".labelEducation")
let count = 1
// Add new education fields
addEducationButton.addEventListener('click', function () {
count++
labelEducation.textContent = `Education ${count}`
const cloneEducation = educationContainers.cloneNode(true)
cloneEducation.removeAttribute("id")
let btnremove = document.createElement("button")
btnremove.className = "text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
btnremove.textContent = "remove"
btnremove.type = "button"
let semiparent = document.createElement("div")
semiparent.appendChild(labelEducation)
semiparent.appendChild(cloneEducation)
semiparent.appendChild(btnremove)
educationContainer.appendChild(semiparent)
btnremove.addEventListener("click", ()=>{
  count--
  semiparent.remove()
 

})
})



// Add new work experience
const addWorkExperienceButton = document.getElementById('add-work-experience');
const workExperienceContainer = document.getElementById('work-experience');
const workExperienceContainers = document.querySelector('.work-experience');
const labelExperience = document.querySelector(".labelExperience")
 

addWorkExperienceButton.addEventListener('click', function () {
  count++
  labelExperience.textContent = `Work Experience ${count}`
 const CertificationsOrigin = workExperienceContainers.cloneNode(true)
 let btnremove = document.createElement("button")
btnremove.className = "text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
btnremove.textContent = "remove"
btnremove.type = "button"
let semiparent = document.createElement("div")
semiparent.appendChild(labelEducation)
semiparent.appendChild(CertificationsOrigin)
semiparent.appendChild(btnremove)
workExperienceContainer.appendChild(semiparent)
btnremove.addEventListener("click", ()=>{
  count--
  semiparent.remove()
 

})
})

// Add new work Certifications
const addCertificationsButton = document.getElementById('add-certification');
const CertificationsContainer = document.getElementById('certifications');
const CertificationsContainers = document.querySelector('.certifications');
const labelCertification = document.querySelector(".labelCertification")
 

addCertificationsButton.addEventListener('click', function () {
   count++
   labelCertification.textContent = `Certification ${count}`
 const Certificationsorigin = CertificationsContainers.cloneNode(true)
 let btnremove = document.createElement("button")
btnremove.className = "text-white  bg-Red hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
btnremove.textContent = "remove"
btnremove.type = "button"
let semiparent = document.createElement("div")
semiparent.appendChild(labelEducation)
semiparent.appendChild(Certificationsorigin)
semiparent.appendChild(btnremove)
CertificationsContainer.appendChild(semiparent)
btnremove.addEventListener("click", ()=>{
  count--
  semiparent.remove()
 

})
})





 
 
 
