# Specification - Update Skill Files with RBI Guidelines

## Overview
This track involves systematically updating all team-specific skill manifest files (`skills/*/SKILL.md`) within the `bank-sdlc-helper` extension to incorporate high-level mandates from the recently compiled RBI Regulatory Requirement Database.

## Functional Requirements
- **Comprehensive Update**: Integrate RBI guidelines into all team skills:
    - **Business Skills**: Product Team, Design Team, BSG.
    - **Technical Skills**: Architecture Team, Engineering Team.
    - **Validation Skills**: QA/Testing Team, Release Engineering Team.
- **Guideline Mapping**: Map relevant themes from the RBI database to specific team responsibilities:
    - **Cyber Security/IT Governance**: Architecture, Engineering, QA.
    - **Digital Banking**: Product, Design, BSG.
    - **Outsourcing/Cloud**: Architecture, Release Engineering.
- **Depth**: Focus on high-level behavioral mandates and awareness rather than detailed checklists (which are maintained separately).

## Non-Functional Requirements
- **Consistency**: Ensure a uniform formatting style for RBI mandates across all skill files.
- **Traceability**: Link mandates to the appropriate RBI source where applicable.

## Acceptance Criteria
- All 7 team skill manifest files (`skills/*/SKILL.md`) are updated with an "RBI Compliance" or similar section.
- Updates reflect the high-level mandates relevant to each team's SDLC function.
- A keyword search for "RBI" returns hits in every team skill directory.

## Out of Scope
- Updating the standalone phase-specific checklists.
- Implementing automated enforcement logic for these mandates.
