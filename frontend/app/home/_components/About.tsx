import Image from "next/image";

export default function About() {
    return (
        <div className='flex items-center text-left w-full space-x-[25vw] justify-center'>
                <div>
                    <h1 className="text-3xl text-white font-semibold">Web3 Hackathon template by Kws. </h1>
                    <h1 className="text-3xl text-[#3B82F6] font-semibold">Enjoy!</h1>
                    <div className="mt-5 w-[35vw]">
                        <p className="text-[#7391B0]">
                        Next.js, Wagmi, Viem, TailwindCSS and Hardhat. Please note this template is currently under construction. For suggestions or to report bugs, please contact me.
                        </p>
                    </div>
                </div>
                <Image
                    src="/kws.svg"
                    alt=""
                    width={350}
                    height={350}
                    priority
                />
        </div>
    );
}