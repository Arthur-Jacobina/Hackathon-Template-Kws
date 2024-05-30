import Image from "next/image";

export default function Info() {
    return(
        <div className="px-10 py-10 w-[35vw] flex flex-col space-y-2 justify-center bg-[#151C30] rounded-xl">
            <div className="text-white text-xl font-semibold">
                About KWS
            </div>
            <div className="text-[#7391B0] text-sm font-semibold">
                KWS is a template made by Arthur Jacobina  
            </div>
            <Image
                src="/kws.svg"
                alt=""
                className="mx-auto"
                width={300}
                height={300}
                priority
                /> 
            <div className="text-white text-lg font-semibold">
                Thank you for using this template!
            </div>
            <div className="text-[#7391B0] text-sm text-justify font-semibold">
                I’m Arthur Jacobina, a Web3 enthusiast and engineering student. I have a thirst for knowledge. Always eager to learn and discover new things.
            </div>
        </div>
    )
}