# Tech Stack - Bank SDLC Gemini Extension (Aligned)

## Core Platform
- **Gemini CLI Extension:** Built as a standard, installable NPM package following the [official documentation](https://geminicli.com/docs/extensions/).

## Project Structure
- **NPM Package:** Managed via `package.json` for dependencies and scripts.
- **Extension Manifest:** Managed via `gemini-extension.json` for CLI discovery and configuration.
- **Skills-Based Architecture:** Modular team skills located in the `skills/` directory, each defined by a `SKILL.md` file for behavioral mandates and expert guidance.
- **MCP Integration:** Uses the Model Context Protocol for connecting the CLI to external banking services and internal tools.

## Development & Runtime
- **Node.js (LTS):** The primary runtime environment for the extension and its associated scripts.
- **TypeScript & TOML:** TypeScript for building robust, type-safe MCP servers and logic; TOML for defining persona-specific CLI command prompts.

## Key Files
- **`package.json`:** Manifest for the extension package.
- **`gemini-extension.json`:** Official manifest for Gemini CLI extension metadata and settings.
- **`GEMINI.md`:** Project-level context and foundational mandates.
- **`skills/*/SKILL.md`:** Expert procedural guidance for each SDLC team (Product, Design, BSG, Architecture, Engineering, QA).
- **`.geminiignore`:** To manage project context and exclude irrelevant files.