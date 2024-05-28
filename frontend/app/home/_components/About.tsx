import Image from "next/image";

export default function About() {
    return (
        <div className='flex flex-row items-center text-left justify-between px-10'>
                <div className="w-full flex flex-col items-center ml-20">
                <div>
                    <h1 className="text-3xl text-white w-full">Web3 Hackathon template by Kws. </h1>
                    <h1 className="text-3xl text-[#3B82F6]">Enjoy!</h1>
                    <div className="mt-5 w-2/3">
                        <p className="text-[#7391B0] w-full">
                        Next.js, Wagmi, Viem, TailwindCSS and Hardhat. Please note this template is currently under construction. For suggestions or to report bugs, please contact me.
                        </p>
                    </div>
                </div>

            </div>
            <div className="w-1/2 mt-5">
                <Image
                    src="/kws.svg"
                    alt=""
                    width={350}
                    height={350}
                    priority
                />
            </div>
        </div>
    );
}