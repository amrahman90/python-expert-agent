# Python Expert Agent for OpenCode

[![npm version](https://img.shields.io/npm/v/python-expert-agent.svg)](https://www.npmjs.com/package/python-expert-agent)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/python-expert-agent.svg)](https://www.npmjs.com/package/python-expert-agent)
[![experimental](https://img.shields.io/badge/status-experimental-orange)](https://github.com/amrahman90/python-expert-agent)

> **Warning:** This package is experimental. It works great — built for locally Project basis for now at the moment. You have been warned. _(Probably fine though.)_

**A comprehensive Python agent pack for [OpenCode](https://opencode.ai) with 10 skills, 4 subagents, and production-ready FastAPI patterns.**

## Features

- **1 Primary Agent** - `python-expert` with intelligent skill loading
- **4 Specialized Subagents** - Code generation, review, testing, and exploration
- **10 On-Demand Skills** - FastAPI, SQLAlchemy, pytest, asyncio, and more
- **3 Context Files** - Standards, patterns, and security guidelines
- **Production Ready** - Targets Python 3.13+, FastAPI, Pydantic v2, SQLAlchemy 2.0

## Installation

### From npm (Recommended)

```bash
# Install globally
npm install -g python-expert-agent

# Install to current project
python-expert-agent init

# Install globally (for all projects, experimental)
python-expert-agent init --global
```

### Using npx (No install needed)

```bash
npx python-expert-agent init
```

### Manual Installation

Copy the `.opencode` directory and `AGENTS.md` to your project root.

## Quick Start

1. Install the agent pack:
   ```bash
   npm install -g python-expert-agent
   python-expert-agent init
   ```

2. Start OpenCode in your Python project:
   ```bash
   cd /path/to/your/python/project
   opencode
   ```

3. The `python-expert` agent will be automatically detected.

4. Use skills on-demand:
   ```
   skill(name="python-fastapi")
   skill(name="python-backend")
   ```

## Components

### Primary Agent

| Agent | Description |
|-------|-------------|
| `python-expert` | Main agent with skill loading protocol, keyword detection, and task delegation |

### Subagents

| Subagent | Type | Purpose |
|----------|------|---------|
| `python-coder` | general | Code generation and feature implementation |
| `python-reviewer` | general | Code quality and security review |
| `python-tester` | general | Test writing with pytest patterns |
| `python-scout` | explore | Context discovery and file finding |

### Skills

| Skill | Triggers | Purpose |
|-------|----------|---------|
| `python-fundamentals` | `*.py`, `python`, `dataclass` | Core Python 3.13+ patterns |
| `python-fundamentals-313` | `3.13`, `jit`, `free-threading` | Python 3.13+ specific features |
| `python-fastapi` | `fastapi`, `pydantic`, `endpoint` | FastAPI production patterns |
| `python-backend` | `sqlalchemy`, `database`, `orm` | SQLAlchemy 2.0 async patterns |
| `python-testing-general` | `pytest`, `test`, `mock` | pytest fundamentals |
| `python-testing-deep` | `hypothesis`, `property-based` | Advanced testing techniques |
| `python-asyncio` | `async`, `await`, `asyncio` | Async/await patterns |
| `python-type-hints` | `typing`, `mypy`, `pyright` | Type system and validation |
| `python-package-management` | `uv`, `pip`, `pyproject` | UV package manager |
| `python-tooling` | `docker`, `ci`, `cd` | DevOps and CI/CD |

## Usage Examples

### Creating a FastAPI Endpoint

```
skill(name="python-fastapi")

Create a user registration endpoint with:
- Email validation
- Password hashing with bcrypt
- JWT token generation
```

### Writing Tests

```
skill(name="python-testing-general")

Write tests for the UserService class with:
- Happy path scenarios
- Edge cases
- Error conditions
```

### Database Work

```
skill(name="python-backend")

Create an async SQLAlchemy model for:
- User entity with relationships
- Alembic migration
- Repository pattern
```

## Project Structure

```
.opencode/
├── config.json              # Agent selection
├── opencode.json            # Schema reference
├── agent/
│   └── python-expert.md     # Primary agent definition
├── subagents/
│   ├── python-coder.md      # Code generation
│   ├── python-reviewer.md   # Code review
│   ├── python-tester.md     # Test writing
│   └── python-scout.md      # Context discovery
├── skills/                  # 10 Python skills
│   ├── python-fundamentals/
│   ├── python-fastapi/
│   ├── python-backend/
│   └── ...
├── context/
│   ├── navigation.md        # Quick reference
│   └── python/
│       ├── standards.md     # Code quality standards
│       ├── patterns.md      # Common patterns
│       └── security.md      # Security patterns
├── config/
│   └── agent-metadata.json  # Agent registry
└── docs/                    # Documentation
```

## CLI Commands

```bash
python-expert-agent init [path]    # Install to project
python-expert-agent init --global  # Install globally
python-expert-agent init --force   # Overwrite existing
python-expert-agent --version      # Show version
python-expert-agent --help         # Show help
```

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Language | Python | 3.13+ |
| Web Framework | FastAPI | 0.115+ |
| Data Validation | Pydantic | 2.7+ |
| ORM | SQLAlchemy | 2.0 (async) |
| Database | PostgreSQL | 16 |
| Testing | pytest | latest |
| Package Manager | UV | latest |
| Linting | ruff, mypy | latest |

## Documentation

Full documentation is available in `.opencode/docs/`:

- [Overview](./.opencode/docs/overview.md) - System introduction
- [Architecture](./.opencode/docs/architecture.md) - Component relationships
- [Agents](./.opencode/docs/agents.md) - Agent configuration
- [Skills](./.opencode/docs/skills.md) - Skill documentation
- [Workflow](./.opencode/docs/workflow.md) - Development patterns

## Requirements

- [OpenCode](https://opencode.ai) CLI
- Node.js 18+ (for CLI installer)
- Python 3.11+ (for projects using this agent)

## Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see [LICENSE](./LICENSE) file for details.

## Links

- [OpenCode](https://opencode.ai) - The open source AI coding agent
- [OpenCode Docs](https://opencode.ai/docs) - Official documentation
- [npm Package](https://www.npmjs.com/package/python-expert-agent) - npm registry
- [GitHub](https://github.com/amrahman90/python-expert-agent) - Source code

## Acknowledgments

- [OpenCode](https://github.com/anomalyco/opencode) - The amazing AI coding agent
- [Agentic](https://github.com/Cluster444/agentic) - Reference for CLI structure
