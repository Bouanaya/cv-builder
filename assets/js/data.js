const container = document.querySelector(".container")
let data = []
 const formData ={}
const DataInformationpersonnel = () => {
  const fullName = document.getElementById('full-name').value;
  const profilePicture = document.getElementById('profile-picture').files[0];
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
  const languagelevel= Array.from(document.querySelectorAll(".language-level")) 
  //hobbies
  const hobbies = Array.from(document.querySelectorAll(".hobbies"))
  //education
  const education = Array.from(document.querySelectorAll(".education"))
  const degree = Array.from(document.querySelectorAll(".degree"))
  const field = Array.from(document.querySelectorAll(".field"))
  const years  = Array.from(document.querySelectorAll(".years"))
  //experience work
  const titleExperience = Array.from(document.querySelectorAll(".job-title "))
  const companyExperience =Array.from(document.querySelectorAll(".company"))
  // softand tech 
  tech = TechnicalSkills.map(x=>x.value)
  formData.tech = tech
  soft = softSkills.map(x=>x.value)
  formData.soft = soft

  //language
  lang = language.map(x=>x.value)
 
  langlevel = languagelevel.map(x=>x.value)
 formData.lang ={} 
  lang.forEach((e,i)=>{formData.lang[e] = langlevel[i]})

//hobbies
  hobby = hobbies.map(x=>x.value)
  formData.hobby = hobby
 

  //Education 
 
  educate = education.map(x=>x.value)
  formData.education = educate
  degreEduacation = degree.map(x=>x.value)
  formData.degreEduacation = degreEduacation
  stady = field.map(x=>x.value)
  formData.stady = stady
  educationYears = years.map(x=>x.value)
  formData.educationYears = educationYears
 
 
  //experience
  exepriencetitle = titleExperience.map(x=>x.value)
  formData.exepriencetitle =exepriencetitle
  companyExper = companyExperience.map(x=>x.value)
  formData.companyExper = companyExper
console.log(formData);

const CV1 = document.querySelector(".CV1")
CV1.innerHTML = `<div class="cv  shadow-lg mt-6 bg-white relative grid grid-cols-3 gap-8 w-full mx-auto max-w-screen-lg p-8 rounded-lg">
    
        <!-- Left Column: Personal Information & Contact -->
        <div class="flex flex-col gap-4 p-6 py-7 col-span-1 bg-slate-50 rounded-lg shadow-md">
          
          <img class="object-cover aspect-square max-w-[212px] max-h-[212px] border-white border-8 mx-auto" src="${profilePicture}" alt="Leslie Knope's profile image">
          
          <div class="text-center">
            <h2 class="text-primary text-xl uppercase font-bold tracking-wide text-indigo-600">${fullName}</h2>
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
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>
                <a href="tel:317-660-2160" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${website}</a>
              </div>
               <div class="cv__icon-wrapper">
                <svg class="cv__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 1H3c-1.1 0-1.99.9-1.99 2L1 21c0 1.1.9 2 1.99 2H21c1.1 0 1.99-.9 1.99-2L23 3c0-1.1-.9-2-1.99-2zM21 19H3V5h18v14z"/></svg>
                <a href="tel:317-660-2160" rel="noopener" class="text-indigo-600 hover:text-indigo-800">${linkedin}</a>
              </div>
              <div class="cv__icon-wrapper">
                <svg class="cv__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 1H3c-1.1 0-1.99.9-1.99 2L1 21c0 1.1.9 2 1.99 2H21c1.1 0 1.99-.9 1.99-2L23 3c0-1.1-.9-2-1.99-2zM21 19H3V5h18v14z"/></svg>
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
                ${formData.tech.map(item=>
                `<li class="cv__tag">${item}</li>`
              ).join("")}
              </ul>
            </section>
    
            <!-- Soft Skills -->
            <section class="cv__section">
              <h3 class="capitalize cv__section-title">Soft Skills</h3>
              <ul class="font-light cv__list">
                ${formData.soft.map(item=>
                `<li>${item}</li>`
              ).join("")}
              </ul>
            </section>
    
            <!-- Languages -->
            <section class="cv__section">
              <h3 class="capitalize cv__section-title">Languages</h3>
              <ul class="">
                ${
                   (function  () {
                    let content = ''
                    for(const key in formData.lang) {
                      content +=  `<li class="flex justify-between pr-4">
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

              ${formData?.hobby?.map(item=>
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
              <li>
                <div class="grid grid-cols-3 gap-3">
                  <h5 class="cv__section-title cv__section-title--sm">City Councilor</h5>
                  <span class="justify-self-center">Pawnee, Indiana</span>
                  <span class="justify-self-end">Jan 2012 – Present</span>
                </div>
                <div class="cv__desc">
                  <ul>
                    <li>Creating policies to improve local government services.</li>
                    <li>Working closely with the Mayor on various initiatives.</li>
                    <li>Serving the people of Pawnee with integrity and compassion.</li>
                  </ul>
                </div>
              </li>
              <li>
                <div class="grid grid-cols-3 gap-3">
                  <h5 class="cv__section-title cv__section-title--sm">Deputy Director of Parks</h5>
                  <span class="justify-self-center">Pawnee, Indiana</span>
                  <span class="justify-self-end">Jan 2009 – Present</span>
                </div>
                <div class="cv__desc">
                  <ul>
                    <li>Managing and improving parks for the city of Pawnee.</li>
                    <li>Leading the team that ensures outdoor activities are accessible to all residents.</li>
                    <li>Advocating for sustainable development in public spaces.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
    
          <hr class="cv__bar">
    
          <!-- Education Section -->
          <section class="cv__section cv__section--main w-full">
            <h4 class="cv__section-title cv__section-title--main">Education</h4>
            <ul class="cv__event">
              <li>
                <div class="gap-3 flex justify-between">
                  <h5 class="cv__section-title cv__section-title--sm">{}</h5>
                  <span class="justify-self-center">Indiana University</span>
                </div>
                <div class="cv__desc">
                  <ul>
                    <li>Studied policies for sustainable public spaces.</li>
                    <li>Gained experience in government project management.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
    
          <hr class="cv__bar">
    
          <!-- Projects Section -->
          <section class="cv__section cv__section--main w-full">
            <h4 class="cv__section-title cv__section-title--main">Projects</h4>
            <ul class="cv__event">
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
                    <li>Renovation of park Lot 48 to increase community space.</li>
                    <li>Collaborated with local businesses and community members.</li>
                    <li>Built a sustainable public park that will last for generations.</li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </div>
         
        </div>
        <div>
<div class="flex justify-center">
 <button type="button" class="flex items-center my-4 font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  gap-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        print <img src="../assets/icons/impremer.svg" alt="">
          </button>
</div>
</div>`



}

const datainfocv2 = ()=>{
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
  const languagelevel= Array.from(document.querySelectorAll(".language-level")) 
  //hobbies
  const hobbies = Array.from(document.querySelectorAll(".hobbies"))
  //education
  const education = Array.from(document.querySelectorAll(".education"))
  const degree = Array.from(document.querySelectorAll(".degree"))
  const field = Array.from(document.querySelectorAll(".field"))
  const years  = Array.from(document.querySelectorAll(".years"))
  //experience work
  const titleExperience = Array.from(document.querySelectorAll(".job-title "))
  const companyExperience =Array.from(document.querySelectorAll(".company"))
  // softand tech 
  tech = TechnicalSkills.map(x=>x.value)
  formData.tech = tech
  soft = softSkills.map(x=>x.value)
  formData.soft = soft

  //language
  lang = language.map(x=>x.value)
 
  langlevel = languagelevel.map(x=>x.value)
 formData.lang ={} 
  lang.forEach((e,i)=>{formData.lang[e] = langlevel[i]})

//hobbies
  hobby = hobbies.map(x=>x.value)
  formData.hobby = hobby
 

  //Education 
 
  educate = education.map(x=>x.value)
  formData.education = educate
  degreEduacation = degree.map(x=>x.value)
  formData.degreEduacation = degreEduacation
  stady = field.map(x=>x.value)
  formData.stady = stady
  educationYears = years.map(x=>x.value)
  formData.educationYears = educationYears
 
 
  //experience
  exepriencetitle = titleExperience.map(x=>x.value)
  formData.exepriencetitle =exepriencetitle
  companyExper = companyExperience.map(x=>x.value)
  formData.companyExper = companyExper
console.log(formData);

  const CV2 = document.querySelector(".CV2")
CV2.innerHTML =`
<div class="bg-gray-100 font-sans ">
    <div class="container mx-auto py-8 px-4">
        <div class="bg-white p-6 rounded-lg shadow-lg">
            <h1 class="text-3xl font-semibold">${fullName}</h1>
            <p class="text-gray-600">${jobTitle}</p>

            <hr class="my-4">

            <h2 class="text-xl font-semibold mb-2">Summary</h2>
            <p class="text-gray-700">${editor}</p>

            <h2 class="text-xl font-semibold mt-4 mb-2">Skills</h2>
            <ul class="list-disc list-inside text-gray-700">
                  ${formData.soft.map(item=>
                `<li>${item}</li>`
              ).join("")}
            </ul>

            <h2 class="text-xl font-semibold mt-4 mb-2">Experience</h2>
            <div class="mb-4">
                <h3 class="text-lg font-semibold">Web Developer, ABC Company</h3>
                <p class="text-gray-700">Developed and maintained company website, implementing responsive design and
                    optimizing performance. Collaborated with the design team to create visually appealing web pages.
                </p>
                <p class="text-gray-600">January 2020 - Present</p>
            </div>

            <div class="mb-4">
                <h3 class="text-lg font-semibold">Frontend Developer, XYZ Agency</h3>
                <p class="text-gray-700">Worked on various client projects, translating design mockups into interactive
                    web pages. Utilized modern web technologies to ensure cross-browser compatibility.</p>
                <p class="text-gray-600">June 2018 - December 2019</p>
            </div>

            <h2 class="text-xl font-semibold mt-4 mb-2">Education</h2>
            <div class="mb-4">
                <h3 class="text-lg font-semibold">Bachelor of Science in Computer Science</h3>
                <p class="text-gray-700">University of Example</p>
                <p class="text-gray-600">Graduated in May 2018</p>
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
<div class="flex justify-center">
 <button type="button" class="flex items-center my-4 font-bold text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800  gap-2 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        print <img src="../assets/icons/impremer.svg" alt="">
          </button>
</div>
</div>
   
`
}

const btnCV1 =document.querySelector("#btnCv1")
const btnCV2 =document.querySelector("#btnCv2")
btnCV1.addEventListener("click", ()=>{
  DataInformationpersonnel()
  console.log(container);
  container.style.display ="none"
  

})
btnCV2.addEventListener("click", ()=>{
  datainfocv2()
  container.style.display ="none"



})