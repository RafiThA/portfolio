import { useEffect, useRef, useState } from "react";

const randBeetwen = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const delays = [
    '0s', '0.1s', '0.2s',
    '0.7s', '0s', '0.3s',
    '0.6s', '0.5s', '0.4s'
];

const animationsTimeStamps = [ randBeetwen(100, 500), randBeetwen(500, 1000), randBeetwen(1000, 1500), randBeetwen(100, 500)];
const scales = [randBeetwen(10, 40) / 100, randBeetwen(50, 60) / 100, randBeetwen(70, 90) / 100];

export default function Loading({ready, onFinished}: {ready: boolean, onFinished?: () => void}) {

    const loadingBar = useRef<HTMLDivElement>(null);
    const loadingBarContainer = useRef<HTMLDivElement>(null);

    const readyRef = useRef(ready);
    const onFinishedRef = useRef(onFinished);

    useEffect(() => {
        readyRef.current = ready;
        onFinishedRef.current = onFinished;
    }, [ready, onFinished]);

    const [wait, setWait] = useState<boolean>(false);
    
    const setScale = (value: number) => {
        if (loadingBar.current) loadingBar.current.style.scale = `${value} 1`;
    };
    
    // One time only.
    useEffect(() => {
        
        if (!loadingBar.current) return;

        setTimeout(() => {
            setScale(scales[0]);
        }, animationsTimeStamps[0]);

        setTimeout(() => {
            setScale(scales[1]);
        }, animationsTimeStamps[1]);

        setTimeout(() => {
            setScale(scales[2]);

            if (readyRef.current) {

                setTimeout(() => {

                    setScale(1);
                    loadingBarContainer.current?.classList.add('opacity-0');

                    // Disappear animation
                    setTimeout(() => {
                        onFinishedRef.current?.();
                    }, 700);

                }, animationsTimeStamps[3]);

            } else {
                setWait(true);
            }

        }, animationsTimeStamps[2]);
    }, []);

    // Wait for the ready state.
    useEffect(() => {

        if (!readyRef.current || !wait) return;

        setScale(1);
        loadingBarContainer.current?.classList.add('opacity-0');

        // Disappear animation
        const t = setTimeout(() => {
            onFinishedRef.current?.();
        }, 700);

        return () => {
            clearTimeout(t);
        }

    }, [ready, wait]);
        
    return (
        <div className="w-screen h-screen bg-black flex flex-col justify-center items-center gap-10">

            <div className="w-20 h-20 grid grid-cols-3 grid-rows-3 gap-1">

                {delays.map((delay, index) => (
                    (index !== 4) ? (

                        <div key={index} className="w-full h-full bg-white animate-appear" style={{ animationDelay: delay }} />
                    ): (
                        <div key={index} className="w-full h-full opacity-0" />
                    )
                ))}

            </div>

            <div ref={loadingBarContainer} className="w-5/10 h-1 bg-mist-800 transition-opacity duration-300 delay-500">

                <div ref={loadingBar} className="w-full h-full bg-white origin-left scale-x-0 transition-transform duration-300" />

            </div>
            
        </div>
    );
}