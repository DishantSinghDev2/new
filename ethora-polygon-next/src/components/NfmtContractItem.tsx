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
  function showCostWithTokenId(costs: string[]) {
    return costs.map((el, index) => {
      return `tokenId ${index + 1} - ${el} wei`
    }).join(',')
  }

  return (
    <div className="border p-10">
      <div className={`w-full h-[200px] overflow-hidden`}>
        <img src={props.data.urls[0]} alt="" />
      </div>
      <div>
        Token Name: {props.data.name}
      </div>
      <div>
        Token Symbol: {props.data.symbol}
      </div>
      <div>Costs: {showCostWithTokenId(props.data.costs)}</div>
    </div>
  )
}