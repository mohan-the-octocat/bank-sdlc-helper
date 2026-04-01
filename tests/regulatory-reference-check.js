const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Regulatory Reference tests...');

try {
  const refPath = path.join(__dirname, '..', 'context', 'rbi-regulatory-reference.md');

  // Test 1: File should exist
  assert(fs.existsSync(refPath), 'rbi-regulatory-reference.md should exist in context/');

  // Test 2: File should have correct headers
  const content = fs.readFileSync(refPath, 'utf8');
  assert(content.includes('# RBI Regulatory Quick Reference'), 'Should have correct main header');
  assert(content.includes('## Frequently Asked Questions'), 'Should have FAQ section');

  console.log('All Regulatory Reference tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
