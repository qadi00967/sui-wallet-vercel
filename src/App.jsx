
import React from 'react';
import {
  SuiClientProvider,
  WalletProvider,
  ConnectButton,
  useWallet,
} from '@mysten/dapp-kit';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js/client';

const client = new SuiClient({ url: getFullnodeUrl('mainnet') });

function WalletInfo() {
  const { currentWallet, currentAccount } = useWallet();

  if (!currentWallet || !currentAccount) return null;

  return (
    <div style={{ marginTop: '20px' }}>
      <p><strong>Connected Wallet:</strong> {currentWallet.name}</p>
      <p><strong>Address:</strong> {currentAccount.address}</p>
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
          <WalletInfo />
        </div>
      </WalletProvider>
    </SuiClientProvider>
  );
}
