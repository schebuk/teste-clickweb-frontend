const { spawn } = require('child_process');
const chokidar = require('chokidar');

// Inicia React
const react = spawn('npm', ['start'], { stdio: 'inherit' });

// Observa mudanças
const watcher = chokidar.watch('./src', {
  ignored: /node_modules/,
  persistent: true
});

watcher.on('change', (path) => {
  console.log(`✅ ${path} alterado - Recarregando...`);
  // Força refresh no navegador via script
});

process.on('SIGINT', () => {
  react.kill();
  watcher.close();
  process.exit();
});