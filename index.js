var SystemJS = require('systemjs');

// loads './app.js' from the current directory
SystemJS.config({
  transpiler: 'typescript'
})
SystemJS.import('./src/main.ts').then(m => console.log(m));
