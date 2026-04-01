const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running scaffolding tests...');

try {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');

  // Test 1: package.json should exist
  assert(fs.existsSync(packageJsonPath), 'package.json should exist');

  // Test 2: package.json should have correct metadata
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  assert(packageJson.name === 'bank-sdlc-helper', `Expected name 'bank-sdlc-helper', got '${packageJson.name}'`);
  assert(packageJson.version === '0.1.0', `Expected version '0.1.0', got '${packageJson.version}'`);
  assert(packageJson.description.includes('Bank SDLC'), `Description should contain 'Bank SDLC', got '${packageJson.description}'`);

  console.log('All scaffolding tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
