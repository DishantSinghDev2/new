import { PhotoIcon, XMarkIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useRef, useState, useEffect } from "react";

export default function DeployNfmt() {
  const imageRef = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [selectedFile, setSelectedFile] = useState<File>();
  const [preview, setPreview] = useState("");
  const [addressesAmount, setAddressesAmount] = useState(0);

  useEffect(() => {
    if (preview) {
      previewRef.current.style.backgroundImage = `url(${preview})`;
    }
  }, [preview]);

  const chooseImage = () => {
    imageRef.current.click();
  };

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      return;
    }

    setSelectedFile(e.target.files[0]);
    const objectUrl = URL.createObjectURL(e.target.files[0]);
    setPreview(objectUrl);
  };

  const onAddAddress = () => {
    setAddressesAmount(addressesAmount + 1);
  };

  return (
    <div className="w-screen flex justify-center px-[24px] py-[24px]">
      <div className="max-w-xl w-full">
        <h2 className="font-bold text-[30px]">Create New Item</h2>
        <p>
          <span className="text-red-500">*</span>Required fields
        </p>
        <p className="required mb-2 text-[16px] font-bold">Image</p>
        <div className="w-[350px] mb-4 relative  hover:bg-gray-300 cursor-pointer  rounded-lg border-dashed h-[257px] border">
          {preview && (
            <div
              ref={previewRef}
              className="absolute bg-cover bg-center top-0 left-0 right-0 bottom-0"
            >
              <button
                onClick={() => setPreview("")}
                className="bg-white rounded-full absolute right-[10px] top-[10px]"
              >
                <XMarkIcon className="w-[24px] h-[24px]" />
              </button>
            </div>
          )}
          <div
            className="h-full w-full flex items-center justify-center border"
            onClick={chooseImage}
          >
            <input
              accept="image/*"
              ref={imageRef}
              onChange={onSelectFile}
              type="file"
              className="hidden"
            ></input>
            <PhotoIcon className="h-[80px] w-[80px text-gray-400" />
          </div>
        </div>
        <p className="required mb-2 text-[16px] font-bold">Name</p>
        <p className="mb-2">
          <input type="text" className="border min-w-[350px] w-full p-5 rounded-md" />
        </p>
        <p className="required mb-2 text-[16px] font-bold">Description</p>
        <p className="mb-2">
          <textarea
            className="border min-w-[350px] w-full p-5 rounded-md"
            name="Text1"
            cols={40}
            rows={5}
          ></textarea>
        </p>
        <p className="mb-2 text-[16px] font-bold">Earnings</p>
        <p>
          {Array.from({ length: addressesAmount }).map((el, index) => {
            return (
              <div className="flex">
                <input
                  type="text"
                  placeholder="Please enter an address, e.g. 0x1ed3..."
                  name={`earning-${index}`}
                />
                <input type="text" placeholder="0" />
                <button>
                  <XMarkIcon className="w-[24px] h-[24px]"></XMarkIcon>
                </button>
              </div>
            );
          })}
          <button onClick={onAddAddress} className="text-blue-600">
            + Add address
          </button>
        </p>
      </div>
    </div>
  );
}
