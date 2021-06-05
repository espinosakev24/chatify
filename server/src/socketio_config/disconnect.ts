import { Server } from 'socket.io';

export default function disconnect (io: Server) {
  io.emit('Some body left the chat');
}
