# Specification - Understand RBI Guidelines around Application Development

## Overview
This track involves researching and incorporating relevant RBI (Reserve Bank of India) guidelines into the `bank-sdlc-helper` extension. The goal is to ensure that all SDLC artifacts and processes managed by the extension are compliant with Indian banking regulations.

## Functional Requirements
- **Regulatory Research**: Compile key requirements from RBI circulars regarding Cyber Security, Digital Banking, and Outsourcing/Cloud Services.
- **Skill Integration**: Integrate specific compliance mandates into the existing modular skills:
    - **Product Team**: Add regulatory checklists for BRDs.
    - **Engineering/Architecture**: Add security and data residency mandates.
- **Deliverables**:
    - **Checklists**: Create actionable compliance checklists for various SDLC phases.
    - **Validation Tools**: (Placeholder) Define logic for automated artifact validation against RBI rules.
    - **Reference Docs**: Provide modular reference content for quick regulatory lookups.

## Non-Functional Requirements
- **Traceability**: Every guideline integrated must reference its source RBI circular.
- **Accuracy**: Ensure the most recent and relevant guidelines are prioritized.

## Acceptance Criteria
- A compiled set of RBI requirements is integrated into the extension's `skills/` directory.
- Team-specific `SKILL.md` files are updated with RBI-specific behavioral mandates.
- A "Compliance Checklist" is available for at least two SDLC teams.
- All guidelines include source references.

## Out of Scope
- Full legal certification of the software.
- Implementing real-time monitoring of RBI circular updates.
