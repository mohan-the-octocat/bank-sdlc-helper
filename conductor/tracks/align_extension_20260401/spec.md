# Specification - Validate and Align Extension Structure

## Overview
This track focuses on bringing the `bank-sdlc-helper` extension into full compliance with the official Gemini CLI extension standards documented at `https://geminicli.com/docs/extensions` and `context/building-extensions.md`.

## Functional Requirements
- **Extension Manifest**: Create a `gemini-extension.json` file to serve as the official manifest for the extension.
- **Skill Manifests Update**: Modify all existing `skills/*/SKILL.md` files to include the required YAML frontmatter (`name` and `description`).
- **Context Integration**: Register the existing `GEMINI.md` as the `contextFileName` in the `gemini-extension.json` manifest.
- **Directory Scaffolding**: Create the following placeholder directories to align with the standard extension structure:
    - `commands/`
    - `mcp-servers/`

## Non-Functional Requirements
- **Standards Compliance**: Ensure all file paths and naming conventions match the provided documentation.
- **Maintainability**: Maintain the modular structure of team-specific skills.

## Acceptance Criteria
- `gemini-extension.json` exists and is valid.
- Every `SKILL.md` file in `skills/` contains a correctly formatted YAML frontmatter.
- `GEMINI.md` is successfully linked in the manifest.
- `commands/` and `mcp-servers/` directories exist.
- The project passes a basic structure validation (e.g., all files are in their expected locations).

## Out of Scope
- Implementing actual tools or commands within the new directories.
- Registering the extension in a public gallery.
