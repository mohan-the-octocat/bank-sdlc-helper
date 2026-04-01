const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running QA/Release TOML Command tests...');

try {
  const qaCmdPath = path.join(__dirname, '..', 'commands', 'qa', 'generate-tests.toml');
  const releaseCmdPath = path.join(__dirname, '..', 'commands', 'release', 'check-exit-strategy.toml');
  
  // Test 1: Files should exist
  assert(fs.existsSync(qaCmdPath), 'commands/qa/generate-tests.toml should exist');
  assert(fs.existsSync(releaseCmdPath), 'commands/release/check-exit-strategy.toml should exist');

  // Test 2: Should be valid TOML structure
  const qaContent = fs.readFileSync(qaCmdPath, 'utf8');
  assert(qaContent.includes('prompt = """'), 'QA command should define a multiline prompt');
  assert(qaContent.includes('skills/qa/SKILL.md'), 'QA prompt should reference QA skill');

  const releaseContent = fs.readFileSync(releaseCmdPath, 'utf8');
  assert(releaseContent.includes('prompt = """'), 'Release command should define a multiline prompt');
  assert(releaseContent.includes('skills/release-engineering/SKILL.md'), 'Release prompt should reference Release skill');

  console.log('All QA/Release TOML Command tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
