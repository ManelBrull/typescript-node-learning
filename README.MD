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