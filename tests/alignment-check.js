const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running alignment tests...');

try {
  const manifestPath = path.join(__dirname, '..', 'gemini-extension.json');

  // Test 1: gemini-extension.json should exist
  assert(fs.existsSync(manifestPath), 'gemini-extension.json should exist');

  // Test 2: gemini-extension.json should have correct metadata
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  assert(manifest.name === 'bank-sdlc-helper', `Expected name 'bank-sdlc-helper', got '${manifest.name}'`);
  assert(manifest.version === '0.1.0', `Expected version '0.1.0', got '${manifest.version}'`);

  console.log('All alignment tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
