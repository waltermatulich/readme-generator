// Function to generate license badge and notice
function generateLicenseBadgeAndNotice(license) {
    let badge;
    let notice;

    switch (license) {
        case "MIT":
            badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
            notice = "This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.";
            break;
        case "APACHE":
            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
            notice = "This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.";
            break;
        case "GPL":
            badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
            notice = "This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.";
            break;
        case "None":
            // If no license is chosen, no badge and notice
            badge = "";
            notice = "No license specified.";
            break;
        default:
            badge = "";
            notice = "";
            break;
    }

    return { badge, notice };
}



// Generating markdown data
module.exports = function generateMarkdown(data) {
    // Generate license badge and notice based on the chosen license
    const { badge, notice } = generateLicenseBadgeAndNotice(data.license);

    return `
# ${data.title}

${badge}

## Description

${data.description}

## Table of Contents:
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Contacts](#contacts)
## Installation

### To install, run the following command⬇️

${data.installation}

## Usage:
${data.usage}

## Contributing:
${data.contributing}

## Test:

${data.test}

${notice}

## Contacts
### If you have questions, please feel free to contact me!
##### Email: @${data.email}
##### GitHub Account: ${data.github} https://github.com/waltermatulich
`;
};