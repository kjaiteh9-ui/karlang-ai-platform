# CLAUDE.md — karlang-ai-platform

This file provides context for AI assistants (Claude Code, etc.) working in this repository.

## Project Overview

**karlang-ai-platform** is a new AI platform project. The repository is in its initial bootstrapping phase — no application code, build system, or tests have been added yet.

## Repository Structure

```
karlang-ai-platform/
├── CLAUDE.md          # This file — AI assistant guidance
└── .git/              # Git repository
```

> This section should be updated as the project grows with directories for source code, tests, configuration, documentation, etc.

## Development Setup

_No setup steps have been defined yet._ When a build system or framework is chosen, document the following here:

- Language / runtime version requirements
- Package manager and dependency installation (`npm install`, `pip install -r requirements.txt`, etc.)
- Environment variables and `.env` file setup
- Database or service dependencies

## Common Commands

_No commands defined yet._ Update this section as the project evolves:

- **Install dependencies:** `TBD`
- **Run development server:** `TBD`
- **Run tests:** `TBD`
- **Lint / format:** `TBD`
- **Build for production:** `TBD`

## Code Conventions

_To be established._ When the team settles on conventions, document them here, including:

- Language and framework choices
- File and directory naming conventions
- Code style (formatter, linter configuration)
- Git branch naming and commit message conventions
- PR and review process

## Architecture

_No architecture has been defined yet._ When components are added, describe:

- High-level system design and component relationships
- API structure and patterns
- Data models and storage
- Authentication and authorization approach
- Third-party integrations

## Guidelines for AI Assistants

1. **Read before writing** — Always read existing files before modifying them.
2. **Minimal changes** — Only change what is necessary to accomplish the task. Avoid unnecessary refactors.
3. **No guessing** — If requirements are ambiguous, ask for clarification rather than making assumptions.
4. **Keep this file updated** — When you add significant structure (new directories, build systems, frameworks, CI pipelines), update the relevant sections of this CLAUDE.md.
5. **Security first** — Never commit secrets, credentials, or API keys. Use environment variables and `.env` files (which should be `.gitignore`-d).
6. **Test your changes** — Run existing tests after making changes. Add tests for new functionality when a test framework is in place.
