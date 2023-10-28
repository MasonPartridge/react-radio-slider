# Contributing to React Radio Slider

We would like to thank you for considering contributing to React Radio Slider! It's people like you that make the open-source community such a fantastic place to learn, inspire, and create.

## Code of Conduct

By participating, you are expected to uphold this code. Please report unacceptable behavior to [masonepartridge@gmail.com](mailto:masonepartridge@gmail.com).

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for React Radio Slider. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

- Before submitting a bug, please check the [issue list](https://github.com/MasonPartridge/react-radio-slider/issues) to see if it has already been reported. If it has, add a comment to the existing issue instead of opening a new one.
- When you are creating a bug report, please include as many details as possible.

#### What kinda details?

- The exact steps which reproduce the problem in as many details as possible.
- Specific examples to demonstrate the steps. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use Markdown code blocks.
- Describe the behavior you observed after following the steps and point out what exactly is the problem with that behavior.
- Explain which behavior you expected to see instead and why.
- Include screenshots and animated GIFs which show you following the described steps and clearly demonstrate the problem.

### Suggesting Enhancements

- Before creating enhancement suggestions, please check the [issue list](https://github.com/MasonPartridge/react-radio-slider/issues) as you might find out that you don't need to create one.
- Suggestions are highly valued so please tell us your ideas!

## Pull Requests

The process described here has several goals:

- Maintain React Radio Slider's quality
- Fix problems that are important to users
- Engage the community in working toward the best possible React Radio Slider
- Enable a sustainable system for React Radio Slider's maintainers to review contributions

Please follow these steps to have your contribution considered by the maintainers:

1. Follow the [styleguides](#styleguides)
2. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing ( If I ever get around to making them )
3. Wait for review from one of the maintainers. They may suggest some changes, improvements or alternatives.

## Styleguides

### Git Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or fewer
- Reference issues and pull requests liberally after the first line

### JavaScript Styleguide

All JavaScript must adhere to [JavaScript Standard Style](https://standardjs.com/).

- Prefer the object spread operator (`{...anotherObj}`) to `Object.assign()`
- Inline `export`s with expressions whenever possible
  ```javascript
  // Use this:
  export default class ClassName {}

  // Instead of:
  class ClassName {}
  export default ClassName
  ```

### Documentation Styleguide

- Use [Markdown](https://daringfireball.net/projects/markdown/).
- Reference JavaScript files using backticks, like so: \`ClassName.js\`, not "ClassName.js" or ClassName.js.
- Reference images using Markdown, like so: `![alt text](url)`.
