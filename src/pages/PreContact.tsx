import ShapeWaves from "../components/ShapeWaves"

export default function PreContact() {
    return (
        <div className="w-dvw h-dvh">
            
            <div className="z-1 w-full h-full pt-10 pb-10 font-mono text-white flex flex-col absolute content-around items-center gap-10">
                
                <h1 className=" animate-page-enter3 transition-blur text-3xl w-9/10 h-10 flex items-center justify-center bg-white/10 backdrop-blur-xs">CONTACTO</h1>
                
                <div className="z-3 w-9/10 h-full flex flex-col justify-center items-center gap-10">
                    
                    <div className="animate-page-enter2 z-5 w-full flex flex-col justify-center items-center gap-2 pt-5 pb-5 pl-10 pr-10 bg-white/10 backdrop-blur-xs">
                        <p className="text-xl">EMAIL</p>
                        <a className="underline active:text-pink-500 hover:text-pink-500" href="mailto:rafael.molleja04@gmail.com">rafael.molleja04@gmail.com</a>
                    </div>

                    <div className="animate-page-enter1 z-5 w-full flex flex-col justify-center items-center gap-2 pt-5 pb-5 pl-10 pr-10 bg-white/10 backdrop-blur-xs">
                        <p className="text-xl">TELÉFONO</p>
                        <a className="underline active:text-pink-500 hover:text-pink-500" href="tel:+34666989133">+34 666 989 133</a>
                    </div>

                    <div className="animate-page-enter2 z-5 w-full flex flex-col justify-center items-center gap-2 pt-5 pb-5 pl-10 pr-10 bg-white/10 backdrop-blur-xs">
                        <p className="text-xl">SOCIAL</p>

                        <a className="underline active:text-pink-500 hover:text-pink-500" href="https://www.linkedin.com/in/rafael-molleja-jim%C3%A9nez/">LinkedIn</a>
                        <a className="underline active:text-pink-500 hover:text-pink-500" href="https://github.com/RafiThA">Github</a>
                </div>
                </div>

            </div>

            <ShapeWaves
                text=""
                fontFamily='Geist, "Geist Sans", system-ui, sans-serif'
                fontWeight={500}
                textSize={0.6}
                shapes="mixed"
                cellSize={10}
                dotSize={0.75}
                color="#929292"
                hoverColor="#ffffff"
                backgroundColor="#120f17"
                speed={0.5}
                scale={1}
                contrast={1}
                brightness={0.5}
                flow={0}
                direction={0}
                fade={0.25}
                interactive={false}
                splashRadius={40}
                splashStrength={0.4}
                glow={0.35}
                intro
                introDuration={1.6}
                paused={false}
                onError={(error) => console.error('ShapeWaves error:', error)}
                className="absolute w-full h-full z-0"
            />

        </div>
    );
}