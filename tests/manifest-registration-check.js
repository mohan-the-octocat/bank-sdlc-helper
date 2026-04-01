const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Manifest Registration tests...');

try {
  const manifestPath = path.join(__dirname, '..', 'gemini-extension.json');
  assert(fs.existsSync(manifestPath), 'gemini-extension.json should exist');

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const commands = manifest.commands || {};

  const requiredCommands = [
    'product:draft-brd',
    'bsg:check-compliance',
    'arch:propose-solution',
    'eng:review-security',
    'qa:generate-tests',
    'release:check-exit-strategy'
  ];

  requiredCommands.forEach(cmd => {
    assert(commands[cmd], `Command '${cmd}' should be registered in manifest`);
    assert(commands[cmd].includes('.toml'), `Registration for '${cmd}' should point to a .toml file`);
  });

  console.log('All Manifest Registration tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
