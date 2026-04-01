const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Architecture Solution Command tests...');

try {
  const commandsDir = path.join(__dirname, '..', 'commands');
  const archCmdPath = path.join(commandsDir, 'arch-propose-solution.js');
  
  // Test 1: Command file should exist
  assert(fs.existsSync(archCmdPath), 'arch-propose-solution.js should exist in commands/');

  // Test 2: Command should reference Architecture skill
  const content = fs.readFileSync(archCmdPath, 'utf8');
  assert(content.includes('skills/architecture/SKILL.md'), 'Command should reference Architecture skill');

  console.log('All Architecture Solution Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
