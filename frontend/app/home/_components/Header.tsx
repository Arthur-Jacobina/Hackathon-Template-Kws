import Image from "next/image";
import ConnectWallet from "./ConnectWallet";

export default function Header() {
    return(
        <div className="flex flex-row ml-10 px-5 gap-20 items-center mr-20 w-full justify-center">
           <div className="w-3/5 flex flex-row items-center gap-20 mr-20">
           <Image
              src="/kws.svg"
              alt=""
              className=""
              width={65}
              height={65}
              priority
            /> 
            <a href="https://github.com/Arthur-Jacobina" className="hover:text-[#3B82F6]">GitHub</a>
            <a className="hover:text-[#3B82F6]">FundMe</a>
            </div>
            
            <div className="ml-20">
            <ConnectWallet />
            </div>
            
        </div>
    )
}