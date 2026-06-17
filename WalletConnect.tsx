"use client";

import { useState } from "react";

export default function WalletConnect() {

  const [wallet, setWallet] =
    useState("");

  async function connect() {

    const accounts =
      await window.ethereum.request({
        method:
        "eth_requestAccounts"
      });

    setWallet(accounts[0]);
  }

  return (
    <div>

      <button
        onClick={connect}
        className="px-6 py-3 rounded-lg bg-green-600 text-white"
      >
        Connect Wallet
      </button>

      <p className="mt-3">
        {wallet}
      </p>

    </div>
  );
}
