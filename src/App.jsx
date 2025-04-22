
import React from 'react';
import { WalletProvider, WalletKitProvider, useWallet } from '@mysten/wallet-kit';

function WalletConnector() {
  const { connected, connect, disconnect, currentAccount } = useWallet();

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Sui Wallet Connect</h1>
      {!connected ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <>
          <p>Connected: {currentAccount?.address}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <WalletProvider>
      <WalletKitProvider>
        <WalletConnector />
      </WalletKitProvider>
    </WalletProvider>
  );
}
