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

  // Test 3: contextFileName should be GEMINI.md
  assert(manifest.contextFileName === 'GEMINI.md', `Expected contextFileName 'GEMINI.md', got '${manifest.contextFileName}'`);

  // Test 4: All SKILL.md should have frontmatter
  const skillsPath = path.join(__dirname, '..', 'skills');
  const teams = fs.readdirSync(skillsPath).filter(f => fs.statSync(path.join(skillsPath, f)).isDirectory());
  
  teams.forEach(team => {
    const skillPath = path.join(skillsPath, team, 'SKILL.md');
    if (fs.existsSync(skillPath)) {
      const content = fs.readFileSync(skillPath, 'utf8');
      const lines = content.split('\n');
      assert(lines[0] === '---', `Skill '${team}/SKILL.md' should start with '---'`);
      const closingIndex = lines.indexOf('---', 1);
      assert(closingIndex > 0, `Skill '${team}/SKILL.md' should have a closing '---'`);
      const frontmatter = lines.slice(1, closingIndex).join('\n');
      assert(frontmatter.includes('name:'), `Skill '${team}/SKILL.md' frontmatter should include 'name:'`);
      assert(frontmatter.includes('description:'), `Skill '${team}/SKILL.md' frontmatter should include 'description:'`);
    }
  });

  // Test 5: Standard directories should exist
  const requiredDirs = ['commands', 'mcp-servers'];
  requiredDirs.forEach(dir => {
    const dirPath = path.join(__dirname, '..', dir);
    assert(fs.existsSync(dirPath), `Directory '${dir}/' should exist`);
    assert(fs.statSync(dirPath).isDirectory(), `'${dir}' should be a directory`);
  });

  console.log('All alignment tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
