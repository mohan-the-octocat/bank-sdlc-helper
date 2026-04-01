const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running RBI requirements tests...');

try {
  const dbPath = path.join(__dirname, '..', 'context', 'rbi-requirements-db.md');

  // Test 1: File should exist
  assert(fs.existsSync(dbPath), 'rbi-requirements-db.md should exist in context/');

  // Test 2: File should have correct headers
  const content = fs.readFileSync(dbPath, 'utf8');
  assert(content.includes('# RBI Regulatory Requirement Database'), 'Should have correct main header');
  assert(content.includes('## Cyber Security'), 'Should have Cyber Security section');
  assert(content.includes('## Digital Banking'), 'Should have Digital Banking section');
  assert(content.includes('## Outsourcing and Cloud'), 'Should have Outsourcing and Cloud section');

  // Test 3: Should include source references
  assert(content.includes('Source:'), 'Should include source references');

  console.log('All RBI requirements tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
