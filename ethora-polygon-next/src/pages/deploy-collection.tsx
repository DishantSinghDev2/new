import { useContext, useState } from "react";
import {
  PhotoIcon,
  XMarkIcon,
  TrashIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Tab } from "@headlessui/react";
import cn from "classnames";
import useSwal from "@/hooks/useSwal";

import { ethers } from "ethers";
import { v4 as uuidv4 } from "uuid";

import { ImagePick } from "@/components/ImagePick";
import { Earning } from "@/components/Earning";
import { Web3ProviderContext } from "@/context/Web3Provider";
import {config} from "@/constants/config"
import NfmtEthoraAbi from '@/constants/ABI/EthoraNfmt.json'

type FilesMap = Record<number, File | null>;

export default function DeployCollection() {
  const [loading, setLoading] = useState<boolean>(false)
  const [collectionName, setCollectionName] = useState<string>("");
  const [collectionDescription, setCollectionDescription] =
    useState<string>("");

  const { connectWallet, isMetamaskInstalled } = useContext(Web3ProviderContext)

  const [bens, setBens] = useState<Record<string, string>>({
    [uuidv4()]: "0x",
  });

  const [percents, setPersents] = useState<Record<string, string>>({});

  const [tokenIds, setTokenIds] = useState<number[]>([1]);

  const [earnings, setEarnings] = useState<number[]>([]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [files, setFiles] = useState<FilesMap>({ 0: null });
  const [costs, setCostst] = useState<number[]>([0]);
  const [totals, setTotals] = useState<number[]>([0]);

  const swal = useSwal();

  const addNewTokenId = () => {
    setFiles({ ...files, ...{ [tokenIds.length]: null } });
    setTokenIds([...tokenIds, tokenIds.length + 1]);
  };

  const deleteLastTokenId = (index: number) => {
    const lastIndex = tokenIds.length - 2;
    delete files[index];
    setFiles({ ...files });
    setTotals(totals.slice(0, -1));
    setCostst(costs.slice(0, -1));
    setTokenIds(tokenIds.slice(0, -1));
    document.getElementById(`tab-index-${lastIndex}`).click();
  };

  const checkFiles = () => {
    let isFiles = 0;
    Object.keys(files).forEach((key) => {
      if (!files[key]) {
        isFiles = 1;
      }
    });

    if (isFiles === 0) {
      return true;
    } else {
      return false;
    }
  };

  const onCostChange = (e, index) => {
    let value = e.target.value;

    costs[index] = value;
    setCostst([...costs]);
  };

  const onTotalChange = (e, index) => {
    totals[index] = e.target.value;
    setTotals([...totals]);
  };

  function checkBeneficiaries() {
    // if (!beneficiaries.length) {
    //   return false;
    // }
    // let results = beneficiaries.map((el) => ethers.utils.isAddress(el));
    // if (results.some((el) => el === false)) {
    //   return false;
    // } else {
    //   return true;
    // }
  }

  async function onCreate() {
    const beneficiaries = Object.keys(bens).map((key) => bens[key]);
    const percs = Object.keys(percents).map((key) => percents[key]);

    const isFiles = checkFiles();

    if (!isFiles) {
      await swal.fire(
        "Cancelled",
        "Please choose images for all your tokens",
        "error"
      );
      return;
    }

    const maxSupplies = totals;
    const _costs = costs;

    console.log({
      collectionName,
      collectionDescription,
      beneficiaries,
      percs,
      maxSupplies,
      _costs,
    });

    const isMetamask = await isMetamaskInstalled()

    if (!isMetamask) {
      swal.fire('Install Metamask first')
      return
    }

    setLoading(true)

    try {
      const { web3ModalInstance, web3ModalProvider } = await connectWallet();

      console.log(web3ModalInstance.selectedAddress)

      if (web3ModalInstance.chainId !== config.networkIdHex) {
        alert("Please change your network to " + config.networkName);
        return;
      }

      const signer = web3ModalProvider.getSigner();
      const myContract = new ethers.ContractFactory(NfmtEthoraAbi.abi, NfmtEthoraAbi.bytecode, signer);

      const contract = await myContract.deploy(
        web3ModalInstance.selectedAddress,
        collectionName,
        'abc',
        ['https://abc'],
        ['0xe72Daf18bBd662615377736554C685c58EA51EAa'],
        ['1000'],
        ['100'],
        ['0']
      )

      alert("Success")
    } catch (error) {
      console.log('error ', error)

    }
    // setStartFreeMint(false)

    // if (!collectionName) {
    //   await swal.fire("Cancelled", "Collection Name is required", "error");
    //   return;
    // }

    // if (!checkBeneficiaries()) {
    //   await swal.fire(
    //     "Cancelled",
    //     "Beneficiaries should be valid eth address",
    //     "error"
    //   );
    //   return;
    // }
  }

  return (
    <div className="w-screen flex justify-center px-[24px] py-[24px]">
      <div className="max-w-2xl w-full">
        <h2 className="font-bold text-[30px]">Create New Collection</h2>
        <p className="required mb-2 text-[16px] font-bold">Collection Name</p>
        <p className="mb-2">
          <input
            onChange={(e) => setCollectionName(e.target.value)}
            type="text"
            className="border min-w-[350px] w-full p-5 rounded-md"
          />
        </p>
        <p className="required mb-2 text-[16px] font-bold">
          Collection Description
        </p>
        <p className="mb-2">
          <textarea
            onChange={(e) => setCollectionDescription(e.target.value)}
            className="border min-w-[350px] w-full p-5 rounded-md"
          />
        </p>
        <Earning
          bens={bens}
          setBens={setBens}
          percents={percents}
          setPercents={setPersents}
        />
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex">
            {tokenIds.map((el, index) => {
              return (
                <div key={el} className="relative">
                  <Tab
                    className={cn("border p-5 outline-none")}
                    id={`tab-index-${index}`}
                  >
                    <div>
                      <span
                        className={cn({ underline: selectedIndex == index })}
                      >
                        Token Id №{el}
                      </span>
                    </div>
                  </Tab>
                  {tokenIds.length !== 1 && index === tokenIds.length - 1 && (
                    <button
                      onClick={() => deleteLastTokenId(index)}
                      className="absolute z-50 top-[8px] right-[8px]"
                    >
                      <XMarkIcon className="w-[15px] h-[15px]"></XMarkIcon>
                    </button>
                  )}
                </div>
              );
            })}

            {tokenIds.length <= 3 && (
              <button onClick={addNewTokenId}>
                <PlusCircleIcon className="w-[30px] ml-[20px] h-[30px]" />
              </button>
            )}
          </Tab.List>

          <Tab.Panels className="border">
            {tokenIds.map((el, index) => {
              return (
                <Tab.Panel unmount={false} className="p-5" key={index}>
                  <div>
                    <p className="required mb-2 text-[16px]">Image</p>
                    <ImagePick
                      setFiles={setFiles}
                      files={files}
                      index={index}
                    ></ImagePick>
                    <p className="required mb-2 text-[16px]">
                      Cost Per One Token (Wei), leave Cost equals to 0 if you
                      want to issue Free tokens
                    </p>
                    <input
                      value={costs[index]}
                      onChange={(e) => onCostChange(e, index)}
                      type="number"
                      className="border mb-4 min-w-[350px] w-full p-5 rounded-md"
                      placeholder="Cost Per Token Wei"
                    />
                    <p className="required mb-2 text-[16px]">
                      Amount of tokens of token type tokenId #{el}
                    </p>
                    <input
                      value={totals[index]}
                      onChange={(e) => onTotalChange(e, index)}
                      type="text"
                      className="border min-w-[350px] w-full p-5 rounded-md"
                      placeholder={`Amount of tokens of token type tokenId #${el}`}
                    />
                  </div>
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
        <div className="flex justify-center">
          <button
            onClick={onCreate}
            className="text-white bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm p-5 text-[18px] mt-5 text-center"
          >
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
}
