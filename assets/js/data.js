const container = document.querySelector(".container")
let data = []
const formData = {}
const DataInformationpersonnel = () => {
  const fullName = document.getElementById('full-name').value;
  const profilePicture = document.getElementById('profile-picture').files[0];
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;
  const jobTitle = document.getElementById("job-title").value
  const editor = quill.root.innerHTML
  const TechnicalSkills = Array.from(document.querySelectorAll(".technical-skills"))
  const softSkills = Array.from(document.querySelectorAll(".soft-skills"))
  //langauge
  const language = Array.from(document.querySelectorAll(".language"))
  const languagelevel = Array.from(document.querySelectorAll(".language-level"))
  //hobbies
  const hobbies = Array.from(document.querySelectorAll(".hobbies"))
  //education
  const education = Array.from(document.querySelectorAll(".education"))
  const degree = Array.from(document.querySelectorAll(".degree"))
  const field = Array.from(document.querySelectorAll(".field"))
  const years = Array.from(document.querySelectorAll(".years"))
  //experience work
  const titleExperience = Array.from(document.querySelectorAll(".job-title "))
  const companyExperience = Array.from(document.querySelectorAll(".company"))
  const yearsExperience = Array.from(document.querySelectorAll(".years")) 
  const messageExperience = Array.from(document.querySelectorAll(".message"))
  // softand tech 
  tech = TechnicalSkills.map(x => x.value)
  formData.tech = tech
  soft = softSkills.map(x => x.value)
  formData.soft = soft

  //language
  lang = language.map(x => x.value)

  langlevel = languagelevel.map(x => x.value)
  formData.lang = {}
  lang.forEach((e, i) => { formData.lang[e] = langlevel[i] })

  //hobbies
  hobby = hobbies.map(x => x.value)
  formData.hobby = hobby


  //Education 

  educate = education.map(x => x.value)
  formData.education = educate
  degreEduacation = degree.map(x => x.value)
  formData.degreEduacation = degreEduacation
  stady = field.map(x => x.value)
  formData.stady = stady
  educationYears = years.map(x => x.value)
  formData.educationYears = educationYears

  let educationdata = []
  let educationdatas = {}
  for (let i = 0; i < educate.length; i++) {
    educationdata.push(
      educationdatas = {
        educat: educate[i],
        degreEduacation: degreEduacation[i],
        stady: stady[i],
        educationYears: educationYears[i]
      }
    )

  }


  //experience
  exepriencetitle = titleExperience.map(x => x.value)
  companyExper = companyExperience.map(x => x.value)
  yersExperiences = yearsExperience.map(x=> x.value)
  messageExperiences =  messageExperience.map(x=>x.value)
  
  
  let exepriencall = []
  let educationdataz = {}
  for (let i = 0; i < exepriencetitle.length; i++) {
    exepriencall.push(
      educationdataz = {
        title: exepriencetitle[i],
        company: companyExper[i],
        yers: yersExperiences[i],
        content: messageExperiences[i]
      }
    )
  
  }
 
  ///certification 

  const certification  = Array.from(document.querySelectorAll(".certification "))
  const certificationlink = Array.from(document.querySelectorAll(".certification-link "))
  let certificationData = []
  let certifications ={}

 for (let i = 0; i < certification.length; i++) {
  certifications={
    certification :certification[i].value,
    certificatlink: certificationlink[i].value
  }
  certificationData.push(certifications)

  
  
 }


  let profilePictures = URL.createObjectURL(profilePicture);
  const CV1 = document.querySelector(".CV1")
  CV1.innerHTML = `<div class='content'>
  <div class="cv  shadow-lg mt-6 bg-white  relative grid grid-cols-3 gap-8 w-full mx-auto max-w-screen-lg p-8 rounded-lg">
    
        <!-- Left Column: Personal Information & Contact -->
        <div class="flex flex-col gap-4 p-6 py-7 col-span-1 bg-slate-50 rounded-lg shadow-md  "  >
          
          <img class="object-cover aspect-square max-w-[212px] max-h-[212px] border-white border-8 mx-auto" id="blah" src="${profilePictures}"  alt="Leslie Knope's profile image">
          
          <div class="text-center">
            <h2 class="text-primary text-xl uppercase font-bold tracking-wide  ">${fullName}</h2>
            <h3 class="text-base uppercase mb-1 font-bold">${jobTitle}</h3>
          </div>
    
          <section class="cv__section">
            <h4 class="cv__section-title">Contact</h4>
            <div class="flex flex-col gap-3">
              <div class="cv__icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
</svg>

                <a href="mailto:lknope@parksdept.com" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${email}</a>
              </div>
             
               <div class="cv__icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>
                <a href="tel:317-660-2160" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${phone}</a>
              </div>
               <div class="cv__icon-wrapper">
                  <img src="../icons/internet.svg" alt="">
               
                <a href="tel:317-660-2160" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${website}</a>
              </div>
               <div class="cv__icon-wrapper">
                  <img src="../icons/linkden.svg" alt="">

                <a href="tel:317-660-2160" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${linkedin}</a>
              </div>
              <div class="cv__icon-wrapper">
                  <img src="../icons/linkden.svg" alt="">
          
                <a href="tel:317-660-2160" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${github}</a>
              </div>
            </div>
          </section>
    
          <section class="cv__section flex flex-col gap-6">
            <h4 class="sr-only">Compétences / Interests</h4>
            
            <!-- Technical Skills -->
            <section class="cv__section">
              <h3 class="capitalize cv__section-title">Technical Skills</h3>
              <ul class="font-light cv__tags">
                ${formData.tech.map(item =>
    `<li class="cv__tag">${item}</li>`
  ).join("")}
              </ul>
            </section>
    
            <!-- Soft Skills -->
            <section class="cv__section">
              <h3 class="capitalize cv__section-title">Soft Skills</h3>
              <ul class="font-light cv__list">
                ${formData.soft.map(item =>
    `<li>${item}</li>`
  ).join("")}
              </ul>
            </section>
    
            <!-- Languages -->
            <section class="cv__section">
              <h3 class="capitalize cv__section-title">Languages</h3>
              <ul class="">
                ${(function () {
      let content = ''
      for (const key in formData.lang) {
        content += `<li class="flex justify-between pr-4">
                     <span>${key}</span>
                     <span class="font-light">${formData.lang[key]}</span>
                   </li>`
      }
      return content
    }
    )()
    }
              
              </ul>
            </section>
    
            <!-- Interests -->
            <section class="cv__section">
              <h3 class="capitalize cv__section-title">hobbies</h3>
              <ul class="font-light cv__list">

              ${formData?.hobby?.map(item =>
      `<li>${item}</li>`
    ).join("")}
              </ul>

            </section>
          </section>
        </div>
    
        <!-- Right Column: Main Section -->
        <div class="pr-8 pl-5 py-8 col-span-2">
          
          <!-- About Me Section -->
          <section class="cv__section cv__section--main text-wrap ">
            <h4 class="cv__section-title cv__section-title--main">About Me</h4>
            <p class="font-light  ">
             ${editor}
            </p>
          </section>
          
          <hr class="cv__bar">
    
          <!-- Experience Section -->
          <section class="cv__section cv__section--main w-full">
            <h4 class="cv__section-title cv__section-title--main">Experience</h4>
            <ul class="cv__event">
            ${
              exepriencall.map(x=>
`
  <li>
                <div class="grid grid-cols-3 gap-3">
                  <h5 class="cv__section-title cv__section-title--sm">${x.title}</h5>
                  <span class="justify-self-center">${x.company}</span>
                  <span class="justify-self-end">${x.yers}</span>
                </div>
                <div class="cv__desc">
                  <ul>
                    <li>${x.content}</li>
                  </ul>
                </div>
              </li>
`

              ).join("")
              
            }
            
               
            </ul>
          </section>
    
          <hr class="cv__bar">
    
          <!-- Education Section -->
          <section class="cv__section cv__section--main w-full">
            <h4 class="cv__section-title cv__section-title--main">Education</h4>
            <ul class="cv__event">
            ${educationdata.map(x =>
      `<li>
                <div class="gap-3 flex justify-between">
                  <h5 class="cv__section-title cv__section-title--sm">${x.educat}</h5>
                  <span class="justify-self-center">${x.educationYears}</span>
                </div>
                <div class="cv__desc">
                  <ul>
                    <li>${x.degreEduacation}</li>
                    <li>${x.stady}</li>
                  </ul>
                </div>`
    ).join('')
    }
              
              </li>
            </ul>
          </section>
    
          <hr class="cv__bar">
    
          <!-- Projects Section -->
          <section class="cv__section cv__section--main w-full">
            <h4 class="cv__section-title cv__section-title--main">Certification</h4>
            <ul class="cv__event">
            ${
              certificationData.map(x=>
                `
                <li>
                <div class="flex justify-between">
                  <h5 class="cv__section-title cv__section-title--sm flex gap-2 w-full justify-between">
                    <span>Lot 48</span>
                  </h5>
                </div>
                <a class="w-fit flex items-center font-medium italic text-indigo-600 hover:text-indigo-800" rel="noopener" href="https://www.pawnee.gov" aria-label="Open project in new tab">
                  City of Pawnee, Indiana <svg class="ml-1 size-4"><use href=""></use></svg>
                </a>
                <div class="cv__desc">
                  <ul>
                    <li>${x.certification}</li>
                    <li>${x.certificationlink}</li>

                    
                  </ul>
                </div>
              </li>
                
                `



              ).join("")
            }
              
            </ul>
          </section>
        </div>
         
        </div>
        <div>
<div class="flex justify-center">
 <button type="button" class="flex items-center my-4 font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  gap-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        print  
          </button>
           <button type="button" onclick='generatePDF()' class="flex items-center my-4 font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  gap-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        telecharger pdf
          </button>
</div>
</div>
</div>`



}

