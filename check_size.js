import fs from 'fs';
import path from 'path';

// read first few bytes to find size? Or just use sharp if installed.
console.log('File size:', fs.statSync('public/images/compressed/hero_illustration_1777894862105.webp').size);
