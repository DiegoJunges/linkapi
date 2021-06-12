import { AddressInfo } from 'net';
import * as dotenv from 'dotenv';
import app from './app';

dotenv.config({ path: `${__dirname}/../.env` });

const server = app.listen(3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server online http://localhost:${address.port}`);
  } else {
    console.error('Failed to start the server.');
  }
});
