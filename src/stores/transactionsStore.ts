import {makeAutoObservable} from 'mobx';
const exTransactions = [
  {
    _id: '6213728465362e2446d730d2',
    tokenId: 'ERC20',
    from: '0xF076f530AF997032D3Bff95a6536EA66579bdA42',
    to: '0x8833A09C8D9B7A0253d67D02975160a4045922E9',
    tokenName: 'GKTONE',
    value: 1,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-21T11:07:48.564Z',
    senderFirstName: 'den',
    senderLastName: 'adb',
    receiverFirstName: 'den',
    receiverLastName: 'adb',
    senderBalance: '95',
    receiverBalance: '96',
    createdAt: '2022-02-21T11:07:48.568Z',
    updatedAt: '2022-02-21T11:07:53.038Z',
    __v: 0,
    blockNumber: 6072541,
    transactionHash:
      '0xcfa5c61bd2cc3163ff882c3932d07cdb18176f044bad57efd00408c33b6f84b4',
    fromFirstName: 'den',
    fromLastName: 'adb',
    toFirstName: 'den',
    toLastName: 'adb',
  },
  {
    _id: '620a0bc965362e2446d1e3ec',
    tokenId: 'ERC20',
    from: '0x8833A09C8D9B7A0253d67D02975160a4045922E9',
    to: '0x8833A09C8D9B7A0253d67D02975160a4045922E9',
    tokenName: 'Ethora Coin',
    value: 1,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-14T07:59:05.773Z',
    senderFirstName: 'den',
    senderLastName: 'adb',
    receiverFirstName: 'den',
    receiverLastName: 'adb',
    senderBalance: '98',
    receiverBalance: '99',
    createdAt: '2022-02-14T07:59:05.777Z',
    updatedAt: '2022-02-14T07:59:10.061Z',
    __v: 0,
    blockNumber: 5867167,
    transactionHash:
      '0x6766aebfd85289033bb6a4525f0f92e212863c44e89566cec59adba7664f35b0',
    fromFirstName: 'den',
    fromLastName: 'adb',
    toFirstName: 'den',
    toLastName: 'adb',
  },
  {
    _id: '6200c74665362e2446cc7717',
    tokenId: 'ERC20',
    transactionHash:
      '0x50348b66959008817c75270f5b5ec1755ea66f48adfeffe3078e12f14a8700b5',
    blockNumber: 5664712,
    from: '0x1B1b935E39B09336bbaFE9e70fE8477545e0a6eb',
    to: '0x3c80F0C80Cc2e496C2E70ff2EEFb71Ae6A05dd10',
    value: 100,
    tokenName: 'GKTONE',
    type: 'Transfer',
    timestamp: '2022-02-07T07:16:22.016Z',
    senderFirstName: 'GK Test Two',
    senderLastName: 'GK Test Two',
    receiverFirstName: 'Vineeth',
    receiverLastName: 'Nambiar',
    isCompleted: true,
    senderBalance: '999997644',
    receiverBalance: '100',
    createdAt: '2022-02-07T07:16:22.017Z',
    updatedAt: '2022-02-07T07:16:22.017Z',
    __v: 0,
    fromFirstName: 'GK Test Two',
    fromLastName: 'GK Test Two',
    toFirstName: 'Vineeth',
    toLastName: 'Nambiar',
  },
  {
    _id: '6200c4a065362e2446cc747a',
    tokenId: 'ERC20',
    transactionHash:
      '0x5c357d96e40cb13296c0d811641ccef0e0bf1b504ce821a2f99ecaf03fae03b1',
    blockNumber: 5664486,
    from: '0x1B1b935E39B09336bbaFE9e70fE8477545e0a6eb',
    to: '0xE22AE9039f74368De1cAC462d64b182D1b601074',
    value: 100,
    tokenName: 'GKTONE',
    type: 'Transfer',
    timestamp: '2022-02-07T07:05:04.026Z',
    senderFirstName: 'GK Test Two',
    senderLastName: 'GK Test Two',
    receiverFirstName: 'Vineeth',
    receiverLastName: 'Nambiar',
    isCompleted: true,
    senderBalance: '999997744',
    receiverBalance: '100',
    createdAt: '2022-02-07T07:05:04.029Z',
    updatedAt: '2022-02-07T07:05:04.029Z',
    __v: 0,
    fromFirstName: 'GK Test Two',
    fromLastName: 'GK Test Two',
    toFirstName: 'Vineeth',
    toLastName: 'Nambiar',
  },
  {
    _id: '61fbe13365362e2446c9504e',
    tokenId: 'ERC20',
    from: '0xaE5b816aE9Af9E02Ab66e78064038884e1a368C1',
    to: '0x9238f75037724D122942d7224574fE7147161122',
    tokenName: 'GKTONE',
    value: 1,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-03T14:05:39.136Z',
    senderFirstName: 'Margaret',
    senderLastName: 'Brownescu',
    receiverFirstName: 'Vikash',
    receiverLastName: 'Kumar',
    senderBalance: '92',
    receiverBalance: '107',
    createdAt: '2022-02-03T14:05:39.141Z',
    updatedAt: '2022-02-03T14:05:46.014Z',
    __v: 0,
    blockNumber: 5557700,
    transactionHash:
      '0x4b109b7697aed8d4e54d236fd2c6102e244b425d8b462ef1bdaedd9138bfca42',
    fromFirstName: 'Margaret',
    fromLastName: 'Brownescu',
    toFirstName: 'Vikash',
    toLastName: 'Kumar',
  },
  {
    _id: '61fbab1165362e2446c92dd6',
    tokenId: 'ERC20',
    from: '0xaE5b816aE9Af9E02Ab66e78064038884e1a368C1',
    to: '0x9238f75037724D122942d7224574fE7147161122',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-03T10:14:41.391Z',
    senderFirstName: 'Margaret',
    senderLastName: 'Brownescu',
    receiverFirstName: 'Vikash',
    receiverLastName: 'Kumar',
    senderBalance: '93',
    receiverBalance: '106',
    createdAt: '2022-02-03T10:14:41.393Z',
    updatedAt: '2022-02-03T10:14:46.060Z',
    __v: 0,
    blockNumber: 5553080,
    transactionHash:
      '0x8a95dcda2a2af363f30d5133060ba04b63e1c404aa9f509761794af356406cfc',
    fromFirstName: 'Margaret',
    fromLastName: 'Brownescu',
    toFirstName: 'Vikash',
    toLastName: 'Kumar',
  },
  {
    _id: '61fa68f165362e2446c85ebb',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:20:17.918Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Vineeth',
    receiverLastName: 'Nambiar',
    senderBalance: '69',
    receiverBalance: '76',
    createdAt: '2022-02-02T11:20:17.920Z',
    updatedAt: '2022-02-02T11:20:22.012Z',
    __v: 0,
    blockNumber: 5525592,
    transactionHash:
      '0x2d5633fc9abf3ddde67fcddea39a5728dfed8aaa6bc3262070e531d1137cafef',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Vineeth',
    toLastName: 'Nambiar',
  },
  {
    _id: '61fa688b65362e2446c85e5b',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x5f7521200E2edB463170c0D4feB2ec6601932794',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:35.706Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Nika',
    receiverLastName: 'Attwood',
    senderBalance: '76',
    receiverBalance: '116',
    createdAt: '2022-02-02T11:18:35.706Z',
    updatedAt: '2022-02-02T11:18:40.008Z',
    __v: 0,
    blockNumber: 5525558,
    transactionHash:
      '0x1a145f5962f6c027bd63f1b09e649f071ab9e02d6717f42d3470ec348d30d5c8',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Nika',
    toLastName: 'Attwood',
  },
  {
    _id: '61fa688165362e2446c85e3b',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x049b4De36e8bB1c2B97aD5fA9e23CF589bcdf9BB',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:25.113Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Vineeth',
    receiverLastName: 'Nambiar',
    senderBalance: '83',
    receiverBalance: '108',
    createdAt: '2022-02-02T11:18:25.114Z',
    updatedAt: '2022-02-02T11:18:31.008Z',
    __v: 0,
    blockNumber: 5525555,
    transactionHash:
      '0x735ffeabb30c0fa782006576119f4e52e0a63662d1bc6ca982d16434251f83d0',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Vineeth',
    toLastName: 'Nambiar',
  },
  {
    _id: '61fa687365362e2446c85e16',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x5f7521200E2edB463170c0D4feB2ec6601932794',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:11.451Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Nika',
    receiverLastName: 'Attwood',
    senderBalance: '90',
    receiverBalance: '109',
    createdAt: '2022-02-02T11:18:11.451Z',
    updatedAt: '2022-02-02T11:18:16.013Z',
    __v: 0,
    blockNumber: 5525550,
    transactionHash:
      '0x6124d3f990ea4ebb3ded9324e3888186c9f17b7fcc1c7d528fcfbc6edbcc94d5',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Nika',
    toLastName: 'Attwood',
  },
  {
    _id: '61fa687365362e2446c85e116',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x5f7521200E2edB463170c0D4feB2ec6601932794',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:11.451Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Nika',
    receiverLastName: 'Attwood',
    senderBalance: '90',
    receiverBalance: '109',
    createdAt: '2022-02-02T11:18:11.451Z',
    updatedAt: '2022-02-02T11:18:16.013Z',
    __v: 0,
    blockNumber: 5525550,
    transactionHash:
      '0x6124d3f990ea4ebb3ded9324e3888186c9f17b7fcc1c7d528fcfbc6edbcc94d5',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Nika',
    toLastName: 'Attwood',
  },
  {
    _id: '61fa6873653262e2446c85e16',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x5f7521200E2edB463170c0D4feB2ec6601932794',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:11.451Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Nika',
    receiverLastName: 'Attwood',
    senderBalance: '90',
    receiverBalance: '109',
    createdAt: '2022-02-02T11:18:11.451Z',
    updatedAt: '2022-02-02T11:18:16.013Z',
    __v: 0,
    blockNumber: 5525550,
    transactionHash:
      '0x6124d3f990ea4ebb3ded9324e3888186c9f17b7fcc1c7d528fcfbc6edbcc94d5',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Nika',
    toLastName: 'Attwood',
  },
  {
    _id: '61fa687123365362e2446c85e16',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x5f7521200E2edB463170c0D4feB2ec6601932794',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:11.451Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Nika',
    receiverLastName: 'Attwood',
    senderBalance: '90',
    receiverBalance: '109',
    createdAt: '2022-02-02T11:18:11.451Z',
    updatedAt: '2022-02-02T11:18:16.013Z',
    __v: 0,
    blockNumber: 5525550,
    transactionHash:
      '0x6124d3f990ea4ebb3ded9324e3888186c9f17b7fcc1c7d528fcfbc6edbcc94d5',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Nika',
    toLastName: 'Attwood',
  },
  {
    _id: '61fa687365123362e2446c85e16',
    tokenId: 'ERC20',
    from: '0x13185713232b21A2328EDF1DE5bA1C7d42F278f0',
    to: '0x5f7521200E2edB463170c0D4feB2ec6601932794',
    tokenName: 'GKTONE',
    value: 7,
    type: 'Transfer',
    isCompleted: true,
    timestamp: '2022-02-02T11:18:11.451Z',
    senderFirstName: 'Vineeth',
    senderLastName: 'Nambiar',
    receiverFirstName: 'Nika',
    receiverLastName: 'Attwood',
    senderBalance: '90',
    receiverBalance: '109',
    createdAt: '2022-02-02T11:18:11.451Z',
    updatedAt: '2022-02-02T11:18:16.013Z',
    __v: 0,
    blockNumber: 5525550,
    transactionHash:
      '0x6124d3f990ea4ebb3ded9324e3888186c9f17b7fcc1c7d528fcfbc6edbcc94d5',
    fromFirstName: 'Vineeth',
    fromLastName: 'Nambiar',
    toFirstName: 'Nika',
    toLastName: 'Attwood',
  },
];
export class TransactionsStore {
  transactions = exTransactions;
  defaultUrl = '';
  constructor(stores:any) {
    // this.defaultUrl = stores.apiStore.defaultUrl;

    makeAutoObservable(this);
  }

  setInitialState(){
    this.transactions = exTransactions;
    this.defaultUrl = '';
  }

}