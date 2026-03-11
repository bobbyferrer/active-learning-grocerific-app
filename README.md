# Grocerific - AI-Powered E-Learning Grocery Store

## Project Overview

Grocerific is a modern grocery store web application developed for **Training purposes in AI-powered software development courses under Active Learning**. This project demonstrates practical implementation of React, TypeScript, and modern web development techniques while serving as an educational platform for learning AI-assisted coding workflows.

## Purpose

This application is specifically designed to:

- **Teach modern web development concepts** through hands-on implementation
- **Demonstrate AI-powered development workflows** using AI assistants like Cascade
- **Provide a realistic e-commerce scenario** for learning React state management, component architecture, and user interface design
- **Showcase best practices** in TypeScript, responsive design, and modern development tools

## Features Implemented

- **Product Catalog**: Browse grocery items with search functionality
- **Shopping Cart**: Add/remove items, adjust quantities, and calculate subtotals
- **Persistent Storage**: Cart data saved to localStorage
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **TypeScript**: Type-safe development with modern React patterns

## Technical Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **localStorage API** for cart persistence

## Educational Value

This project serves as a comprehensive learning tool for:

- Component-based architecture
- State management patterns
- Event handling and user interactions
- Modern development workflows with AI assistance
- TypeScript best practices
- Responsive web design

## Getting Started

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
