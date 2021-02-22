// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    return "";
  }
 else {
   return `![${license} Badge](https://img.shields.io/badge/license-${license}-blue)`;
  
 }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None'){
    return "";
  }
 else {
   return `[${license}](https://choosealicense.com/licenses/${license}/)`;
 }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if(license === 'None'){
   return "";
 }
else {
  return `## License 
  This project is licensed by ${renderLicenseLink(license)}
  ${renderLicenseBadge(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

  ## User Story
  ${answers.userStory}

  ## Table of Content

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Description
  ${answers.description}
  
  ## Installation
  ${answers.installation}
  
  ## Usage 
  ${answers.usage}
  
  ${renderLicenseSection(answers.license)}
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For questions, please contacte me:
  * [${answers.username}] (https://github.com/${answers.username})
  * Email: ${answers.email}
  `;
  }
  
  module.exports = generateMarkdown;