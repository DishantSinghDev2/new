import { useEffect, useContext, useState } from "react";
import { Web3ProviderContext } from "@/context/Web3Provider";
import { useAppStore } from "@/store";
import { ethers } from 'ethers'

export default function Transfers() {
  const { address } = useAppStore();
  const [provider] = useContext(Web3ProviderContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    if (provider) {
      async function effect() {
        console.log("++++ ", {address})
        const balance = await provider.getBalance(address);
        console.log(balance)
        const ethValue = ethers.utils.formatEther(balance.toString());
        console.log(ethValue)
        setBalance(balance);
      }

      effect();
    }
  }, [provider]);

  return (
    <div className="p-10 w-screen">
      <h3>Transfer</h3>
      <div>
        <div>Matic</div>
      </div>
    </div>
  );
}
