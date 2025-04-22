import React from 'react';
import {
  createNetworkConfig,
  SuiClientProvider,
  WalletProvider,
  ConnectButton,
  useCurrentAccount,
  useCurrentWallet
} from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@mysten/dapp-kit/dist/index.css';

const { networkConfig } = createNetworkConfig({
  mainnet: { url: getFullnodeUrl('mainnet') },
  testnet: { url: getFullnodeUrl('testnet') },
  devnet: { url: getFullnodeUrl('devnet') },
});

const queryClient = new QueryClient();

function WalletInfo() {
  const account = useCurrentAccount();
  const wallet = useCurrentWallet();

  if (!account || !wallet) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <p><strong>Connected Wallet:</strong> {wallet.name}</p>
      <p><strong>Address:</strong> {account.address}</p>
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SuiClientProvider networks={networkConfig} defaultNetwork="devnet">
        <WalletProvider autoConnect>
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>Connect Sui Wallet (Dapp Kit)</h1>
            <ConnectButton />
            <WalletInfo />
          </div>
        </WalletProvider>
      </SuiClientProvider>
    </QueryClientProvider>
  );
}
