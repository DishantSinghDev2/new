import { createContext, useState } from "react";

//create a context, with createContext api
export const Web3ProviderContext = createContext(null);

const Web3Provider = (props) => {
  // this state will be shared with all components
  const [provider, setProvider] = useState();

  return (
    <Web3ProviderContext.Provider value={[provider, setProvider]}>
      {props.children}
    </Web3ProviderContext.Provider>
  );
};

export default Web3Provider;
