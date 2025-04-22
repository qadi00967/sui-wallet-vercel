import React from 'react';
import {
  SuiClientProvider,
  WalletProvider,
  ConnectButton,
  WalletStatus,
  useCurrentAccount,
  useCurrentWallet,
} from '@mysten/dapp-kit';
import { SuiClient, getFullnodeUrl } from '@mysten/sui/client';

const client = new SuiClient({ url: getFullnodeUrl('mainnet') });

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
    <SuiClientProvider client={client}>
      <WalletProvider autoConnect>
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
          <h1>Connect Sui Wallet (Dapp Kit)</h1>
          <ConnectButton />
          <WalletStatus />
          <WalletInfo />
        </div>
      </WalletProvider>
    </SuiClientProvider>
  );
}
