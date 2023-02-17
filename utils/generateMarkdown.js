// function to generate markdown for README
function generateMarkdown(data) {
  return
  `
# ${data.title}
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)


# Description
> ${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
To install necessary dependencies, run the following command:
${data.installation}

## Usage
You can use this applicaiton by running: 
${data.usage}

## License
This project is licensed under the ${data.licese} license.

## Contributing
${data.contributing}

## Tests
To run tests, run the following command:
${data.tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at maggie@w. You can find more of my work at maggie@w
${data.questions}
`;
}

module.exports = generateMarkdown;
