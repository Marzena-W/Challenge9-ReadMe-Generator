// function to generate markdown for README
function generateMarkdown(data) {
  return
  `
# ${data.title}
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />


# Description
> ${data.description}

## Table of Contents
• [Description](#description)
• [Installation](#installation)
• [Usage](#usage)
• [License](#license)
• [Contributing](#contributing)
• [Tests](#tests)
• [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.licese}
![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
