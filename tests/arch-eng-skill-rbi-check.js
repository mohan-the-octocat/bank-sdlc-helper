const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Arch/Eng Skill RBI integration tests...');

try {
  const archPath = path.join(__dirname, '..', 'skills', 'architecture', 'SKILL.md');
  const engPath = path.join(__dirname, '..', 'skills', 'engineering', 'SKILL.md');

  // Test 1: Files should exist
  assert(fs.existsSync(archPath), 'architecture/SKILL.md should exist');
  assert(fs.existsSync(engPath), 'engineering/SKILL.md should exist');

  // Test 2: Architecture Skill should include RBI mandates
  const archContent = fs.readFileSync(archPath, 'utf8');
  assert(archContent.includes('## RBI Architectural Mandates'), 'Architecture should have RBI Architectural Mandates section');
  assert(archContent.includes('**Data Residency:**'), 'Architecture should include Data Residency mandate');
  assert(archContent.includes('**Auditability:**'), 'Architecture should include Auditability mandate');

  // Test 3: Engineering Skill should include RBI mandates
  const engContent = fs.readFileSync(engPath, 'utf8');
  assert(engContent.includes('## RBI Implementation Mandates'), 'Engineering should have RBI Implementation Mandates section');
  assert(engContent.includes('**Secure Coding Lifecycle:**'), 'Engineering should include Secure Coding mandate');
  assert(engContent.includes('**Real-time Threat Defense:**'), 'Engineering should include Transaction Monitoring mandate');

  console.log('All Arch/Eng Skill RBI tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
