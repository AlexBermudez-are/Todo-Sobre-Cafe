import { expressApp } from "./express";
import { createServer } from 'http';

const createServerHttp = createServer(expressApp)

export { createServerHttp }