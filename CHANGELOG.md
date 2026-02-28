# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.2] - 2026-02-28

### Bugfix
- fixed bin and copying issues

## [0.0.1] - 2026-02-28

### Added

- **Primary Agent**: `python-expert` - Main agent for Python development with skill loading protocol
- **Subagents** (4 specialized subagents):
  - `python-coder` - Code generation and implementation
  - `python-reviewer` - Code quality and security review
  - `python-tester` - Test writing with pytest patterns
  - `python-scout` - Context discovery and file finding

- **Skills** (10 on-demand knowledge modules):
  - `python-fundamentals` - Core Python 3.13+ patterns and best practices
  - `python-fundamentals-313` - Python 3.13+ specific features (free-threading, JIT)
  - `python-fastapi` - FastAPI production patterns with Pydantic v2
  - `python-backend` - SQLAlchemy 2.0 async patterns, database work
  - `python-testing-general` - pytest fundamentals, fixtures, mocking
  - `python-testing-deep` - Advanced testing (hypothesis, snapshot, async)
  - `python-asyncio` - Async/await patterns, TaskGroup, semaphores
  - `python-type-hints` - Type system, Protocol, TypedDict, mypy config
  - `python-package-management` - UV package manager, pyproject.toml
  - `python-tooling` - Docker, CI/CD, profiling, optimization

- **Context Files** (3 standards files):
  - `standards.md` - Code quality standards, naming conventions
  - `patterns.md` - Dependency injection, repository pattern, services
  - `security.md` - Input validation, JWT, SQL injection prevention

- **Documentation** (9 comprehensive docs):
  - Overview, Architecture, Agents, Subagents, Skills
  - Workflow, Configuration, Tutorials, Troubleshooting

- **CLI Tool** (`python-expert-agent`):
  - `init` command to install agent pack to projects
  - `--global` flag for global installation
  - `--force` flag to overwrite existing files

- **CI/CD**:
  - GitHub Actions workflow for npm publishing
  - Release automation

### Technical Details

- Targets Python 3.13+ with modern syntax
- FastAPI 0.115+ with async patterns
- SQLAlchemy 2.0 with async sessions
- Pydantic v2 for validation
- pytest + pytest-asyncio for testing
- UV for package management

### License

MIT License
