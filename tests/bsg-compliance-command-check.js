const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running BSG Compliance Command tests...');

try {
  const commandsDir = path.join(__dirname, '..', 'commands');
  const bsgCmdPath = path.join(commandsDir, 'bsg-check-compliance.js');
  
  // Test 1: Command file should exist
  assert(fs.existsSync(bsgCmdPath), 'bsg-check-compliance.js should exist in commands/');

  // Test 2: Command should reference BSG skill and RBI DB
  const content = fs.readFileSync(bsgCmdPath, 'utf8');
  assert(content.includes('skills/bsg/SKILL.md'), 'Command should reference BSG skill');
  assert(content.includes('rbi-requirements-db.md'), 'Command should reference RBI database');

  console.log('All BSG Compliance Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
