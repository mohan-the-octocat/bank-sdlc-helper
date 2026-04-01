# Bank SDLC Helper - Gemini CLI Extension

The **Bank SDLC Helper** is a specialized Gemini CLI Extension designed to automate and streamline the Software Development Life Cycle (SDLC) within the banking sector. It provides dedicated skills and commands for cross-functional teams, ensuring regulatory compliance (RBI), architectural integrity, and secure engineering practices.

## 🚀 Vision
To empower banking software teams with AI-assisted workflows that bridge the gap between business requirements, technical design, and regulatory mandates, maintaining a unified source of truth throughout the project.

## ✨ Key Features
- **Persona-Specific Skills:** Expert guidance tailored for Product, Design, BSG, Architecture, Engineering, QA, and Release Engineering.
- **Automated Artifact Drafting:** Quickly generate BRDs, functional specs, solution proposals, and test cases.
- **RBI Compliance Guardrails:** Built-in checks for Reserve Bank of India (RBI) mandates including Cyber Security, Digital Banking, and Data Localization.
- **Context-Aware Reasoning:** Dynamically leverages your project's `conductor/` context and local files for highly relevant outputs.

## 🛠 Core Commands
Once installed, you can invoke persona-specific actions using the following patterns:

### Product & Business Analysis (BSG)
- `/product:draft-brd`: Drafts a Business Requirement Document (BRD) based on the current product vision.
- `/bsg:check-compliance`: Validates functional specifications against RBI guidelines.

### Architecture & Engineering
- `/arch:propose-solution`: Suggests technical components aligned with Enterprise Preferred tools and RBI residency rules.
- `/eng:review-security`: Performs a high-level security review of implementation plans and coding standards.

### QA & Release
- `/qa:generate-tests`: Automatically creates functional test cases from specifications.
- `/release:check-exit-strategy`: Verifies cloud exit strategy documentation for RBI compliance.

## 📦 Installation & Setup

1. **Link the Extension:**
   From the root of this repository, link it to your Gemini CLI installation:
   ```bash
   gemini extensions link .
   ```

2. **Verify Context:**
   The extension uses `GEMINI.md` for foundational mandates. Ensure your project is initialized with the [Conductor](https://conductor.dev) methodology for the best experience.

## 🏗 Project Structure
- `commands/`: Persona-specific CLI command prompts defined in TOML.
- `skills/`: Expert procedural guidance for each SDLC team (`SKILL.md`).
- `context/`: Centralized knowledge base, including the `rbi-requirements-db.md` and compliance checklists.
- `gemini-extension.json`: The official extension manifest.

## 🛡 Regulatory Compliance
This extension is specifically tuned for Indian banking regulations (RBI). It incorporates mandates from:
- **RBI Master Direction on IT Governance, Risk, Controls and Assurance Practices (2023)**
- **RBI Digital Payment Authentication & Banking Channels Directions (2025)**
- **RBI Master Direction on Outsourcing of IT Services (2023)**

## 🛠 Development
The extension is built using:
- **Runtime:** Node.js (LTS)
- **Logic:** TypeScript & TOML
- **Methodology:** Spec-driven development using Conductor

To run local structure validation:
```bash
node tests/final-alignment-check.js
```

---
*Maintained by the Bank SDLC Engineering Team.*
