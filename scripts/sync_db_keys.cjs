const fs = require('fs');
const path = 'c:/Users/lucas.oliveira/OneDrive - M I Montreal Informática SA/Documentos/Nova pasta/simulador-pl200-premium/src/questions_en.js';
let content = fs.readFileSync(path, 'utf8');

// Rename keys inside the English database to match Simulator.jsx logic
content = content.replace(/"straightTalk"\s*:/g, '"papoReto":');
content = content.replace(/"proTip"\s*:/g, '"puloDoGato":');
content = content.replace(/"pitfalls"\s*:/g, '"cascasDeBanana":');
content = content.replace(/"goldenTip"\s*:/g, '"dicaOuro":');

// Ensure correctAnswer inside explanation is renamed to respostaCerta
// We use a regex that looks specifically for the string value case to distinguish from logic correctAnswer (integer)
content = content.replace(/"correctAnswer"\s*:\s*"/g, '"respostaCerta": "');

fs.writeFileSync(path, content, 'utf8');
console.log('Successfully renamed keys in questions_en.js');
