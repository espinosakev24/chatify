import { Socket, Server } from 'socket.io';
import disconnect from './disconnect';
import joinRoom from './joinRoom';

function socketConfig (io: Server, socket: Socket) {
  socket.on('joinRoom', () => joinRoom(io, socket));
  socket.on('disconnect', () => disconnect(io));
}

export default socketConfig;
