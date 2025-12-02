const fs = require('fs');
const path = require('path');

const dayName = process.argv[2];

if (!dayName) {
  console.error('Error: Please provide a day name as an argument');
  console.error('Usage: npm run generate <dayName>');
  process.exit(1);
}

const dayFolder = path.join(process.cwd(), dayName);

// Create the folder
if (fs.existsSync(dayFolder)) {
  console.error(`Error: Folder "${dayName}" already exists`);
  process.exit(1);
}

fs.mkdirSync(dayFolder);

// Create the two empty files
fs.writeFileSync(path.join(dayFolder, `${dayName}.ts`), '');
fs.writeFileSync(path.join(dayFolder, 'input.txt'), '');

console.log(` Created folder: ${dayName}`);
console.log(` Created file: ${dayName}/${dayName}.ts`);
console.log(` Created file: ${dayName}/input.txt`);
