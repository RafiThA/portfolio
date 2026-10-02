import { lazy, useEffect, useState } from "react";

const TextType = lazy(() => import("../components/bits/TextType"));
const DecryptedText = lazy(() => import("../components/bits/DecryptedText"));
const MicroSlats = lazy(() => import("../components/bits/MicroSlats"));
const DotField = lazy(() => import("../components/bits/DotField"));

import DomainGrid from '../components/DomainGrid';
import ActiveLinks from '../components/ActiveLinks';
import Selector from '../components/Selector';
import Card from '../components/Card';
import RoadMap from '../components/RoadMap';
import Loading from "../components/Loading";

export default function Profile() {

    const [ready, setReady] = useState(false);
    const [loadingFinished, setLoadingFinished] = useState(false);

    useEffect(() => {

        Promise.all([
            import("../components/bits/TextType"),
            import("../components/bits/DecryptedText"),
            import("../components/bits/MicroSlats"),
            import("../components/bits/DotField"),
        ]).then(() => {

            setReady(true);
        });

    }, []);

    if (!loadingFinished) return (<Loading ready={ready} onFinished={() => setLoadingFinished(true)} />);

    return (
        <>
            <ActiveLinks />

            {/* Profile section */}
            <div id="profile" className="selection:bg-pink-500 selection:text-white">

                {/* Animated Bg section */}
                <div className="w-full h-screen relative">

                    {/* Center container */}
                    <div className="flex justify-center items-center absolute w-full h-full">
                        
                        {/* Content section */}
                        <div className="relative w-[calc(100%-2.5rem)] h-[calc(100%-2.5rem)] bg-white/10 backdrop-blur-xs z-10
                                        flex flex-col items-center justify-start gap-2">
                            
                            {/* Photo section */}
                            <div className="relative w-full aspect-square flex justify-center items-center
                                            sm:w-8/10 md:w-7/10 lg:w-5/10 xl:w-4/10 2xl:w-3/10">

                                <div className="absolute w-1/10 aspect-square bg-pink-500 top-3 left-3" />

                                <Selector className="absolute top-3 right-3 z-100"/>

                                <img className="w-9/10 h-9/10 bg-white/40" src="/portfolio/Profile.png" alt="foto" />
                            
                            </div>
                            

                            <h1 className="w-9/10 text-white text-center bg-black/70 backdrop-blur-xs pt-5 pb-5">
                                <TextType 
                                    text={["Rafael Molleja Jiménez", "Rafael", "Molleja", "Jiménez", "Rafael Molleja Jiménez"]}
                                    typingSpeed={75}
                                    pauseDuration={1500}
                                    showCursor
                                    cursorCharacter="█"
                                    deletingSpeed={50}
                                    variableSpeed={{ min: 60, max: 120 }}
                                    cursorBlinkDuration={0.5}
                                    loop={false}
                                    className="w-full"
                                />
                            </h1>
                            

                            <p className="w-full font-micro text-3xl text-white text-center">
                                <DecryptedText
                                    text="Ingeniero Informatico"
                                    speed={100}
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                    animateOn="inViewHover"
                                />
                            </p>

                            <p className="w-full font-micro text-2xl text-white text-center">
                                <DecryptedText
                                    text="Especializado en Computación"
                                    speed={100}
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                    animateOn="inViewHover"
                                />
                            </p>
                            

                            <div className="select-none absolute right-0 bottom-0 w-full h-full flex justify-end items-end gap-5 p-5">
                                <a href="https://github.com/RafiThA" target="_blank" rel="noopener noreferrer"><img className="social-btn" src="/portfolio/Github.png" alt="github" /></a>
                                <a href="https://www.linkedin.com/in/rafael-molleja-jim%C3%A9nez/" target="_blank" rel="noopener noreferrer"><img className="social-btn" src="/portfolio/Linkedin.png" alt="linkedin" /></a>
                                <a href="https://www.instagram.com/rafaelmj__?stkn=dzh4aW14YzIzbjg0" target="_blank" rel="noopener noreferrer"><img className="social-btn" src="/portfolio/Instagram.png" alt="instagram" /></a>
                                <a href="https://buymeacoffee.com/rafaelmolln" target="_blank" rel="noopener noreferrer"><img className="social-btn" src="/portfolio/Coffee.png" alt="buymeacoffee" /></a>
                            </div>

                        </div>
                    </div>
                    
                    <MicroSlats
                        color="#ffffff"
                        glintColor="#EC4899"
                        backgroundColor="#000000"
                        slatWidth={9}
                        slatHeight={9}
                        gap={3}
                        roundness={1}
                        speed={0.5}
                        scale={1}
                        direction={250}
                        chop={0}
                        stretch={0}
                        glint={1.1}
                        contrast={1.1}
                        perspective={0.5}
                        fog={0.5}
                        interactive
                        cursorStrength={1.1}
                        cursorSize={25}
                        swirl={0}
                        trail={1}
                        lean={0}
                        intro
                        introDuration={3}
                        paused={false}
                    />

                </div>

                {/* First section */}
                <div className="h-full w-full flex flex-col items-center justify-start gap-2 p-10
                                bg-linear-to-b from-white from-50% to-black">

                    <h1 className="py-10 md:py-20 lg:py-30">SOBRE MÍ</h1>

                    <p className="sm:w-150">
                        Ingeniero Informático por la Universidad de Córdoba, con especialización en Computación.
                    </p>

                    <p className="sm:w-150">
                        Poseo un gran interés en el ámbito de la inteligencia artificial, la visión por computador, el diseño UX/UI y la gestión y análisis de datos.
                    </p>

                    <p className="sm:w-150">
                        A nivel profesional, me defino como una persona competente, proactiva y orientada al aprendizaje continuo, con especial motivación por adquirir y desarrollar nuevas habilidades en el sector tecnológico.
                    </p>


                    <h1 className="py-10 md:py-20 lg:py-30">VISIÓN</h1>

                    <p className="sm:w-150">
                        Veo la tecnologia como un arte para poder expresar creatividad e innovación mediante el diseño. Creo que menos es más, y me fascina poder crear arte con todas las herramientas que la tecnología pone en disposición para poder ayudar y mejorar la vida de otras personas.
                    </p>

                    <h1 className="py-10 md:py-20 lg:py-30">DOMINIO</h1>
                    
                    <DomainGrid />
                    
                </div>
            </div>
            

            {/*------------------------------------------------------------------------------------------------*/}


            {/* Second body section */}
            <div className="h-full w-full flex flex-col items-center justify-start gap-2 p-10 bg-black selection:bg-pink-500">

                <div className="w-full h-full min-h-screen flex flex-col items-center justify-start gap-5">

                    <h1 id="projects" className="py-10 md:py-20 lg:py-30 text-white">PROYECTOS</h1>

                    <div className="w-full h-full max-lg:flex max-lg:flex-col items-center justify-start gap-5
                                    lg:grid lg:grid-cols-3 lg:gap-5">

                        <Card
                            
                            header={`Experiencia Interactiva sobre "El Ajedrecista" y Agente IA del inventor Leonardo Torres Quevedo`}
                            content={`Trabajo de Fin de Grado sobre el desarrollo de una aplicación de realidad mixta que recrea "El Ajedrecista", el histórico autómata diseñado por el ingeniero e inventor Leonardo Torres Quevedo, junto con el desarrollo de un agente de IA basado en modelos de lenguaje (LLM) con contexto personalizado para la plataforma Meta Quest`}
                            banner="/portfolio/images/leonardo-banner.png"
                            links={[
                                {url: "https://github.com/RafiThA/Experiencia-Interactiva-sobre-El-Ajedrecista-y-Agente-IA-del-inventor-Leonardo-Torres-Quevedo", text: "Enlace al proyecto"},
                                {url: "https://github.com/RafiThA/Experiencia-Interactiva-sobre-El-Ajedrecista-y-Agente-IA-del-inventor-Leonardo-Torres-Quevedo/releases/tag/v1.1.0", text: "Descarga la última versión"}
                            ]}
                        />

                        <Card
                            
                            header={`MusicQuiz`}
                            content={`MusicQuiz es un juego donde los jugadores pueden adivinar canciones subidas de manera local. Permite personalizar el juego y jugar en modo multijugador`}
                            banner="/portfolio/images/musicquiz-banner.jpeg"
                            links={[
                                    {url: "https://github.com/RafiThA/MusicQuiz", text: "Enlace al proyecto"},
                                    {url: "https://github.com/RafiThA/MusicQuiz/releases/tag/v1.0.0", text: "Descarga la última versión"},
                                ]}
                        />

                        <Card
                            header={`QRStock`}
                            content={`QRStock es una webapp y aplicación móvil que permite gestionar el inventario para varios lugares. Permite generar y escanear QR para notificar cuando un objeto es recogido y devuelto de un espacio y ver el estado del stock en cualquier momento`}
                            banner="/portfolio/images/qrstock-banner.jpeg"
                            links={[
                                {url: "https://github.com/RafiThA/QRStock", text: "Enlace al proyecto"}
                            ]}
                        />

                    </div>

                </div>


                <div className="w-full h-full min-h-screen flex flex-col items-center justify-start gap-5">

                    <h1 id="experience" className="py-10 md:py-20 lg:py-30 text-white">EXPERIENCIA</h1>
                    
                    <RoadMap
                        milestones={[
                            {header: 'Indra Group', desc: 'Ingeniero de Visión Artificial - Prácticas Empresa', location: 'Córdoba, España', dates: 'MAR 2026 - JUL 2026'},
                        ]}
                        className="w-full h-[60vh]"
                    />

                </div>
                

                <div className="w-full h-full min-h-screen flex flex-col items-center justify-start gap-5">

                    <h1 id="education" className="py-10 md:py-20 lg:py-30 text-white">FORMACIÓN</h1>

                    <RoadMap
                        milestones={[
                            {header: 'Bachillerato Tecnológico', desc: 'IES Medina Azahara', location: 'Córdoba, España', dates: 'SEP 2020 - JUL 2022'},
                            {header: 'Grado en Ingeniería Informática con especialización en Computación', desc: 'Universidad de Córdoba', location: 'Córdoba, España', dates: 'SEP 2022 - JUL 2026'},
                        ]}
                        className="w-full h-[120vh]"
                    />

                </div>


                <div className="relative w-full h-full flex flex-col items-center justify-start gap-5">
                    
                    <h1 id="contact" className="py-10 md:py-20 lg:py-30 text-white">CONTACTO</h1>

                    <div className="relative w-full h-full flex flex-col items-center justify-center gap-5 py-10">

                        <DotField
                            dotRadius={1.5}
                            dotSpacing={14}
                            bulgeStrength={0}
                            glowRadius={0}
                            sparkle
                            waveAmplitude={0}
                            cursorRadius={0}
                            cursorForce={0}
                            bulgeOnly
                            gradientFrom="#ffffff"
                            gradientTo="#ffffff"
                            glowColor="#000000"
                            className="absolute w-full h-full top-0 left-0 z-0"
                        />

                        <a href="mailto:rafael.molleja04@gmail.com" target="_blank" rel="noopener noreferrer" className="z-10">rafael.molleja04@gmail.com</a>
                        <a href="tel:+34666989133" target="_blank" rel="noopener noreferrer" className="z-10">+34 666 989 133</a>

                        <div className="w-full h-full flex justify-center items-center gap-5">
                            <a href="https://github.com/RafiThA" target="_blank" rel="noopener noreferrer" className="z-10"><img className="social-btn invert" src="/portfolio/Github.png" alt="github" /></a>
                            <a href="https://www.linkedin.com/in/rafael-molleja-jim%C3%A9nez/" target="_blank" rel="noopener noreferrer" className="z-10"><img className="social-btn" src="/portfolio/Linkedin.png" alt="linkedin" /></a>
                            <a href="https://www.instagram.com/rafaelmj__?stkn=dzh4aW14YzIzbjg0" target="_blank" rel="noopener noreferrer" className="z-10"><img className="social-btn" src="/portfolio/Instagram.png" alt="instagram" /></a>
                            <a href="https://buymeacoffee.com/rafaelmolln" target="_blank" rel="noopener noreferrer" className="z-10"><img className="social-btn" src="/portfolio/Coffee.png" alt="buymeacoffee" /></a>
                        </div>

                    </div>

                </div>

                {/* Space for navbar */}
                <div className="h-10 w-full bg-black" />

            </div>

        </>
    
    );
}