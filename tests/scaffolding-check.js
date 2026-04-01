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

  // Test 3: GEMINI.md should exist
  const geminiMdPath = path.join(__dirname, '..', 'GEMINI.md');
  assert(fs.existsSync(geminiMdPath), 'GEMINI.md should exist');
  const geminiMd = fs.readFileSync(geminiMdPath, 'utf8');
  assert(geminiMd.includes('# Bank SDLC Helper Context'), 'GEMINI.md should have correct header');

  // Test 4: Skills directory structure should exist
  const teams = ['product', 'design', 'bsg', 'architecture', 'engineering', 'qa', 'release-engineering'];
  const skillsPath = path.join(__dirname, '..', 'skills');
  assert(fs.existsSync(skillsPath), 'skills directory should exist');
  teams.forEach(team => {
    const teamPath = path.join(skillsPath, team);
    assert(fs.existsSync(teamPath), `Team directory '${team}' should exist`);
  });

  console.log('All scaffolding tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
