# CLAUDE.md — Karlang AI Platform

This file provides context for AI assistants working on this codebase.

## Project Overview

**Karlang AI Platform** is a new project. This repository is in its initial setup phase. As the project evolves, this document should be updated to reflect the current architecture, conventions, and workflows.

## Repository Structure

```
karlang-ai-platform/
├── CLAUDE.md          # This file — AI assistant guidance
└── (project files will be added here)
```

> **Note:** This is a freshly initialized repository. Update this section as the project structure takes shape.

## Development Setup

### Prerequisites

_(To be defined as the project stack is chosen.)_

### Getting Started

```bash
git clone <repo-url>
cd karlang-ai-platform
# Add setup steps here as the project evolves
```

## Development Workflow

### Branching

- Feature branches should follow the pattern: `feature/<description>`
- Bug fix branches: `fix/<description>`
- Always branch from the latest `main`

### Commits

- Write clear, descriptive commit messages
- Use conventional commit style when possible: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- Keep commits focused — one logical change per commit

### Pull Requests

- Provide a summary of changes and motivation
- Reference related issues when applicable
- Ensure CI passes before requesting review

## Code Conventions

_(To be defined as the tech stack is established. Document language-specific style guides, linting rules, and formatting tools here.)_

### General Principles

- Keep code simple and readable
- Prefer explicit over implicit
- Write tests for new functionality
- Avoid premature abstraction — solve the problem at hand
- Do not introduce security vulnerabilities (SQL injection, XSS, command injection, etc.)

## Testing

_(To be defined. Document the testing framework, how to run tests, and coverage expectations here.)_

## Architecture Decisions

_(Record key architectural decisions here as the project develops. Use the format below.)_

### Template

```
### ADR-NNN: Title
- **Date:** YYYY-MM-DD
- **Decision:** What was decided
- **Context:** Why it was needed
- **Consequences:** What follows from this decision
```

## AI Assistant Guidelines

When working on this codebase:

1. **Read before editing** — Always read a file before modifying it
2. **Minimal changes** — Only change what is necessary to complete the task
3. **No unnecessary files** — Prefer editing existing files over creating new ones
4. **Update this file** — When adding significant new structure, dependencies, or conventions, update CLAUDE.md accordingly
5. **Security first** — Never introduce credentials, secrets, or security vulnerabilities
6. **Test your changes** — Run the project's test suite after making changes (once one exists)
