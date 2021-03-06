const mit = "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
const mitText = "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.";

const mozilla = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-blue.svg)](https://opensource.org/licenses/MPL-2.0)";
const mozillaText = "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.";

const inqversion = "![npm](https://img.shields.io/npm/v/inquirer)";
const inqText = "Copyright (c) 2016 Simon Boudrias (twitter: @vaxilart) Licensed under the MIT license.";

const gitstats = "![Your Repository's Stats](https://github-readme-stats.vercel.app/api?username=";
const gitlanguages = "![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=";
const follow = "[![GitHub followers](https://img.shields.io/github/followers/";


let licenseLink = "";
let licenseText = "";

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case "MIT":
      licenseLink = mit;
      break;
    case "Mozilla":
      licenseLink = mozilla;
      break;
    case "Inquirer":
      licenseLink = inqversion;
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case "MIT":
      licenseLink = mit;
      break;
    case "Mozilla":
      licenseLink = mozilla;
      break;
    case "Inquirer":
      licenseLink = inqversion;
      break;
    default:
      licenseLink = "";
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch(license){
    case "MIT":
      licenseText = mitText;
      break;
    case "Mozilla":
      licenseText = mozillaText;
      break;
    case "Inquirer":
      licenseText = inqText;
      break;
    default:
      licenseText = "";
  }
  return licenseText;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {

const generateMarkdown = (data) =>
   `# ???? ${data.title}

   ![header](assets/github.png)

   ${renderLicenseLink(data.license)} [![npm version](https://badge.fury.io/js/npm.svg)](https://badge.fury.io/js/npm)

## Description 

  ${data.description}

## ???? Table of Contents 
  1. [Installation Instructions](#????-installation-instructions)
  2. [Usage Information](#??????-usage-information)
  3. [Contribution Guidelines](#????-contribution-guidelines)
  4. [Tests](#????-tests)
  5. [License](#????-license)
  6. [Questions](#???-questions)

## ???? Installation Instructions 
 
  * ${data.instructions}

## ?????? Usage Information
 
  ${data.usage}

## ???? Contribution Guidelines 
  
  ${data.contribute}

  ![javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## ???? Tests 

  ${data.test}

  [Video Demonstration](https://drive.google.com/file/d/1MwiyamYlytyy1jehzILfGDt7xESXjxU2/view?usp=sharing)

## ???? License 
  
  ${renderLicenseBadge(data.license)}

  ${renderLicenseSection(data.license)}

  [Inquirer](https://www.npmjs.com/package/inquirer)
  
## ??? Questions 

[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](https://GitHub.com/${data.github})

  If you have questions about this project, you can contact me via e-mail below or you can follow on my Github profile using that link.

  [![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/${data.github})
  [![E-Mail](	https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:${data.email})

  ---
  
  ![icon](assets/githublogo.png)
  
  ${follow}${data.github}.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/${data.github}?tab=followers)

  ${gitstats}${data.github}&show_icons=true)

  ${gitlanguages}${data.github})
  
  `;

module.exports = generateMarkdown;
