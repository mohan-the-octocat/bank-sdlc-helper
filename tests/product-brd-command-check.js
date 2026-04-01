const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Product BRD Command tests...');

try {
  // Mock command execution logic
  // In a real extension, this would involve the gemini-cli SDK
  // For now, we verify the placeholder implementation logic exists
  
  const commandsDir = path.join(__dirname, '..', 'commands');
  assert(fs.existsSync(commandsDir), 'commands/ directory should exist');

  const productCmdPath = path.join(commandsDir, 'product-draft-brd.js');
  
  // Test 1: Command file should exist (failing test first)
  assert(fs.existsSync(productCmdPath), 'product-draft-brd.js should exist in commands/');

  // Test 2: Command should reference the correct skill
  const content = fs.readFileSync(productCmdPath, 'utf8');
  assert(content.includes('skills/product/SKILL.md'), 'Command should reference Product skill');
  assert(content.includes('BRD'), 'Command should contain BRD drafting logic');

  console.log('All Product BRD Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
