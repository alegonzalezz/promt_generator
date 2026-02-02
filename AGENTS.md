# AGENTS.md

This repository contains a React + TypeScript + Vite prompt generator application. Follow these conventions when making changes.

## Commands

**Build & Development:**
- `npm run dev` - Start development server with hot module replacement
- `npm run build` - TypeScript compilation followed by Vite production build
- `npm run preview` - Preview production build locally

**Linting:**
- `npm run lint` - Run ESLint on the codebase (fixes issues automatically when possible)

**Testing:**
- No test framework is currently configured. To add testing, install a test runner (e.g., vitest, jest) and update package.json with test scripts.

## Code Style Guidelines

### TypeScript & Types
- Strict TypeScript is enabled (`strict: true`)
- All unused locals and parameters must be removed or prefixed with underscore if intentionally unused
- Use explicit type annotations for function parameters and return types when not obvious
- Define types/interfaces near their usage or export them for reuse
- Example: `type PromptOptions = { role: string; tone: string; format: string; input: string }`

### Imports
- Use ES module syntax (`import`/`export`)
- Order imports: 1) React/core libraries, 2) Third-party libraries, 3) Internal modules
- Use absolute paths within src directory: `'./app/PromptGenerator'`, `'../domain/buildPrompt'`
- TypeScript file extensions are required: `.tsx` for React components, `.ts` for non-React modules

### React Components
- Use functional components with hooks (no class components)
- Export components using named exports: `export function PromptGenerator() { ... }`
- Use React hooks for state management: `useState`, `useEffect`, etc.
- Avoid inline arrow functions in props when possible; define handlers inside component
- Example: `<button onClick={copyToClipboard}>Copiar</button>`

### Styling
- Inline styles are used with camelCase properties: `style={{ maxWidth: 800, margin: '0 auto' }}`
- Color values use hex codes: `'#eee'`, `'#121212'`
- No CSS framework is currently in use

### Naming Conventions
- Components: PascalCase (`PromptGenerator`, `App`)
- Functions: camelCase (`buildPrompt`, `copyToClipboard`)
- Types/Interfaces: PascalCase (`PromptOptions`)
- Constants: lowercase_with_underscores (not currently used, but recommended)
- State variables: camelCase matching their purpose (`input`, `role`, `tone`, `format`)
- Event handlers: camelCase with descriptive names (`copyToClipboard`)

### Error Handling
- Use async/await for asynchronous operations
- Minimal error handling in current codebase; consider adding try/catch for user-facing async operations
- Example: `const copyToClipboard = async () => { await navigator.clipboard.writeText(prompt) }`

### File Organization
- `src/app/` - React components and UI
- `src/domain/` - Business logic, pure functions, data transformations
- `src/main.tsx` - Application entry point
- `src/index.css` - Global styles

### Code Quality
- Follow ESLint rules (automatic fixes applied during development)
- Use descriptive variable and function names
- Keep functions small and focused
- Write clean, readable code without unnecessary comments
- Trim whitespace from template literals when building strings: `.trim()` after backtick strings
