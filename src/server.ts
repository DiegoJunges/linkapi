import { AddressInfo } from 'net';
import app from './app';

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server online http://localhost:${address.port}`);
  } else {
    console.error('Failed to start the server.');
  }
});
