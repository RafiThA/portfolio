import { useEffect, useState } from "react";

import { CgExternal } from "react-icons/cg";

export default function Card(
    {
        darkMode,
        header,
        content,
        links,
        banner,
    }: {
        darkMode?: boolean,
        header: string,
        content: string,
        links?: { url: string; text: string }[],
        banner: string,
    }
){

    const [bannerOpened, setBannerOpened] = useState<boolean>(false);

    useEffect(() => {

        const observer = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (!entrada.isIntersecting && bannerOpened) {
                    
                    setBannerOpened(false);
                }
            });

        }, {threshold: 0.5});

        observer.observe(document.getElementById(`card-${header}`)!);

        return () => {
            observer.disconnect();
        };

    },[bannerOpened, header]);

    if (darkMode) {
        return (

            <div id={`card-${header}`} className="relative w-full h-full">

                <div
                    className={`
                        w-full bg-white overflow-hidden flex justify-center items-center
                        transition-all duration-500 ease-in-out
                        ${bannerOpened ? 'h-60' : 'h-20'}
                    `}
                    onClick={() => {
                        setBannerOpened(!bannerOpened);
                    }}
                >
                    <img className={`transition-all duration-500 ease-in-out ${bannerOpened ? '' : 'blur-xs'}`} src={banner} alt={`Card-${header}-banner`} />
                </div>

                <div className="bg-black text-white p-5">

                    <h1 className="text-3xl font-medium">{header}</h1>

                    <p className="text-sm pt-5">{content}</p>

                    {
                        links && (
                            
                            <div className="font-xahn text-sm pt-5 flex flex-row gap-2 flex-wrap">
                                
                                <CgExternal className="text-xl" />

                                {links.map((link, index) => (
                                    <a className="underline underline-offset-2 hover:text-pink-500 active:text-pink-500"
                                        key={index}
                                        href={link.url}
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        {link.text}
                                    </a>
                                ))}

                            </div>
                        )
                    }

                </div>

            </div>
        );
    }

    return (

        <div id={`card-${header}`} className="relative w-full h-full">

            <div
                className={`
                    w-full bg-white overflow-hidden flex justify-center items-center
                    transition-all duration-500 ease-in-out
                    ${bannerOpened ? 'h-60' : 'h-20'}
                `}
                onClick={() => {
                    setBannerOpened(!bannerOpened);
                }}
            >
                <img className={`transition-all duration-500 ease-in-out ${bannerOpened ? '' : 'blur-xs'}`} src={banner} alt={`Card-${header}-banner`} />
            </div>

            <div className="bg-white text-black p-5">

                <h1 className="text-3xl font-medium">{header}</h1>

                <p className="text-sm pt-5">{content}</p>

                {
                    links && (
                        
                        <div className="font-xahn text-sm pt-5 flex flex-row gap-2 flex-wrap">
                            
                            <CgExternal className="text-xl" />

                            {links.map((link, index) => (
                                <a className="underline text-black underline-offset-2 hover:text-pink-500 active:text-pink-500"
                                    key={index}
                                    href={link.url}
                                    target="_blank" rel="noopener noreferrer"
                                >
                                    {link.text}
                                </a>
                            ))}

                        </div>
                    )
                }

            </div>

        </div>
    );
}