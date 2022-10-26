const execSync = require('child_process').execSync;
// import { execSync } from 'child_process';  // replace ^ if using ES modules

const output = execSync('npm install -D tailwindcss', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
const output = execSync('npx tailwindcss init', { encoding: 'utf-8' });  // the default is 'buffer'
console.log('Output was:\n', output);
