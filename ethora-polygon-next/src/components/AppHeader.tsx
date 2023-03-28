import Link from "next/link";
import logoImg from "@/assets/imgs/logo.png";
import { useEffect, useState, useContext } from "react";
import { Web3ProviderContext } from "@/context/Web3Provider";
import { config } from "@/constants/config";
import { format } from 'date-fns'
import { useAppStore } from "@/store";

export default function AppHeader() {
  const { connectWallet } = useContext(Web3ProviderContext);
  const {setAuth, accessToken, address, clearAuth} = useAppStore()

  const metamaskSignIn = async () => {
    const ttl = Date.now() + config.ttl
    const msgParams = {
      domain: {
        name: "EthoraPolygonDev",
        version: "1",
      },
      message: {
        message: `Ethora Polygon Dev Sign In\n\nToken valid till: ${format(new Date(ttl), 'yyyy-MM-dd HH:mm aa')}`,
      },
      primaryType: "Login",
      types: {
        EIP712Domain: [
          { name: "name", type: "string" },
          { name: "version", type: "string" },
        ],
        Login: [{ name: "message", type: "string" }],
      },
    };

    const { web3ModalInstance } = await connectWallet();

    const sign = await window.ethereum.request({
      method: 'eth_signTypedData_v4',
      params: [web3ModalInstance.selectedAddress, JSON.stringify(msgParams)],
    });

    const accessToken = btoa(JSON.stringify({
      ttl,
      address: web3ModalInstance.selectedAddress,
      sign: sign
    }))

    setAuth({ttl, sign, address: web3ModalInstance.selectedAddress, accessToken})
  };

  const signOut = () => {
    clearAuth()
  }

  return (
    <div className="flex shadow items-center justify-between h-[64px] px-[24px]">
      {/* left nav */}
      <div className="flex items-center">
        <Link className="mr-5" rel="stylesheet" href="/">
          <img
            className="w-[60px]"
            src={logoImg.src}
            alt="ethora logotype"
          ></img>
        </Link>
        {/* <Link className="mr-2 hover:underline" href="/profile">Profile</Link> */}
        <Link className="mr-2 hover:underline" href="/claim">
          Claim
        </Link>
        {/* <Link className="mr-2 hover:underline" href="/nft">Deploy NFT</Link>
        <Link className="hover:underline" href="/transfers">Transfers</Link> */}
      </div>

      <div className={"flex gap-4"}>
        {/* <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" onClick={() => changeTheme()} defaultChecked={theme === 'dark'} />
                  <div
                      className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className="ml-1 text-sm font-medium text-gray-900 dark:text-gray-300">Dark mode</span>
          </label> */}
        
        { !accessToken && (
          <div>
            <button onClick={metamaskSignIn}>Sign In</button>
          </div>
        ) }
        { address && (
          <div>
            <button onClick={signOut}>Sign Out</button>
          </div>
        ) }
      </div>
    </div>
  );
}