const datainfocv2 = () => {
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const website = document.getElementById('website').value;
  const linkedin = document.getElementById('linkedin').value;
  const github = document.getElementById('github').value;
  const jobTitle = document.getElementById("job-title").value
  const editor = document.getElementById('my-textarea').value
  const TechnicalSkills = Array.from(document.querySelectorAll(".technical-skills"))
  const softSkills = Array.from(document.querySelectorAll(".soft-skills"))
  //langauge
  const language = Array.from(document.querySelectorAll(".language"))
  const languagelevel = Array.from(document.querySelectorAll(".language-level"))
  //hobbies
  const hobbies = Array.from(document.querySelectorAll(".hobbies"))
  //education
  const education = Array.from(document.querySelectorAll(".education"))
  const degree = Array.from(document.querySelectorAll(".degree"))
  const field = Array.from(document.querySelectorAll(".field"))
  const years = Array.from(document.querySelectorAll(".years"))
  //experience work
  const titleExperience = Array.from(document.querySelectorAll(".job-title "))
  const companyExperience = Array.from(document.querySelectorAll(".company"))
  const yearsExperience = Array.from(document.querySelectorAll(".years")) 
  const messageExperience = Array.from(document.querySelectorAll(".message"))
  // softand tech 
  tech = TechnicalSkills.map(x => x.value)
  formData.tech = tech
  soft = softSkills.map(x => x.value)
  formData.soft = soft

  //language
  lang = language.map(x => x.value)

  langlevel = languagelevel.map(x => x.value)
  formData.lang = {}
  lang.forEach((e, i) => { formData.lang[e] = langlevel[i] })

  //hobbies
  hobby = hobbies.map(x => x.value)
  formData.hobby = hobby


  //Education 

  educate = education.map(x => x.value)
  formData.education = educate
  degreEduacation = degree.map(x => x.value)
  formData.degreEduacation = degreEduacation
  stady = field.map(x => x.value)
  formData.stady = stady
  educationYears = years.map(x => x.value)
  formData.educationYears = educationYears

  let educationdata = []
  let educationdatas = {}
  for (let i = 0; i < educate.length; i++) {
    educationdata.push(
      educationdatas = {
        educat: educate[i],
        degreEduacation: degreEduacation[i],
        stady: stady[i],
        educationYears: educationYears[i]
      }
    )

  }







  //experience
  exepriencetitle = titleExperience.map(x => x.value)
  companyExper = companyExperience.map(x => x.value)
  yersExperiences = yearsExperience.map(x=> x.value)
  messageExperiences =  messageExperience.map(x=>x.value)
  
  
  let exepriencall = []
  let educationdataz = {}
  for (let i = 0; i < exepriencetitle.length; i++) {
    exepriencall.push(
      educationdataz = {
        title: exepriencetitle[i],
        company: companyExper[i],
        yers: yersExperiences[i],
        content: messageExperiences[i]
      }
    )
  
  }
///certification 
  const certification  = Array.from(document.querySelectorAll(".certification "))
  const certificationlink = Array.from(document.querySelectorAll(".certification-link "))
  let certificationData = []
  let certifications ={}

 for (let i = 0; i < certification.length; i++) {
  certifications={
    certification :certification[i].value,
    certificatlink: certificationlink[i].value
  }
  certificationData.push(certifications)

  
  
 }

 
console.log(certificationData);



  const CV2 = document.querySelector(".CV2")
  CV2.innerHTML = `
<div class="bg font-sans ">
  <div class="container mx-auto py-8 px-4">
        <div class="bg-white p-6 rounded-lg shadow-lg content "  >
            <h1 class="text-3xl font-semibold">${fullName}</h1>
            <p class="text-gray-600">${jobTitle}</p>

            <hr class="my-4">

            <h2 class="text-xl font-semibold mb-2">Summary</h2>
            <p class="text-gray-700">${editor}</p>

            <h2 class="text-xl font-semibold mt-4 mb-2">Skills</h2>
            <ul class="list-disc list-inside text-gray-700">
                  ${formData.soft.map(item =>
    `<li>${item}</li>`
  ).join("")}
            </ul>

            <h2 class="text-xl font-semibold mt-4 mb-2">Experience</h2>
            <div class="mb-4">
            ${
              exepriencall.map(x=>
                `
                 <h3 class="text-lg font-semibold">${x.title} - ${x.yers}</h3>
                <p class="text-gray-700">${x.company}
                </p>
                <p class="text-gray-600">${x.content}</p>
                `
              )
            }
               
            </div>

            <div class="mb-4">
                <h3 class="text-lg font-semibold">Frontend Developer, XYZ Agency</h3>
                <p class="text-gray-700">Worked on various client projects, translating design mockups into interactive
                    web pages. Utilized modern web technologies to ensure cross-browser compatibility.</p>
                <p class="text-gray-600">June 2018 - December 2019</p>
            </div>

            <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
            <div class="mb-4 ">
       ${educationdata.map(x =>

    `<h3 class="text-lg font-semibold">${x.educat}</h3>
                <p class="text-gray-700">${x.degreEduacation}</p>
                <p class="text-gray-600">${x.educationYears}</p>
                <p class="text-gray-600">${x.stady}</p> `


  ).join("")
    }
             
            </div>

            <h2 class="text-xl font-semibold mt-4 mb-2">Contact</h2>
            <ul class="list-disc list-inside text-gray-700">
                <li>Number-Phone:${phone}</li>
                <li>Email:${email}</li>
                <li>LinkedIn: ${linkedin}  </li>
                <li>Website:  ${website} </li>
                <li>github:  ${github} </li>
            </ul>
        </div>
    </div>

</div>
<div>
<div class="flex justify-center bg-transparent">
 <button type="button" class="flex items-center my-4 font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  gap-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        print  
          </button>
           <button type="button" onclick='generatePDF()' class="flex items-center my-4 font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  gap-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        telecharger pdf
          </button>
          
</div>
</div>
   
`
}

const btnCV1 = document.querySelector("#btnCv1")
const btnCV2 = document.querySelector("#btnCv2")
btnCV1.addEventListener("click", () => {
  DataInformationpersonnel()
  console.log(container);
  container.style.display = "none"


})
btnCV2.addEventListener("click", () => {
  datainfocv2()
  container.style.display = "none"



})

function generatePDF() {
  const element = document.querySelector('.content'); 

  
  const options = {
      margin:       0,       
      filename:     'document.pdf',   
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 4 }, 
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

 
  html2pdf().set(options).from(element).save();
}
