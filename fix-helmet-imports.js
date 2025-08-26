const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Split into lines
  let lines = content.split('\n');
  
  // Filter out lines containing Helmet import
  lines = lines.filter(line => !line.includes("import { Helmet } from 'react-helmet-async'"));
  
  // Join back
  content = lines.join('\n');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${file}`);
});

console.log('All Helmet imports removed!');
