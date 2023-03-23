import { useEffect, useContext, useState } from "react"
import { ethers } from "ethers"
import { useForm, SubmitHandler } from "react-hook-form";

import { Web3ProviderContext } from '@/context/Web3Provider'
import { config } from '@/constants/config'
import EthoraCoinAbi from '@/constants/ABI/EthoraCoin.json'
import AllScreenLoader from "@/components/AllScreenLoader";

type Inputs = {
  coinsAmout: number,
};

export default function Claim() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    console.log(data);
  }

  const {connectWallet} = useContext(Web3ProviderContext)

  const [startActionClaim, setStartActionClaim] = useState(false)

  async function addCoinToMetamask(web3ModalInstance) {
    const wasAdded = await web3ModalInstance.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20', // Initially only supports ERC20, but eventually more!
        options: {
          address: config.ethoraCoinAddress, // The address that the token is at.
          symbol: config.ethoraCoinSymbol, // A ticker symbol or shorthand, up to 5 chars.
          decimals: config.ethoraCoinDecimals, // The number of decimals in the token
        },
      },
    });

    if (wasAdded) {
      alert('Now you can use Ethora Coin inside Metamaks');
    } else {
      console.log('Нou will be able to add coins manually');
    }
  }

  async function onClaim() {
    setStartActionClaim(true)
    try {
      const { 
        web3ModalInstance,
        web3ModalProvider 
      } = await connectWallet()
  
      if (web3ModalInstance.chainId !== config.networkIdHex) {
        alert('Please change your network to ' + config.networkName)
        return
      }
  
      const signer = web3ModalProvider.getSigner()
      const ethoraCoin = new ethers.Contract(config.ethoraCoinAddress, EthoraCoinAbi, signer)
      const transaction = await ethoraCoin.claim()
      const transactionReceipt = await transaction.wait()
  
      if (transactionReceipt.status == 1) {
        alert('success!')
        await addCoinToMetamask(web3ModalInstance)
      }
    
      if (transactionReceipt.status !== 1) {
        alert('transaction error!')
      }
      setStartActionClaim(false)
    } catch (error) {
      if (error.reason) {
        if (error.reason === "execution reverted: hadClaimed[msg.sender] == false && maxClaim > 0") {
          alert('Only five coins can be obtained for free, you have already received coins. Now you can get coins by buying them.')
        }
      }

      setStartActionClaim(false)
    }
  }
  
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="flex border rounded p-5 w-[500px] flex-col mb-5 items-center">
        <p className="mb-2 text-center text-lg">Every new wallet can claime 5 Ethora Coins for free, you will need pay only for transaction fee.</p>
        <button disabled={startActionClaim} onClick={onClaim} className="rounded-md disabled:bg-gray-400 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Claim Ethora Coins</button>
      </div>
      <div className="flex border rounded p-5 w-[500px] flex-col mb-5 items-center">
        <p className="mb-2 text-center text-lg">For purchasing ethora coins you need to specify how much coins you whant to buy, today one Ethora coin will cost 0.01 MATIC</p>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input className="mb-6 border p-3" type="number" {...register("coinsAmout", { required: true })} />
          {errors.coinsAmout && <span className="text-red-500 -mt-6">This field is required</span>}
          <button disabled={true} className="rounded-md disabled:bg-gray-400  bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Purchase</button>
        </form>
      </div>
      {startActionClaim && <AllScreenLoader />}
    </div>
  )
}