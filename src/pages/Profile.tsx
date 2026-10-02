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

import { useLanguage } from "../lang/Language";

export default function Profile() {

    const { translate } = useLanguage();

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
                                    text={`${translate("profile/subtitle")}`}
                                    speed={100}
                                    revealDirection="start"
                                    sequential
                                    useOriginalCharsOnly={false}
                                    animateOn="inViewHover"
                                />
                            </p>

                            <p className="w-full font-micro text-2xl text-white text-center">
                                <DecryptedText
                                    text={`${translate("profile/specialization")}`}
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

                    <h1 className="py-10 md:py-20 lg:py-30 uppercase">{translate('about/title')}</h1>

                    <p className="sm:w-150">
                        {translate('about/content1')}
                    </p>

                    <p className="sm:w-150">
                        {translate('about/content2')}
                    </p>

                    <p className="sm:w-150">
                        {translate('about/content3')}
                    </p>


                    <h1 className="py-10 md:py-20 lg:py-30">{translate('vision/title')}</h1>

                    <p className="sm:w-150">
                        {translate('vision/content')}
                    </p>

                    <h1 className="py-10 md:py-20 lg:py-30 uppercase">{translate('domain/title')}</h1>
                    
                    <DomainGrid />
                    
                </div>
            </div>
            

            {/*------------------------------------------------------------------------------------------------*/}


            {/* Second body section */}
            <div className="h-full w-full flex flex-col items-center justify-start gap-2 p-10 bg-black selection:bg-pink-500">

                <div className="w-full h-full min-h-screen flex flex-col items-center justify-start gap-5">

                    <h1 id="projects" className="py-10 md:py-20 lg:py-30 text-white uppercase">{translate('projects/title')}</h1>

                    <div className="w-full h-full max-lg:flex max-lg:flex-col items-center justify-start gap-5
                                    lg:grid lg:grid-cols-3 lg:gap-5">

                        <Card
                            
                            header={translate('projects/card1/header')}
                            content={translate('projects/card1/content')}
                            banner="/portfolio/images/leonardo-banner.png"
                            links={[
                                {url: "https://github.com/RafiThA/Experiencia-Interactiva-sobre-El-Ajedrecista-y-Agente-IA-del-inventor-Leonardo-Torres-Quevedo", text: translate('projects/card1/link')},
                                {url: "https://github.com/RafiThA/Experiencia-Interactiva-sobre-El-Ajedrecista-y-Agente-IA-del-inventor-Leonardo-Torres-Quevedo/releases/tag/v1.1.0", text: translate('projects/card1/link2')}
                            ]}
                        />

                        <Card
                            
                            header={translate('projects/card2/header')}
                            content={translate('projects/card2/content')}
                            banner="/portfolio/images/musicquiz-banner.jpeg"
                            links={[
                                    {url: "https://github.com/RafiThA/MusicQuiz", text: translate('projects/card2/link')},
                                    {url: "https://github.com/RafiThA/MusicQuiz/releases/tag/v1.0.0", text: translate('projects/card2/link2')},
                                ]}
                        />

                        <Card
                            header={translate('projects/card3/header')}
                            content={translate('projects/card3/content')}
                            banner="/portfolio/images/qrstock-banner.jpeg"
                            links={[
                                {url: "https://github.com/RafiThA/QRStock", text: translate('projects/card3/link')}
                            ]}
                        />

                    </div>

                </div>


                <div className="w-full h-full min-h-screen flex flex-col items-center justify-start gap-5">

                    <h1 id="experience" className="py-10 md:py-20 lg:py-30 text-white uppercase">{translate('experience/title')}</h1>
                    
                    <RoadMap
                        milestones={[
                            {header: translate('experience/milestone1/header'), desc: translate('experience/milestone1/desc'), location: translate('experience/milestone1/location'), dates: translate('experience/milestone1/dates')},
                        ]}
                        className="w-full h-[60vh]"
                    />

                </div>
                

                <div className="w-full h-full min-h-screen flex flex-col items-center justify-start gap-5">

                    <h1 id="education" className="py-10 md:py-20 lg:py-30 text-white uppercase">{translate('education/title')}</h1>

                    <RoadMap
                        milestones={[
                            {header: translate('education/milestone1/header'), desc: translate('education/milestone1/desc'), location: translate('education/milestone1/location'), dates: translate('education/milestone1/dates')},
                            {header: translate('education/milestone2/header'), desc: translate('education/milestone2/desc'), location: translate('education/milestone2/location'), dates: translate('education/milestone2/dates')},
                        ]}
                        className="w-full h-[120vh]"
                    />

                </div>


                <div className="relative w-full h-full flex flex-col items-center justify-start gap-5">
                    
                    <h1 id="contact" className="py-10 md:py-20 lg:py-30 text-white uppercase">{translate('contact/title')}</h1>

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