import { Agent } from 'http';

declare class HttpProxyAgent extends Agent {
  constructor (uri: string | { protocol?: string; host?: string; hostname?: string; port?: string });
}

export = HttpProxyAgent;
