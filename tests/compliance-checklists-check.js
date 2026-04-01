const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Compliance Checklists tests...');

try {
  const checklistsDir = path.join(__dirname, '..', 'context', 'checklists');

  // Test 1: Directory should exist
  assert(fs.existsSync(checklistsDir), 'context/checklists/ directory should exist');

  // Test 2: Phase-specific checklists should exist
  const phases = ['product-definition', 'architecture-design', 'engineering-implementation'];
  phases.forEach(phase => {
    const filePath = path.join(checklistsDir, `rbi-compliance-${phase}.md`);
    assert(fs.existsSync(filePath), `${filePath} should exist`);
    const content = fs.readFileSync(filePath, 'utf8');
    assert(content.includes('# RBI Compliance Checklist:'), `Should have correct header for ${phase}`);
    assert(content.includes('Source References'), `Should include source references for ${phase}`);
  });

  console.log('All Compliance Checklists tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
