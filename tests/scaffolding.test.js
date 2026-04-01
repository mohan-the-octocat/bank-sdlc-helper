const fs = require('fs');
const path = require('path');

describe('Project Scaffolding - package.json', () => {
  const packageJsonPath = path.join(__dirname, '..', 'package.json');

  test('package.json should exist', () => {
    expect(fs.existsSync(packageJsonPath)).toBe(true);
  });

  test('package.json should have correct metadata', () => {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    expect(packageJson.name).toBe('bank-sdlc-helper');
    expect(packageJson.version).toBe('0.1.0');
    expect(packageJson.description).toContain('Bank SDLC');
  });
});
