# Initial Concept

a Gemini CLI Extension that incorporates the skills for the various teams outlined in the file bank-sdlc-workflow.md. I'll be invoking this extension within other project during the Conductor Implement phase.

# Product Guide - Bank SDLC Gemini Extension

## Vision
A comprehensive Gemini CLI Extension designed to streamline and automate the Bank's Software Development Life Cycle (SDLC) by providing dedicated, high-context skills for every team involved in the process.

## Target Audience
- **Banking Developers:** Engineers building regulated software within the bank's ecosystem.
- **Conductor Teams:** Cross-functional units using the Conductor methodology for project execution.

## Key Features
- **Team-Specific Skills:** Specialized modules for Product Management, Design, Business Analysis (BSG), Architecture, Engineering, and QA, each aware of their unique responsibilities.
- **Artifact Generation:** Automated drafting of key SDLC documents (BRDs, Functional Specs, Solution Architecture, Test Cases) based on project context.
- **Compliance & Regulatory Guardrails:** Integrated checks to ensure all requirements meet banking standards and regulations from the start.
- **Hybrid Invocation:** Flexible use via stand-alone CLI commands or as seamless hooks within the `conductor:implement` phase.

## Operational Model
- **AI-Assisted Development:** Employs advanced AI to perform high-volume drafting and analysis, always requiring human-in-the-loop verification and final approval.
- **Project-Aware Context:** Dynamically reads and updates the local project's `conductor/` directory to maintain a unified source of truth.