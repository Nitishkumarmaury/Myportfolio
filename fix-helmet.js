const fs = require('fs');
const path = require('path');

const pagesDir = './src/pages';
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.js'));

files.forEach(file => {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove Helmet import
  content = content.replace(/import { Helmet } from 'react-helmet-async';\n/g, '');
  
  // Remove Helmet JSX blocks
  content = content.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*/g, '');
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Fixed: ${file}`);
});

console.log('All files fixed!');
