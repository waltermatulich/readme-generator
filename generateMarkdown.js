// Generating markdown data
module.exports = function generateMarkdown(data) {
    return `
    #${data.title}
    
    ${data.license}

    Description
    
    ${data.description}
    
    Table of Contents:
    
    Installation
    
    To install, run the following command⬇️

    ${data.installation}

    Usage
    ${data.usage}

    Contributing
    ${data.contributing}

    Tests

    ${data.tests}

    Questions

    ${data.email}
    ${data.github}

    `
};