const { io } = require('socket.io-client');

// Connectez-vous au serveur WebSocket
const socket = io('http://localhost:3000/chats', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('✅ Connecté au serveur WebSocket');
  console.log('Socket ID:', socket.id);

  // Envoyez un message de test
  console.log('\n📤 Envoi du message: "Hello from test client!"');
  socket.emit('chats', 'Hello from test client!');
});

socket.on('chats', (data) => {
  console.log('📥 Réponse reçue:', data);
  
  // Fermer la connexion après avoir reçu la réponse
  setTimeout(() => {
    console.log('\n👋 Fermeture de la connexion...');
    socket.disconnect();
    process.exit(0);
  }, 1000);
});

socket.on('connect_error', (error) => {
  console.error('❌ Erreur de connexion:', error.message);
  process.exit(1);
});

socket.on('disconnect', () => {
  console.log('🔌 Déconnecté du serveur');
});
