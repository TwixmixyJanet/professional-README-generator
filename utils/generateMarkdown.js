// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // need to figure out how to generate the badge image thing
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // need to determine which licenses to option and link to them??
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // license section text
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // need to spell out the details of the README layout below.
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  *

  
`;
}

module.exports = generateMarkdown;
