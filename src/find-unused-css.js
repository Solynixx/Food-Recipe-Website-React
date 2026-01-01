// Usage: node find-unused-css.js /path/to/Shop.css /path/to/source-dir
// Example: node find-unused-css.js src/shop/Shop.css src

const fs = require('fs');
const path = require('path');

if (process.argv.length < 4) {
  console.error('Usage: node find-unused-css.js /path/to/cssfile /path/to/source-dir');
  process.exit(1);
}

const cssFile = process.argv[2];
const sourceDir = process.argv[3];

function readFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      readFiles(p, files);
    } else if (/\.(js|jsx|ts|tsx|html|css|md)$/.test(ent.name)) {
      files.push(p);
    }
  }
  return files;
}

function extractClassSelectors(cssText) {
  // basic regexp to get .class-name occurrences (skips pseudo/selectors after colon)
  const re = /\.([a-zA-Z0-9_-]+)(?=[\s\.,:\{\[])/g;
  const set = new Set();
  let m;
  while ((m = re.exec(cssText)) !== null) set.add(m[1]);
  return Array.from(set).sort();
}

const cssText = fs.readFileSync(cssFile, 'utf8');
const classes = extractClassSelectors(cssText);

const files = readFiles(sourceDir);
const content = files.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

const unused = [];
for (const cls of classes) {
  const re = new RegExp(`class(Name)?=\\s*["'\`][^"'\`]*\\b${cls}\\b|\\b${cls}\\b`, 'i');
  // crude: check for className="...cls..." OR any mention of the token (for HTML, CSS modules etc)
  if (!re.test(content)) unused.push(cls);
}

console.log('Scanned CSS file:', cssFile);
console.log('Searched source directory:', sourceDir);
console.log('Total classes found in CSS:', classes.length);
console.log('Potentially unused classes:', unused.length);
console.log(unused.join('\n') || '(none)');