import { SuiHTTPTransport, SuiClient } from '@mysten/sui.js/client';

import { SUI_RPC_ENDPOINT } from '@/constants';

const client = new SuiClient({
  transport: new SuiHTTPTransport({
    url: SUI_RPC_ENDPOINT
  })
});

export default client;
