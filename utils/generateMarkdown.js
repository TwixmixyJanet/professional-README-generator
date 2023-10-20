// ~~~ LICENSE BADGE ~~~ ///
// utilized the https://shields.io/ to create a generic text badge //
function renderLicenseBadge(license) {
  if (license) {
    // needed to use string concatination here or else the content would display as a code block if I used back-ticks (template literals) //
    return "[![" + license +" license](https://img.shields.io/badge/License-" + license + "-purple.svg)](" + renderLicenseLink(license) + ")";
  }
}

// ~~~ LICENSE LINK ~~~ //
// decided to keep it simple with if statements and limit the license options instead of using switch //
function renderLicenseLink(license) {
  if (license === 'GPL') {
    return `http://perso.crans.org/besson/LICENSE.html`
  }
  if (license === 'MIT') {
    return `https://lbesson.mit-license.org/`
  }
  if (license === 'Unlicense') {
    return `https://unlicense.org/`
  }
  if (license === 'AFL-3.0') {
    return `https://opensource.org/license/afl-3-0-php/`
  }
}

// ~~~ LICENSE SECTION ~~~ //
function renderLicenseSection(license) {
  if (license) {
    return "## License \n" + renderLicenseBadge(license) + " License Copyright (c) 2023.";
  }


}

// ~~~ GENERATE MARKDOWN ~~~ ///
function generateMarkdown(data) {
  // spelled out the details of the README layout below.
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

// ~~~ EXPORT GENERATE MARKDOWN ~~~ //
module.exports = generateMarkdown;
