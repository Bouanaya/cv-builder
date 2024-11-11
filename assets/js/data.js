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
  const TechnicalSkills = Array.from(document.querySelectorAll(".technical-skills"))
  const softSkills = Array.from(document.querySelectorAll(".soft-skills"))
  //langauge
  const language = Array.from(document.querySelectorAll(".language"))
  const languagelevel= Array.from(document.querySelectorAll(".language-level")) 
  //hobbies
  const hobbies = Array.from(document.querySelectorAll(".hobbies"))
  //education
  const education = Array.from(document.querySelectorAll(".education"))
  const degree = Array.from(document.querySelectorAll(".degree"))
  const field = Array.from(document.querySelectorAll(".field"))
  const years  = Array.from(document.querySelectorAll(".years"))
  const 
  // softand tech 
  tech = TechnicalSkills.map(x=>x.value)
  soft = softSkills.map(x=>x.value)
  //language
  lang = language.map(x=>x.value)
  langlevel = languagelevel.map(x=>x.value)
//hobbies
  hobby = hobbies.map(x=>x.value)
  //Education 
  educate = education.map(x=>x.value)
  degreEduacation = degree.map(x=>x.value)
  stady = field.map(x=>x.value)
  educationYears = years.map(x=>x.value)

  
 

  
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
    tech,
    soft,
    lang,
    langlevel,
    hobby,
    educate,
    degreEduacation,
    stady,
    educationYears
    
    

  };

  data.push(formData)
  
  console.log(data);

}
