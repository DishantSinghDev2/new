import { useEffect, useContext } from "react"
import { ethers } from "ethers"

import { Web3ProviderContext } from '@/context/Web3Provider'
import { config } from '@/constants/config'
import EthoraCoinAbi from '@/constants/ABI/EthoraCoin.json'

export default function Claim() {
  const [provider] = useContext(Web3ProviderContext)

  useEffect(() => {
    if (provider) {
      console.log(provider)
    }
  }, [provider])

  async function onClaim() {
    const signer = provider.getSigner()
    const ethoraCoin = new ethers.Contract(config.ethoraCoinAddress, EthoraCoinAbi, signer)
    const transaction = await ethoraCoin.claim()
    const transactionReceipt = await transaction.wait()

    if (transactionReceipt.status !== 1) {
      alert('error message')
    }
  }

  
  return (
    <div className="w-screen flex justify-center items-center">
      <button onClick={onClaim} className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Claim Ethora Coins</button>
    </div>
  )
}