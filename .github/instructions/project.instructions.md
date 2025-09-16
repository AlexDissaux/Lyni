---
applyTo: '**'
---

# Lyni Project Instructions

## Project Overview
**Lyni** is an Nx monorepo workspace containing a full-stack TypeScript application with:
- **Backend API**: NestJS application 
- **Frontend Web**: Next.js React application
- **Shared Libraries**: Types and utilities

## Technology Stack

### Core Technologies
- **Monorepo**: Nx 21.5.2 workspace
- **Language**: TypeScript 5.9.2
- **Package Manager**: npm
- **Node.js**: v20.19.9

### Backend (API)
- **Framework**: NestJS 11.0.0
- **Runtime**: Node.js with Express platform
- **Build Tool**: Webpack with custom config
- **Testing**: Jest
- **Port**: 3000 (default)
- **Base Path**: `/api`

### Frontend (Web)
- **Framework**: Next.js 14.2.3
- **UI Library**: React 18.3.1
- **Styling**: CSS Modules (page.module.css)
- **Build Tool**: Next.js built-in
- **Testing**: Jest + React Testing Library

### Development Tools
- **Linting**: ESLint 9.8.0 with TypeScript ESLint
- **Testing**: Jest 29.7.0
- **E2E Testing**: Playwright 1.36.0
- **Code Formatting**: Prettier 2.6.2

## Project Structure

```
/root/Lyni/
├── apps/
│   ├── api/                 # NestJS backend application
│   │   ├── src/
│   │   │   ├── main.ts      # Application entry point
│   │   │   └── app/         # Core application modules
│   │   ├── webpack.config.js # Custom Webpack configuration
│   │   └── project.json     # Nx project configuration
│   ├── api-e2e/            # API end-to-end tests
│   ├── web/                 # Next.js frontend application
│   │   ├── src/
│   │   │   └── app/         # App Router structure
│   │   ├── next.config.js   # Next.js configuration
│   │   └── project.json     # Nx project configuration
│   └── web-e2e/            # Web end-to-end tests
├── libs/
│   └── types/              # Shared TypeScript types library
│       └── src/
│           ├── index.ts    # Library exports
│           └── lib/        # Type definitions
├── .github/
│   └── instructions/       # Project documentation
└── [config files]         # Root configuration files
```

## Key Applications

### API Application (`apps/api`)
- **Type**: NestJS backend application
- **Entry Point**: `src/main.ts`
- **Controller**: Basic AppController with GET endpoint
- **Service**: AppService returning `{ message: 'Hello API' }`
- **Module Structure**: Standard NestJS module pattern
- **Build**: Custom Webpack configuration
- **Serve Command**: `nx serve api`
- **Build Command**: `nx build api`

### Web Application (`apps/web`)
- **Type**: Next.js React application using App Router
- **Entry Point**: `src/app/page.tsx`
- **Layout**: `src/app/layout.tsx` with global CSS
- **Styling**: CSS Modules (`page.module.css`)
- **Content**: Default Nx welcome page with learning materials
- **Serve Command**: `nx serve web` (dev mode)
- **Build Command**: `nx build web`

### Types Library (`libs/types`)
- **Type**: Shared TypeScript library
- **Purpose**: Common type definitions across applications
- **Current State**: Basic placeholder implementation
- **Import Path**: `@lyni/types` (configured in tsconfig.base.json)
- **Usage**: Can be imported by both API and Web applications

## Development Commands

### Starting Applications
```bash
# Start API server (development)
nx serve api

# Start Web application (development)  
nx serve web

# Build for production
nx build api
nx build web
```

### Code Quality
```bash
# Run linting
nx lint api
nx lint web

# Run tests
nx test api
nx test web

# Run E2E tests
nx e2e api-e2e
nx e2e web-e2e
```

### Nx Utilities
```bash
# View project graph
nx graph

# Show project details
nx show project api --web
nx show project web --web

# Generate new components/features
nx g @nx/nest:controller feature --project=api
nx g @nx/next:component ui-component --project=web
```

## Configuration Details

### TypeScript Configuration
- **Base Config**: `tsconfig.base.json` with path mapping
- **Library Paths**: `@lyni/types` mapped to `libs/types/src/index.ts`
- **Target**: ES2015 with ES2020 library support
- **Decorators**: Enabled for NestJS

### Path Mapping
- **@lyni/types**: `libs/types/src/index.ts`

### Nx Configuration
- **Nx Cloud ID**: `68c41d8cf66ecf222a8d337d`
- **Plugins**: Next.js, Playwright, ESLint, Jest, Webpack
- **Target Defaults**: E2E tests depend on build targets
- **Generators**: Configured for apps/ and libs/ directories

## Development Guidelines

### File Organization
- **Applications**: Place in `apps/` directory
- **Shared Code**: Place in `libs/` directory  
- **Types**: Add to `libs/types` library
- **Tests**: Co-locate with source files (`.spec.ts`)
- **E2E Tests**: Separate `-e2e` projects

### Code Patterns
- **API**: Follow NestJS patterns (modules, controllers, services)
- **Web**: Use Next.js App Router and CSS Modules
- **Shared**: Export from `libs/types` for cross-app usage
- **Testing**: Jest for unit tests, Playwright for E2E

### Adding New Features
1. **API Endpoints**: Add controllers/services to `apps/api/src/app/`
2. **Web Pages**: Add to `apps/web/src/app/` following App Router structure
3. **Shared Types**: Add to `libs/types/src/lib/` and export from index
4. **Components**: Generate using Nx generators for consistency

### Dependencies
- **Add Backend Deps**: Focus on NestJS ecosystem
- **Add Frontend Deps**: Focus on React/Next.js ecosystem  
- **Shared Deps**: Add to workspace root for cross-project usage

## Important Notes
- **Monorepo Benefits**: Shared dependencies, consistent tooling, atomic commits
- **Type Safety**: Leverage `@lyni/types` library for shared interfaces
- **Development Flow**: Use Nx commands for consistent development experience
- **Testing Strategy**: Unit tests per project, E2E tests in separate projects
- **Build Optimization**: Nx handles dependency graphs and incremental builds
