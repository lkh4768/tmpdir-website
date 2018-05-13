import io from 'socket.io';

const onServerSocket = (server) => {
  const serverSocket = io(server);
  serverSocket.on('connection', () => {
    console.log('connection client');
  });
};

export default onServerSocket;
