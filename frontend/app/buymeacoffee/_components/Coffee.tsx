'use client'

import Image from "next/image";
import { useState } from "react";

export default function Coffee() {
    const [coffeeCount, setCoffeeCount] = useState(0);

    function handleTextareaChange(e:any) {
        setCoffeeCount(e.target.value);
    }

    return(
        <div className="px-20 py-5 w-[30vw] flex flex-col space-y-5 justify-center bg-[#151C30] rounded-xl">
            <div className="text-white font-semibold text-xl">
                Buy me a Coffee
            </div>

            <div className="px-2 py-5 w-[20vw] space-x-2 flex text-sm items-center justify-center bg-[#0C2041] border-[#3B82F6] border-[1px] rounded-lg">
                <Image
                src="/coffee.svg"
                alt=""
                className="mr-2"
                width={50}
                height={50}
                priority
                /> 
                <div className="text-[#7391B0] text-xl px-2">
                    X
                </div>
                <label>
                    <button className='peer' name='coffees' onClick={() => setCoffeeCount(1)}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-[#7391B0] border-[1px] hover:border-[#3B82F6] ${coffeeCount === 1 ? 'bg-[#3B82F6]' : 'bg-[#0F172A]'}`}>
                        1
                    </div>
                    </button>
                </label>
                <label>
                    <button className='peer' name='coffees' onClick={() => setCoffeeCount(3)}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-[#7391B0] border-[1px] hover:border-[#3B82F6] ${coffeeCount === 3 ? 'bg-[#3B82F6]' : 'bg-[#0F172A]'}`}>
                        3
                    </div>
                    </button>
                </label>
                <label>
                    <button className='peer' name='coffees' onClick={() => setCoffeeCount(5)}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white border-[#7391B0] border-[1px] hover:border-[#3B82F6] ${coffeeCount === 5 ? 'bg-[#3B82F6]' : 'bg-[#0F172A]'}`}>
                        5
                    </div>
                    </button>
                </label>
                <label>
                    <div className="justify-center">
                    <input className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-10 h-10 overflow-hidden rounded-lg flex items-center text-center justify-center text-white border-[#000000] border-[1px] bg-[#0F172A] text-[#818181] outline-none focus:border-[#3B82F6] hover:border-[#3B82F6]' name='coffees' type='number' placeholder={coffeeCount.toString()} onChange={handleTextareaChange}/>
                    </div>
                </label>
            </div>
            <div className="text-[#7391B0] text-sm font-semibold">
                "A Coffee a day keeps the doctor away", Kws
            </div>
            <button className="px-5 py-2 w-[20vw] bg-[#3B82F6] rounded-md justify-center items-center hover:bg-[#00307F]">
            Support ${10*coffeeCount}
            </button>
        </div>
    )
}