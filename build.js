const fs = require('fs');
fs.mkdirSync('dist', { recursive: true });
fs.writeFileSync('dist/index.html', '<h1>Hello from CI</h1>');
console.log('Build complete');
