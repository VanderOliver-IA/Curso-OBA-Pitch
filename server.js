// Entrypoint para o Phusion Passenger do cPanel Napoleon
// Delega a execução para o server.js gerado pelo Next.js standalone
const path = require('path');

// Define PORT para o Passenger
process.env.PORT = process.env.PORT || 3000;

// O standalone server.js usa __dirname para encontrar .next/
// Precisamos mudar o diretório de trabalho para a pasta standalone
const standaloneDir = path.join(__dirname, '.next', 'standalone');
process.chdir(standaloneDir);

// Agora carrega o server.js do standalone (que usa __dirname internamente)
require(path.join(standaloneDir, 'server.js'));
