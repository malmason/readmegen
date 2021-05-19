const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
const mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
const gitstats = "![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username="
const gitlanguages = "![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username="
const follow = "[![GitHub followers](https://img.shields.io/github/followers/"


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

const generateMarkdown = (data) =>
   `# 📘 ${data.title}

   ![header](assets/github.png)

     ## Description 

  ${data.description}

  ---

  # 📋 Table of Contents 
  1. [Installation Instructions](#📄-installation-instructions)
  2. [Usage Information](#™️-usage-information)
  3. [Contribution Guidelines](#📝-contribution-guidelines)
  4. [Tests](#🉑-tests)
  5. [License](#🆔-license)
  6. [Questions](#❓-questions)

  ---

  ## 📄 Installation Instructions 
 
  * ${data.instructions}

  ---

  ## ™️ Usage Information
 
  ${data.usage}

  ---

  ## 📝 Contribution Guidelines 
  
  ${data.contribute}
  
  ---

  ## 🉑 Tests 

  ${data.test}

  ---

  ## 🆔 License 
  
  ${
    (license => {
      if(license="MIT")
        return `${mit}`
      else  
        return `${mozilla}`
    }) (data.license)
  }
  ${follow}${data.github}.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/${data.github}?tab=followers)

  ---
  
  ## ❓ Questions 


  If you have questions about this project, you can contact me via e-mail below or you can follow on my Github profile using that link.

  * [Github](https://github.com/${data.github})

  * [E-Mail](mailto:${data.email}) 📧

  ---

  ${gitstats}${data.github}&show_icons=true)

  ${gitlanguages}${data.github})
  
  `;

module.exports = generateMarkdown;
