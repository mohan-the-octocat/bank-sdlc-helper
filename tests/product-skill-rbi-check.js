const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Product Skill RBI integration tests...');

try {
  const skillPath = path.join(__dirname, '..', 'skills', 'product', 'SKILL.md');

  // Test 1: File should exist
  assert(fs.existsSync(skillPath), 'product/SKILL.md should exist');

  // Test 2: Should include RBI Compliance Checklist
  const content = fs.readFileSync(skillPath, 'utf8');
  assert(content.includes('## RBI Compliance Checklist'), 'Should have RBI Compliance Checklist section');
  assert(content.includes('- [ ] **MFA Mandate:**'), 'Should include MFA mandate');
  assert(content.includes('- [ ] **Customer Consent:**'), 'Should include Customer Consent mandate');
  assert(content.includes('- [ ] **Data Localization:**'), 'Should include Data Localization mandate');

  console.log('All Product Skill RBI tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
