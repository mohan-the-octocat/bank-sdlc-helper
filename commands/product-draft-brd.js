/**
 * Command: bank-sdlc:product:draft-brd
 * Description: Drafts a Business Requirement Document (BRD) based on project context and RBI guidelines.
 */

const fs = require('fs');
const path = require('path');

async function draftBrd(context) {
  console.log('Drafting BRD using Product Team skill...');
  
  // 1. Load Product Skill
  const skillPath = path.join(__dirname, '..', 'skills/product/SKILL.md');
  const skill = fs.readFileSync(skillPath, 'utf8');

  // 2. Load RBI Requirements
  const rbiDbPath = path.join(__dirname, '..', 'context', 'rbi-requirements-db.md');
  const rbiDb = fs.readFileSync(rbiDbPath, 'utf8');

  // 3. Logic to generate BRD
  // In a real implementation, this would call the Gemini API with the skill and context
  const brdTemplate = `
# Business Requirement Document (BRD)

## Project Overview
Derived from product.md context...

## Regulatory Compliance (RBI)
Integrated from ${rbiDbPath}...

## Team Guidance
Following mandates from ${skillPath}...
  `;

  return brdTemplate;
}

module.exports = draftBrd;
