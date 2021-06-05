import express from 'express';
import messagesRouter from './routes/messages.routes';
import userRouter from './routes/user.routes';
import authRouter from './routes/auth.routes';

import http from 'http';
import cors from 'cors';
import { Server, Socket } from 'socket.io';
import socketConfig from './socketio_config/index.socket';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    methods: ['GET', 'POST']
  },
  cookie: false
});

io.on('connection', (socket: Socket) => {
  socketConfig(io, socket);
});

app.use(express.json());
app.use(cors());
app.use('/messages', messagesRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

server.listen(4000, () => {
  console.log('App is listening!');
});
