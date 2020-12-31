import { io } from 'socket.io-client';

export const socket = io.connect(process.env.SOCKET_URL);

export const api = {
  remove: function(mtg, user) {
    socket.emit('remove_user', {
      mtg: mtg,
      user: user
    });
  },
  toggle: function(mtg, user) {
    socket.emit('toggle_user', {
      mtg: mtg,
      user: user
    });
  },
  connect: function(mtg, user) {
    socket.emit('user_connected', {
      mtg: mtg,
      user: user
    });
  }
};
