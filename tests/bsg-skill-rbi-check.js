const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running BSG Skill RBI integration tests...');

try {
  const skillPath = path.join(__dirname, '..', 'skills', 'bsg', 'SKILL.md');

  // Test 1: File should exist
  assert(fs.existsSync(skillPath), 'bsg/SKILL.md should exist');

  // Test 2: Should include RBI Compliance section
  const content = fs.readFileSync(skillPath, 'utf8');
  assert(content.includes('## RBI Compliance'), 'Should have RBI Compliance section');
  assert(content.includes('Functional Scenarios'), 'Should mention Functional Scenarios');
  assert(content.includes('UAT'), 'Should mention UAT');

  console.log('All BSG Skill RBI tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
