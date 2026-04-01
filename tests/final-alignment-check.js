const fs = require('fs');
const path = require('path');

function assert(condition, message) {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

console.log('Running Final Traceability and Coverage tests...');

try {
  const rootDir = path.join(__dirname, '..');
  
  // 1. Check SKILL.md files for RBI sections and references
  const skillFiles = [
    'skills/product/SKILL.md',
    'skills/architecture/SKILL.md',
    'skills/engineering/SKILL.md'
  ];
  
  skillFiles.forEach(file => {
    const fullPath = path.join(rootDir, file);
    assert(fs.existsSync(fullPath), `${file} should exist`);
    const content = fs.readFileSync(fullPath, 'utf8');
    assert(content.includes('RBI'), `${file} should contain 'RBI' mandates`);
    assert(content.includes('RBI Master Direction') || content.includes('RBI Data Localization') || content.includes('RBI Digital Banking') || content.includes('RBI Fraud Protection'), `${file} should have specific RBI source references`);
  });

  // 2. Check checklists for source references
  const checklistDir = path.join(rootDir, 'context', 'checklists');
  const checklistFiles = fs.readdirSync(checklistDir);
  checklistFiles.forEach(file => {
    const content = fs.readFileSync(path.join(checklistDir, file), 'utf8');
    assert(content.includes('Source References'), `${file} should include source references`);
  });

  // 3. Check Requirement DB for consistency
  const dbPath = path.join(rootDir, 'context', 'rbi-requirements-db.md');
  const dbContent = fs.readFileSync(dbPath, 'utf8');
  const themes = ['Cyber Security', 'Digital Banking', 'Outsourcing and Cloud'];
  themes.forEach(theme => {
    assert(dbContent.includes(`## ${theme}`), `Requirement DB should cover ${theme}`);
  });

  console.log('All Traceability and Coverage tests passed!');
} catch (error) {
  console.error('Test FAILED:', error.message);
  process.exit(1);
}
