const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running QA Skill RBI integration tests...');

try {
  const skillPath = path.join(__dirname, '..', 'skills', 'qa', 'SKILL.md');

  // Test 1: File should exist
  assert(fs.existsSync(skillPath), 'qa/SKILL.md should exist');

  // Test 2: Should include RBI Compliance section
  const content = fs.readFileSync(skillPath, 'utf8');
  assert(content.includes('## RBI Compliance'), 'Should have RBI Compliance section');
  assert(content.includes('Cyber Security'), 'Should mention Cyber Security');
  assert(content.includes('SAST/DAST'), 'Should mention SAST/DAST');

  console.log('All QA Skill RBI tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
