interface IContractItemProps {
  data: {
    contractAddress: string
    name: string
    symbol: string
    owner: string
    urls: string[],
    costs: string[],
    maxSupplies: string[]
  }
}

export default function NfmtContractItem(props: IContractItemProps) {
  return (
    <div>
      <div>Nfmt Contract Item</div>
      <div>{props.data.name}</div>
    </div>
  )
}