const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Product TOML Command tests...');

try {
  const commandPath = path.join(__dirname, '..', 'commands', 'product', 'draft-brd.toml');
  
  // Test 1: Command file should exist
  assert(fs.existsSync(commandPath), 'commands/product/draft-brd.toml should exist');

  // Test 2: Should be valid TOML structure (basic check)
  const content = fs.readFileSync(commandPath, 'utf8');
  assert(content.includes('prompt = """'), 'Command should define a multiline prompt');
  assert(content.includes('skills/product/SKILL.md'), 'Prompt should reference Product skill');

  console.log('All Product TOML Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
