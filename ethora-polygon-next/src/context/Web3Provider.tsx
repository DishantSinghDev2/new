import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import { config } from "@/constants/config";
import { useAppStore } from "@/store";

//create a context, with createContext api
export const Web3ProviderContext = createContext(null);

const Web3Provider = (props) => {
  // this state will be shared with all components
  const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

  const { app, setError } = useAppStore();

  useEffect(() => {
    function onAccountChange(accounts: any) {
      console.log("onAccountChange ", accounts);
    }

    function onChainChanged(chainId) {
      if (chainId !== config.networkIdHex) {
        console.log('chainId Error')
        setError('ChainId Error')
      }
      console.log("onChainChanged ", chainId)
    }

    if (provider) {
      console.log(provider.selectedAddress)
      window.ethereum.on("accountsChanged", onAccountChange)
      window.ethereum.on('chainChanged', onChainChanged)
    }

    return () => {
      if (provider) {
        window.ethereum.removeListener("accountsChanged", onAccountChange)
        window.ethereum.removeListener("chainChanged", onChainChanged)
      }
    }
  }, [provider]);

  return (
    <Web3ProviderContext.Provider value={[provider, setProvider]}>
      {props.children}
    </Web3ProviderContext.Provider>
  );
};

export default Web3Provider;
