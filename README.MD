# TypeScript Node Environment

A simple starter template for running TypeScript with Node.js in Visual Studio Code.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or higher recommended)
- [Visual Studio Code](https://code.visualstudio.com/)

## Setup

1. Clone or download this repository
2. Open the project folder in VS Code
3. Install dependencies:
```
npm install
```

## Project Structure

```
typescript-node-project/
├── src/                  # TypeScript source files
│   └── index.ts          # Main entry point
├── dist/                 # Compiled JavaScript (generated)
├── node_modules/         # Dependencies
├── package.json          # Project configuration
├── tsconfig.json         # TypeScript configuration
└── README.md             # This file
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the application using ts-node, which executes TypeScript code directly without a separate compilation step.

### `npm run build`

Compiles TypeScript files from the `src` directory to JavaScript in the `dist` directory.

### `npm run dev`

Runs the application in development mode with ts-node-dev, which automatically restarts when files change.

## TypeScript Configuration

The project includes a `tsconfig.json` file with sensible defaults:

- Target: ES2016
- Module: CommonJS
- Source directory: ./src
- Output directory: ./dist
- Strict type checking enabled

You can modify these settings according to your project requirements.

## Adding Dependencies

To add additional npm packages:

```
npm install package-name       # For runtime dependencies
npm install package-name --save-dev  # For development dependencies
```

For TypeScript type definitions:

```
npm install @types/package-name --save-dev
```

## VS Code Extensions

For the best development experience, install these VS Code extensions:

- TypeScript Extension (Microsoft)
- ESLint
- Prettier (optional, for code formatting)

## Learn More

- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [ts-node Documentation](https://github.com/TypeStrong/ts-node)

# How to Clone a GitHub Repository and Create a New Project

This guide explains how to clone an existing GitHub repository and turn it into a new project with a different name.

## Prerequisites
- Git installed on your system
- GitHub account
- Command line interface (Terminal/Command Prompt)

## Step-by-Step Instructions

### 1. Clone the original repository
```bash
git clone git@github.com:ManelBrull/typescript-node-learning.git
```

### 2. Rename the local folder
```bash
mv typescript-node-learning your-new-project-name
cd your-new-project-name
```

### 3. Remove the existing Git history
```bash
rm -rf .git
```

### 4. Initialize a new Git repository
```bash
git init
```

### 5. Create a new repository on GitHub
- Go to https://github.com/new
- Enter your new repository name
- Choose public or private visibility
- Do not initialize with README, .gitignore, or license
- Click "Create repository"

### 6. Update project details
Edit the `package.json` file to update:
```json
{
  "name": "your-new-project-name",
  "description": "Your new project description",
  "version": "1.0.0",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/your-new-project-name.git"
  },
  "author": "Your Name",
  "license": "MIT"
}
```

### 7. Stage all files
```bash
git add .
```

### 8. Commit the files
```bash
git commit -m "Initial commit from cloned project"
```

### 9. Connect to your new GitHub repository
```bash
git remote add origin https://github.com/your-username/your-new-project-name.git
```

### 10. Push to your new repository
```bash
git push -u origin main
```

## Result
You now have a fresh project with all the code from the original repository, but with:
- A new project name
- A clean Git history
- Your own repository on GitHub

# Setting up TypeScript ESLint Plugin in VSCode

## Installation

1. Install the required npm packages in your project:
   ```
   bash npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
   bash npm install --save-dev eslint @eslint/js typescript typescript-eslint
   ```

## Configuration

2. Create a `eslint.config.mjs` file in your project root:
   ```js
  // @ts-check
  import eslint from '@eslint/js';
  import tseslint from 'typescript-eslint';

  export default tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommended,
  );
   ```

## VSCode Setup

3. Install the ESLint extension for VSCode:
   - Open the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
   - Search for "ESLint"
   - Install the one by Microsoft

4. Configure VSCode settings to enable ESLint for TypeScript:
   - Open settings (Ctrl+, or Cmd+,)
   - Search for "eslint validate"
   - Add "typescript" and "typescriptreact" to the "ESLint: Validate" setting
   - Or add this to your settings.json:
     ```json
     "eslint.validate": [
       "javascript",
       "javascriptreact",
       "typescript",
       "typescriptreact"
     ]
     ```

5. Restart VSCode or reload the window

## Verification

6. Open a TypeScript file with unused variables, and they should now be highlighted with ESLint warnings

> **Note:** The `@typescript-eslint/no-unused-vars` rule in your ESLint config is what specifically catches unused variables. You can set it to "error" instead of "warn" if you prefer errors rather than warnings.