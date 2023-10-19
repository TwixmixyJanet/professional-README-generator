// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // need to figure out how to generate the badge image thing
  if (license) {
    return "[![" + license +" license](https://img.shields.io/badge/License-" + license + "-purple.svg)](" + renderLicenseLink(license) + ")";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // need to determine which licenses to option and link to them??
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'The Unlicense') {
    return `https://unlicense.org/`
  }
  if (license === 'AFL-3.0') {
    return `https://opensource.org/license/afl-3-0-php/`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // license section text
  if (license) {
    return "## License \n" + renderLicenseBadge(license) + " License Copyright (c) 2023.";
    // return ## License
    // ${renderLicenseBadge(license)}

    // [${license}](${renderLicenseLink(license)}) License Copyright (c) 2023.
  }


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // need to spell out the details of the README layout below.
  return `# ${data.title}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Credits](#credits)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}

  ## Credits
  ### ${data.fullName}<br />
  - [GitHub Profile](https://github.com/${data.github}/)<br />
  - [Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
