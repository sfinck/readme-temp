// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
function renderLicenseBadge(license) {
  if (license === 'MIT'){

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;
