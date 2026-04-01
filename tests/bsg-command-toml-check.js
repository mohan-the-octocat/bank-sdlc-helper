const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running BSG TOML Command tests...');

try {
  const commandPath = path.join(__dirname, '..', 'commands', 'bsg', 'check-compliance.toml');
  
  // Test 1: Command file should exist
  assert(fs.existsSync(commandPath), 'commands/bsg/check-compliance.toml should exist');

  // Test 2: Should be valid TOML structure (basic check)
  const content = fs.readFileSync(commandPath, 'utf8');
  assert(content.includes('prompt = """'), 'Command should define a multiline prompt');
  assert(content.includes('skills/bsg/SKILL.md'), 'Prompt should reference BSG skill');
  assert(content.includes('context/rbi-requirements-db.md'), 'Prompt should reference RBI database');

  console.log('All BSG TOML Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
