import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.resolve(__dirname, 'dist');

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  // Regex to find relative imports that don't have a .js, .cjs, or .mjs extension
  // This regex looks for 'from "./path/to/module"' or 'from './path/to/module'
  // And it's a relative path (starts with ./)
  const regex = /(from\s+["|'](\.\/[^"|']+))["|']/g;

  content = content.replace(regex, (match, p1, p2) => {
    // Check if the path already has an extension
    if (!p2.endsWith('.js') && !p2.endsWith('.cjs') && !p2.endsWith('.mjs')) {
      return `${p1}.js"`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.js')) {
      fixImports(filePath);
    }
  }
}

walkDir(distPath);
