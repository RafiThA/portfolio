import ActiveLinks from '../components/ActiveLinks';
import ShapeWaves from '../components/ShapeWaves';

export default function Home() {


    return (
        <div>

            <ActiveLinks />

            <div className="w-full h-dvh relative">

                <div className="flex justify-center items-center absolute w-full h-full">
                    <div className="w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] bg-white/10 backdrop-blur-xs z-10 flex flex-col">

                        <img className="w-full h-full filter-blur-1" src="/portfolio/Profile.png" alt="foto" />
                        <h1>Rafael Molleja Jiménez</h1>
                        <h2>Ingeniero informatico especializado en computación</h2>
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
                    onError={(error) => console.error('ShapeWaves error:', error)}
                    className="absolute w-full h-full z-0"
                />
            </div>

            <h1>Sobre mi</h1>
            <p>parrafada</p>

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


            <h1>Proyectos</h1>
            <p>Hacer una rueda con mis proyectos y si clickas te sale mas info</p>

            <h1>Experiencia</h1>
            <p>Practicas</p>
            <p>Buscando oportunidad de primer empleo</p>

            <h1>Formación</h1>
            <p>Bachi, grado y master</p>

            <h1>Idiomas</h1>
            <p>Lista en la derecha</p>

            <h1>Contacto</h1>
            <p>mi conectacto</p>
        </div>
    );
}