const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Final Alignment tests...');

try {
  const skillsPath = path.join(__dirname, '..', 'skills');
  const teams = ['product', 'design', 'bsg', 'architecture', 'engineering', 'qa', 'release-engineering'];
  
  teams.forEach(team => {
    const skillPath = path.join(skillsPath, team, 'SKILL.md');
    assert(fs.existsSync(skillPath), `Skill manifest '${team}/SKILL.md' should exist`);
    const content = fs.readFileSync(skillPath, 'utf8');
    assert(content.includes('RBI'), `Skill manifest '${team}/SKILL.md' should contain 'RBI' mandates`);
  });

  console.log('All Final Alignment tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
