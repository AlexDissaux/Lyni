---
applyTo: '**'
---

# Lyni Project Instructions

## Project Overview
**Lyni** is an Nx monorepo workspace containing a full-stack TypeScript application with:
- **Backend API**: NestJS application 
- **Frontend Web**:  React application
- **Shared Libraries**: Types and utilities

## Project Structure

```
/root/Lyni/
├── apps/
│   ├── api/                 # NestJS backend application
│   ├── api-e2e/            # API end-to-end tests
│   ├── web/                 # React frontend application
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
```
