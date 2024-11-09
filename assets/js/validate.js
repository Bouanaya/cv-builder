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

const valtechnicalSkills = () => {



    const technicalSkills = document.querySelectorAll('input[name="technical-skills[]"]');
    const softSkills = document.querySelectorAll('input[name="soft-skills[]"]');


    const hasTechnicalSkill = Array.from(technicalSkills).some(input => input.value.trim() !== '');
    const hasSoftSkill = Array.from(softSkills).some(input => input.value.trim() !== '');


    if (!hasTechnicalSkill) {

        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please add at least one technical skill!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
        return;
    }

    if (!hasSoftSkill) {
        return true
    }


};
