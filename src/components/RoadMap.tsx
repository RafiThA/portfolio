
import { useEffect, useRef } from "react";
//import { animate, onScroll } from "animejs";

export default function RoadMap(
    {
        milestones,
        debug,
        className,
    }: {
        milestones: {header: string, desc: string, location: string, dates: string}[],
        debug?: boolean,
        className?: string,
    })
{

    const dotRef = useRef<HTMLDivElement>(null);
    //const cardsRef = useRef<(HTMLDivElement)[]>([]);

    useEffect(() => {

        return;
        
        /*
        if (!dotRef.current) return;
        if (!cardsRef.current) return;

        const dot = animate(dotRef.current,
            {
                scale: [1, 1.5],
                ease: "easeInOut",
                duration: 500,
                alternate: true,
                loop: true,
                autoplay: onScroll({
                    container: cardsRef.current,
                    debug: false,
                })
            }
        )

        return () => {
            dot.revert();
        }*/

    }, [])
    
    return (
        <div className={`relative flex flex-row items-start justify-left ${className} ${debug && 'bg-white/20'}`}>
                
            {/* Line Zone */}
            <div className={`relative w-10 h-full flex flex-col items-center justify-center py-2 ${debug && 'bg-red-500/20'}`}>

                {/* Timeline */}
                <div className={`w-1 h-full bg-white`} />

                <div className={`absolute h-[calc(100%-3rem)]`}>
                    {/* Timeline Point */}
                    <div ref={dotRef} className={`sticky w-5 aspect-square top-1/2 bg-white`} />
                </div>

            </div>

            {/* Content Zone */}
            <div className={`w-full h-full flex flex-col items-start justify-start gap-5 p-5 text-white ${debug && 'bg-blue-500/20'}`}
            >
                {/* Milestone */}

                {milestones.map((milestone, index) => (

                    <div key={index} className={`w-full h-full flex flex-col items-start justify-start ${debug && 'border-red-500 border-2'}`}>
                    
                        <div className={`sticky w-full h-fit flex flex-col items-start justify-start top-[49%] ${debug && 'bg-amber-50/50'} wrap-anywhere`}>
                            <h1 className="text-3xl">{milestone.header}</h1>
                            <p>{milestone.desc}</p>
                            <p>{milestone.location}</p>
                            <p>{milestone.dates}</p>
                        </div>

                    </div>
                ))}
                
            </div>
        </div>
    );
}