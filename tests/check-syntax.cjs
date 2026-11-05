// Checks that every inline script in index.html parses.
const fs = require('fs'), path = require('path'), vm = require('vm');
const html = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
let bad = 0; scripts.forEach((src, i) => { try { new vm.Script(src, { filename: `index.html script ${i + 1}` }); } catch (e) { bad++; console.error(`Script ${i + 1}: ${e.message}`); } });
if (!scripts.length) { console.error('No scripts found in index.html'); process.exit(1); }
if (bad) process.exit(1); console.log(`All ${scripts.length} scripts parse.`);
