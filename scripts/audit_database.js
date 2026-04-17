import { questionsData } from '../src/questions.js';
import { questionsDataEn } from '../src/questions_en.js';

/**
 * DATABASE AUDIT SCRIPT
 * Purpose: Ensures synchronization between PT and EN databases
 * and validates the English schema and translation readiness.
 */

const audit = {
  totalPT: questionsData.length,
  totalEN: questionsDataEn.length,
  duplicatesEN: [],
  missingInEN: [],
  schemaErrors: [],
  potentialPtMarkers: [],
  logicErrors: []
};

const enIds = new Set();
// More specific markers to avoid false positives like "Qualify"
const ptMarkers = [
    'Você ', 'Qual ', 'Cenário ', 'foi designado', 'abordagem ', 
    'está correto', 'correta', 'incorreta', 'seguinte', 'explique'
];

questionsDataEn.forEach((q) => {
  // Check for duplicates
  if (enIds.has(q.id)) {
    audit.duplicatesEN.push(q.id);
  }
  enIds.add(q.id);

  // Check schema
  const required = ['id', 'domain', 'difficulty', 'text', 'options', 'correctAnswer', 'explanation'];
  required.forEach(prop => {
    if (q[prop] === undefined) {
      audit.schemaErrors.push(`${q.id} missing ${prop}`);
    }
  });

  // Check logic (correctAnswer bounds)
  if (q.options && (q.correctAnswer < 0 || q.correctAnswer >= q.options.length)) {
    audit.logicErrors.push(`${q.id} invalid correctAnswer (${q.correctAnswer} for ${q.options.length} options)`);
  }

  // Check for PT markers in text or explanation
  const textContent = JSON.stringify(q);
  ptMarkers.forEach(marker => {
    if (textContent.includes(marker)) {
        audit.potentialPtMarkers.push(`${q.id} contains PT marker: ${marker}`);
    }
  });
});

// Sync check
const ptIds = questionsData.map(q => q.id);
ptIds.forEach(id => {
  if (!enIds.has(id)) {
    audit.missingInEN.push(id);
  }
});

console.log('--- DATABASE AUDIT RESULTS ---');
console.log(JSON.stringify(audit, null, 2));
console.log('------------------------------');

if (audit.schemaErrors.length === 0 && audit.logicErrors.length === 0 && audit.missingInEN.length === 0) {
    console.log('✅ Integrity Check Passed: Databases are synchronized and structurally sound.');
} else {
    console.log('❌ Integrity Check Failed: Please review the audit results above.');
}
