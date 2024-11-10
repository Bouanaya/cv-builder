function PersonalInformation() {
    let isValid = true;

    // Full Name validation
    const fullName = document.getElementById('full-name');
    const fullNameError = document.getElementById('full-name-error');
    if (fullName.value.trim() === '') {
        fullNameError.classList.remove('hidden');
      
        isValid = false;
    } else {
        fullNameError.classList.add('hidden');
    }

    // Profile Picture validation
    const profilePicture = document.getElementById('profile-picture');
    const profilePictureError = document.getElementById('profile-picture-error');
    if (profilePicture.files.length === 0) {
        profilePictureError.classList.remove('hidden');
         

        isValid = false;
    } else {
        profilePictureError.classList.add('hidden');
    }

    // Email validation
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        emailError.classList.remove('hidden');
        
        
        isValid = false;
    } else {
        emailError.classList.add('hidden');
    }

    // Phone validation
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phonePattern = /^[0-9]{3}-[0-9]{2}-[0-9]{3}$/;
    if (!phonePattern.test(phone.value)) {
        phoneError.classList.remove('hidden');
       

        isValid = false;
    } else {
        phoneError.classList.add('hidden');
    }

    // Website URL validation
    const website = document.getElementById('website');
    const websiteError = document.getElementById('website-error');
    if (website.value.trim() === '') {
        websiteError.classList.remove('hidden');
      

        isValid = false;
    } else {
        websiteError.classList.add('hidden');
    }

    // LinkedIn URL validation
    const linkedin = document.getElementById('linkedin');
    const linkedinError = document.getElementById('linkedin-error');
    if (linkedin.value.trim() === '') {
        linkedinError.classList.remove('hidden');
         
        isValid = false;
    } else {
        linkedinError.classList.add('hidden');
    }

    // GitHub URL validation
    const github = document.getElementById('github');
    const githubError = document.getElementById('github-error');
    if (github.value.trim() === '') {
        githubError.classList.remove('hidden');
      
        
        isValid = false;
    } else {
        githubError.classList.add('hidden');
    }

    return isValid;
}
// Job Title validation
const JobTitlevalidation = () => {
    let isValid = true;
    const jobTitle = document.getElementById('job-title');
    const jobTitleError = document.getElementById('job-title-error');
    if (jobTitle.value.trim() === '') {
        jobTitleError.classList.remove('hidden');
        isValid = false;
    } else {
        jobTitleError.classList.add('hidden');
    }

    // Editor (textarea) validation
    const editor = document.getElementById('editor');
    const editorError = document.getElementById('editor-error');
    if (editor.value.trim() === '') {
        editorError.classList.remove('hidden');
        isValid = false;
    } else {
        editorError.classList.add('hidden');
    }
    return isValid;
}

// add skills technical

const valtechnicalSkills = () => {
    
    const technicalSkills = document.querySelectorAll('input[name="technical-skills[]"]');
    const softSkills = document.querySelectorAll('input[name="soft-skills[]"]');

    // Check if there is any value in the technical skills input
    let hasTechnicalSkill = false;
    for (let input of technicalSkills) {
        if (input.value.trim() !== '') {
            hasTechnicalSkill = true;
            data.push({"TechnicalSkill" : input.value})
            break;
        }
    }

    // Check if there is any value in the soft skills input
    let hasSoftSkill = false;
    for (let input of softSkills) {
        if (input.value.trim() !== '') {
            hasSoftSkill = true;
            data.push({"SoftSkill" : input.value})
            break;
        }
    }

    // If no technical skills are provided, show an error message
    if (!hasTechnicalSkill) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please add at least one technical skill!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return false; 
    }

   
    return true;
};

const validlanguage = () => {
    // Get  language inputs
    const languages = document.querySelector('input[name="language"]');
    const languagelevel = document.querySelector('#language-level')
    // Alert if no language is entered
    if (languages.value.trim() === "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please add at least one language !",
            footer: '<a href="#">Why do I have this issue?</a>'
        });

        return;
    }
    data.push({languages:languages.value , languagelevel :languagelevel.value})
    
    return true;
}
const validhobbies = () => {
    // Get  language inputs
    const hobbies = document.querySelectorAll('input[name="hobbies[]"]');
    let allFilled = true;
hobbies.forEach(hobbies=>{
 // Alert if no language is entered
 if (hobbies.value.trim() === "") {
    allFilled = false;
   
 }
 
});
if (!allFilled) {
       
  Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please add at least one hobbies !",
        footer: '<a href="#">Why do I have this issue?</a>'
    });
    return validhobbies
}

return true

}
 
 

const validEducation = () => {
    const allInputs = document.querySelectorAll('#education input');
    let allFilled = true;

    allInputs.forEach(input => {
        if (input.value.trim() === '') {
            allFilled = false;
        }
    });

    if (!allFilled) {
       
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please fill out all education fields.!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    } else {
        Swal.fire({
            icon: "success",
            title: "Oops...",
            text: "you education has been saved!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
      return true
    }

}
