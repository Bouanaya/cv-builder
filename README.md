# CV Builder Application

## Project Overview

The CV Builder application is a dynamic, multi-step form designed to help users create a comprehensive CV. The application allows users to input personal, professional, and academic information, as well as skills, languages, hobbies, and certifications. Users can dynamically add multiple entries for skills, experiences, and other sections. The application includes form validation, progress tracking, and the ability to download or print the CV in a customizable format.

## Features

1. **Multi-Step Form with Validation:**
   - Personal Information: Full name, profile photo, email, phone, address, LinkedIn, GitHub, portfolio, etc.
   - Professional Details: Job title, profile summary.
   - Skills: Separate sections for technical (hard) skills and interpersonal (soft) skills with dynamic addition.
   - Languages: List of languages with proficiency levels, dynamically add more languages.
   - Hobbies and Interests: List of hobbies with the ability to add more entries.
   - Academic Background: Details of academic qualifications with dynamic forms for adding multiple academic records.
   - Professional Experience: Details of previous jobs with dynamic addition of multiple experiences.
   - Certifications: List of certifications with names and links, dynamically add more certifications.

2. **Progress Tracking:**
   - A progress bar for each step to visually show the user's advancement in the CV creation process.

3. **Customizable CV Templates:**
   - Two distinct CV designs to choose from.
   - Real-time preview of the CV with customization options.

4. **Save Options:**
   - Option to save created CVs within the application for future use or modifications.

5. **Field Validation:**
   - Validation for email, phone formats, and URLs for LinkedIn and GitHub to ensure accurate information.

## User Stories

1. **CV Creation:**
   - As a user, I want to create a CV by filling out a multi-step form to organize my personal and professional information clearly and structured.
   - Acceptance Criteria:
     - Access the form with clearly defined steps.
     - Navigate between steps without losing entered data.
     - Each step corresponds to a specific type of information (e.g., personal information, professional experiences).

2. **Multi-Step Form:**
   - As a user, I want to fill out my CV using a form divided into several steps to make the information input guided and straightforward.
   - Acceptance Criteria:
     - See the name of each step to know what information is required.
     - Use "Next" and "Previous" buttons to navigate between steps.
     - See a progress bar indicating the completion of my CV.

3. **Dynamic Forms for Multiple Entries:**
   - As a user, I want to dynamically add multiple skills, languages, academic qualifications, professional experiences, and certifications to ensure my CV reflects all my qualifications and experiences.
   - Acceptance Criteria:
     - In sections requiring repetitive information (skills, languages, etc.), an "Add" button allows adding more fields.
     - Newly added fields appear instantly without page reload.
     - Option to remove added fields if needed.

4. **Field Validation:**
   - As a user, I want to be notified when the entered information doesn't meet the expected format to correct errors before submitting the CV.
   - Acceptance Criteria:
     - Each field is validated based on its type (e.g., email, URL, phone number) during input.
     - Display a clear error message under the invalid field.
     - Prevent moving to the next step until all required information is valid.

5. **Progress Tracking:**
   - As a user, I want to see a progress bar showing the advancement of my CV creation to know how many steps remain.
   - Acceptance Criteria:
     - The progress bar increases with each completed step.
     - Dynamic display of progress as I move through steps.
     - Progress bar decreases if moving back to previous steps.

6. **Choosing CV Template:**
   - As a user, I want to choose between two CV templates to select the one that best fits my visual preferences.
   - Acceptance Criteria:
     - After entering my information, preview both available CV templates.
     - Click on each template to preview my information.
     - Option to go back and change the template if desired.

7. **Download and Print CV:**
   - As a user, I want to download or print my final CV to send it or use it in an interview.
   - Acceptance Criteria:
     - Click a "Download" button to get a PDF version of my CV.
     - Click a "Print" button to print my CV directly.
     - The PDF file maintains the layout and information of the chosen template.

## Technologies Used

- HTML5
- TailwindCSS
- JavaScript (DOM manipulation)


### Prerequisites

- Text editor ( VSCode)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Bouanaya/cv-builder.git

