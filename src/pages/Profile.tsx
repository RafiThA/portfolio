import ActiveLinks from '../components/ActiveLinks';
import ShapeWaves from '../components/ShapeWaves';

export default function Profile() {

    return (
        <div>
            
            {/* Header section */}
            <div id="profile" className="w-full h-dvh relative">

                <div className="flex justify-center items-center absolute w-full h-full">
                    <div className="w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] bg-white/10 backdrop-blur-xs z-10
                                    flex flex-col items-center justify-start gap-2">

                        <div className="w-full aspect-square flex justify-center items-center">
                            <div className="absolute w-1/10 aspect-square bg-pink-500 top-3 left-3" />
                            <img className="w-9/10 h-9/10 bg-white/40" src="/portfolio/Profile.png" alt="foto" />
                        </div>
                        
                        <h1 className="text-white">Rafael Molleja Jiménez</h1>
                        
                        <p className="font-micro text-3xl text-pink-500">Ingeniero Informatico</p>
                        <p className="font-micro text-3xl text-pink-500">Especializado en Computación</p>
                        
                        <a href="#">Github</a>
                        
                        <a href="#">Linkedin</a>

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
                    speed={1}
                    scale={1}
                    contrast={1}
                    brightness={0.4}
                    flow={0}
                    direction={0}
                    fade={0.25}
                    interactive
                    splashRadius={40}
                    splashStrength={0.4}
                    glow={0.35}
                    intro
                    introDuration={1.6}
                    paused={false}
                    onError={(error) => {console.error('ShapeWaves error:', error);}}
                    className="absolute w-full h-full z-0"
                />
            </div>

            {/* Body section */}
            <div className="h-full w-full flex flex-col items-center justify-start gap-2 p-4">

                <h1 className="text-pink-500">SOBRE MÍ</h1>

                <p>
                    Ingeniero Informático por la Universidad de Córdoba, con especialización en Computación.
                </p>

                <p>
                    Poseo un gran interés en el ámbito de la inteligencia artificial, la visión por computador, el diseño UX/UI y la gestión y análisis de datos.
                </p>

                <p>
                    A nivel profesional, me defino como una persona competente, proactiva y orientada al aprendizaje continuo, con especial motivación por adquirir y desarrollar nuevas habilidades en el sector tecnológico.
                </p>


                <h1>Vision</h1>
                <p>Veo la tecnologia como un arte para poder expresar creatividad e innovación mediante el diseño. Creo que menos es más, y me fascina poder crear arte con todas las herramientas que la tecnología pone en disposición para poder ayudar y mejorar la vida de otras personas.</p>

                <h1>Dominio</h1>
                <div className="flex flex-wrap">
                    <span>Electron</span>
                    <span>Typescript</span>
                    <span>Javascript</span>
                    <span>Meta Quest</span>
                    <span>Unity</span>
                    <span>Ollama</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Tailwind CSS</span>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Next.js</span>
                    <span>OpenCV</span>
                    <span>C++</span>
                    <span>C</span>
                    <span>C#</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>SQL</span>
                    <span>Android</span>
                    <span>IOS</span>
                    <span>Vite</span>
                    <span>Angular</span>
                    <span>VSCode</span>
                    <span>Linux Bash</span>
                    <span>Github</span>
                    <span>GitLab</span>
                    <span>Git</span>
                    <span>Slack</span>
                    <span>Teams</span>
                    <span>Wordpress</span>
                    <span>Flask</span>
                    <span>PL/SQL</span>
                    <span>SQLlite</span>
                    <span></span>
                </div>



                <h1 id="projects">Proyectos</h1>
                <p>Hacer una rueda con mis proyectos y si clickas te sale mas info</p>

                <h1 id="experience">Experiencia</h1>
                <p>Practicas</p>
                <p>Buscando oportunidad de primer empleo</p>

                <h1 id="education">Formación</h1>
                <p>Bachi, grado y master</p>

                <h1>Idiomas</h1>
                <p>Lista en la derecha</p>

                <h1 id="contact">Contacto</h1>
                <p>mi conectacto</p>

            </div>
            
            {/* Space for tab */}
            <div className="h-13 w-full" />

        </div>
    
    );
}