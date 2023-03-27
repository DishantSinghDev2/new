import {useEffect} from "react"
import { httpClient } from "@/http"

import NfmtContractItem from "@/components/NfmtContractItem"

export default function Home({data}) {
  useEffect(() => {
    console.log('data props ', data)
  }, [])

  return (
    <div className="w-screen flex px-[24px] py-[24px]">
      {data.map(((contract, index) => {
        return <NfmtContractItem data={contract} key={contract.contractAddress}></NfmtContractItem>
      }))}
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await httpClient.get('/nfmt')
  const data = await res.data

  // Pass data to the page via props
  return { props: { data } }
}
