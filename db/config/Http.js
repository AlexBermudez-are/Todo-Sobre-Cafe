import { expressApp } from "./express.js";
import { createServer } from 'http';

const createServerHttp = createServer(expressApp)

export { createServerHttp }