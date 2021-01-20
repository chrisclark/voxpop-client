import { io } from "socket.io-client";
export const socket = io(process.env.SOCKET_URL ?? '');

export const api = {
  remove: function(mtg: string, user: string) {
    socket.emit('remove_user', {
      mtg,
      user
    });
  },
  toggle: function(mtg: string, user: string) {
    socket.emit('toggle_user', {
      mtg,
      user
    });
  },
  connect: function(mtg: string, user: string) {
    socket.emit('user_connected', {
      mtg,
      user
    });
  }
};
