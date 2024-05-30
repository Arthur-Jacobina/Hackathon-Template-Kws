import Image from "next/image";
import { ConnectWallet } from "../components/ConnectWallet";

export default function Header() {
    return(
        <div className="flex ml-10 px-5 items-center w-[100vw]">
           <div className="w-3/5 flex items-center space-x-10">
            <a href="/">
           <Image
              src="/kws.svg"
              alt=""
              className=""
              width={65}
              height={65}
              priority
            /> 
            </a>
            <a href="https://github.com/Arthur-Jacobina" target="_blank" rel="noopener noreferrer" className="text-[#7391B0] hover:text-[#3B82F6]">GitHub</a>
            <a className="text-[#7391B0] hover:text-[#3B82F6]" href='/buymeacoffee'>BuyMeACoffee</a>
            <a className="text-[#7391B0] hover:text-[#3B82F6]" href='/nft'>NFT</a>
            </div>
            <div className="w-1/5">

            </div>
            <ConnectWallet />
        </div>
    )
}