import { useEffect, useContext, useState } from "react"
import { ethers } from "ethers"
import { useForm, SubmitHandler } from "react-hook-form";

import { Web3ProviderContext } from '@/context/Web3Provider'
import { config } from '@/constants/config'
import EthoraCoinAbi from '@/constants/ABI/EthoraCoin.json'

type Inputs = {
  coinsAmout: number,
};

export default function Claim() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  const [provider] = useContext(Web3ProviderContext)

  const [purchaseCoin, setPurchaseCoin] = useState(1)

  useEffect(() => {
    if (provider) {
      console.log(provider)
    }
  }, [provider])

  async function onClaim() {
    if (!provider) {
      alert('Connect first')
    } else {
      const signer = provider.getSigner()
      const ethoraCoin = new ethers.Contract(config.ethoraCoinAddress, EthoraCoinAbi, signer)
      const transaction = await ethoraCoin.claim()
      const transactionReceipt = await transaction.wait()
  
      if (transactionReceipt.status !== 1) {
        alert('error message')
      }
    }
  }
  
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <div className="flex border rounded p-5 w-[500px] flex-col mb-5 items-center">
        <p className="mb-2 text-center text-lg">Every new wallet can claime 5 Ethora Coins for free, you will need pay only for transaction fee.</p>
        <button onClick={onClaim} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Claim Ethora Coins</button>
      </div>
      <div className="flex border rounded p-5 w-[500px] flex-col mb-5 items-center">
        <p className="mb-2 text-center text-lg">For purchasing ethora coins you need to specify how much coins you whant to buy, today one Ethora coin will cost 0.01 MATIC</p>
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <input className="mb-6 border p-3" type="number" {...register("coinsAmout", { required: true })} />
          {errors.coinsAmout && <span className="text-red-500 -mt-6">This field is required</span>}
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Purchase</button>
        </form>
      </div>
    </div>
  )
}