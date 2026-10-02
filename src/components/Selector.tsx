import { useState } from "react";
import { IoTriangleSharp, IoEllipseSharp, IoSquareSharp } from "react-icons/io5";

export default function Selector({className}: {className?: string}) {

    const [selected, setSelected] = useState<string>('Español');

    return (
        <div className={className}>
            <div className=
                {`
                    relative w-30 h-fit bg-white text-black select-none
                `}
                onClick={() => {
                    document.getElementById('selector-options')?.classList.toggle('grid');
                    document.getElementById('selector-options')?.classList.toggle('hidden');
                    document.getElementById('selector-arrow')?.classList.toggle('scale-0');
                    document.getElementById('selector-ball')?.classList.toggle('scale-100');
                }}
            >
                <div className="
                        group
                        w-full h-full flex justify-between items-center px-3 py-1
                        hover:text-white hover:bg-black
                        active:bg-black active:text-white
                    "
                >

                    <p>{selected}</p>

                    <div className="relative flex justify-center items-center">
                        <IoTriangleSharp id="selector-arrow" className="transition-transform duration-300 ease-out group-active:text-pink-500" />
                        <IoEllipseSharp id="selector-ball" className="absolute scale-0 transition-transform duration-300 ease-out group-active:text-pink-500" />
                    </div>
                    
                </div>
                

                <div id="selector-options" className="absolute top-full left-0 hidden w-full grid-cols-1 bg-white">
                    
                    <div className={`
                            group
                            flex justify-between items-center relative
                            bg-white text-black p-1 px-3 py-1
                            hover:bg-black hover:text-white
                            active:bg-black active:text-white
                        `}
                        onClick={() => {
                            setSelected('Español');
                        }}
                    >
                        <p>Español</p>
                        {selected === 'Español' && <IoSquareSharp className="text-black group-hover:text-white group-active:text-pink-500" />}
                    </div>

                    <div className={`
                            group
                            flex justify-between items-center relative
                            bg-white text-black p-1 px-3 py-1
                            hover:bg-black hover:text-white
                            active:bg-black active:text-white
                        `}
                        onClick={() => {
                            setSelected('English');
                        }}
                    >
                        <p>English</p>
                        {selected === 'English' && <IoSquareSharp className="text-black group-hover:text-white group-active:text-pink-500" />}
                    </div>

                </div>

            </div>
        </div>
    );
}