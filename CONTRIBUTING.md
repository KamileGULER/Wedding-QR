# Contributing to Wedding Template

Thank you for your interest in contributing to Wedding Template! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Reporting Issues

- Use the GitHub issue tracker
- Provide a clear description of the problem
- Include steps to reproduce
- Add screenshots if applicable
- Specify your browser and OS

### Suggesting Features

- Open a feature request issue
- Describe the feature and its benefits
- Provide mockups or examples if possible
- Consider the impact on existing functionality

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Add tests** if applicable
5. **Run the test suite**
   ```bash
   npm test
   npm run lint
   npm run type-check
   ```
6. **Commit your changes**
   ```bash
   git commit -m "feat: add your feature description"
   ```
7. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
8. **Create a Pull Request**

## 📋 Development Guidelines

### Code Style

- Follow the existing code style
- Use TypeScript for all new code
- Follow ESLint rules
- Use meaningful variable and function names
- Add JSDoc comments for complex functions

### Commit Messages

Use conventional commit format:

```
type(scope): description

feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add or update tests
chore: maintenance tasks
```

### Testing

- Write tests for new features
- Ensure all tests pass
- Maintain good test coverage
- Test on multiple browsers

### Accessibility

- Follow WCAG 2.1 guidelines
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation works
- Test with screen readers

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Setup

1. Clone your fork
   ```bash
   git clone https://github.com/your-username/wedding-template.git
   cd wedding-template
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

4. Run tests
   ```bash
   npm test
   ```

## 📁 Project Structure

```
src/
├── components/          # React components
├── types/              # TypeScript definitions
├── site.config.ts      # Site configuration
├── App.tsx             # Main app component
└── main.tsx            # App entry point

public/
└── assets/             # Static assets
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run type-check` - TypeScript type checking

## 📝 Pull Request Guidelines

### Before Submitting

- Ensure all tests pass
- Update documentation if needed
- Add changelog entry if applicable
- Test on multiple devices/browsers

### PR Description

- Describe the changes clearly
- Link related issues
- Include screenshots for UI changes
- Mention breaking changes if any

### Review Process

- All PRs require review
- Address review comments promptly
- Maintainers may request changes
- Be patient and respectful

## 🐛 Bug Reports

When reporting bugs, please include:

- **Environment**: OS, browser, version
- **Steps to reproduce**: Clear, numbered steps
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Screenshots**: If applicable
- **Console errors**: Any error messages

## 💡 Feature Requests

For feature requests:

- **Problem description**: What problem does this solve?
- **Proposed solution**: How should it work?
- **Alternatives considered**: Other approaches?
- **Additional context**: Screenshots, examples, etc.

## 📚 Documentation

Help improve documentation by:

- Fixing typos and grammar
- Adding missing information
- Improving examples
- Translating to other languages
- Adding code comments

## 🎯 Areas for Contribution

- **UI/UX improvements**
- **Performance optimization**
- **Accessibility enhancements**
- **Mobile responsiveness**
- **Internationalization**
- **Testing coverage**
- **Documentation**
- **Bug fixes**

## 🏷️ Labels

We use labels to categorize issues and PRs:

- `good first issue` - Good for newcomers
- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `help wanted` - Extra attention needed
- `priority: high` - Urgent issues

## 📞 Getting Help

- **GitHub Issues**: For bugs and feature requests
- **Discussions**: For questions and general help
- **Discord**: For real-time chat (if available)

## 🙏 Recognition

Contributors will be:

- Listed in the README
- Mentioned in release notes
- Added to the contributors list
- Given credit in the changelog

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to Wedding Template! 🎉

Your contributions help make this template better for couples around the world.
