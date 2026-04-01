const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Arch/Eng TOML Command tests...');

try {
  const archCmdPath = path.join(__dirname, '..', 'commands', 'arch', 'propose-solution.toml');
  const engCmdPath = path.join(__dirname, '..', 'commands', 'eng', 'review-security.toml');
  
  // Test 1: Files should exist
  assert(fs.existsSync(archCmdPath), 'commands/arch/propose-solution.toml should exist');
  assert(fs.existsSync(engCmdPath), 'commands/eng/review-security.toml should exist');

  // Test 2: Should be valid TOML structure
  const archContent = fs.readFileSync(archCmdPath, 'utf8');
  assert(archContent.includes('prompt = """'), 'Arch command should define a multiline prompt');
  assert(archContent.includes('skills/architecture/SKILL.md'), 'Arch prompt should reference Architecture skill');

  const engContent = fs.readFileSync(engCmdPath, 'utf8');
  assert(engContent.includes('prompt = """'), 'Eng command should define a multiline prompt');
  assert(engContent.includes('skills/engineering/SKILL.md'), 'Eng prompt should reference Engineering skill');

  console.log('All Arch/Eng TOML Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
