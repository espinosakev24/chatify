import { Server, Socket } from 'socket.io';

export default function joinRoom (io: Server, socket: Socket) {
  socket.broadcast.to('some room').emit('something');
}
