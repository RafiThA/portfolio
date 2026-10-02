import { useEffect, useState } from 'react';

export default function  ActiveLinks() {

    const [selected, setSelected] = useState<string>('profile');

    const goToSection = (sectionId: string) => {

        const section = document.getElementById(sectionId);

        if (section) {

            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {

        const sections = [
            'profile',
            'projects',
            'experience',
            'education',
            'contact',
        ];

        const observer = new IntersectionObserver((entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {
                    
                    setSelected(entrada.target.id);
                }
            });

        }, { threshold: 0.1 }); // 10% Visible


        sections.forEach((section) => {

            const element = document.getElementById(section);

            if (element) {
                observer.observe(element);
            }
        });

        window.addEventListener('scroll', () => {

            const navbar = document.getElementById('navbar');

            if (navbar) {

                if (window.scrollY <= 0) {

                    navbar.classList.add('blur-sm', 'translate-y-15');
                } else {

                    navbar.classList.remove('blur-sm', 'translate-y-15');
                }
            }

        })

        return () => {
            window.removeEventListener('scroll', () => {});
            observer.disconnect();
        }

    }, []);

    

    return (
        <div id="navbar" className="flex justify-center items-center selection-none duration-750 ease-in-out fixed z-1000 w-full bottom-0 font-mono blur-sm translate-y-15">
            
            <div className="flex row justify-around items-center
                            m-2 p-2
                            w-full
                            text-white text-xs
                            bg-black/50
                            backdrop-blur-[2px]
                            sm:w-150">

                <button className={selected === 'projects' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {goToSection('projects');}}>
                            PROYECTOS
                </button>

                <button className={selected === 'experience' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {goToSection('experience');}}>
                            EXPERIENCIA
                </button>

                <button className={selected === 'profile' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {goToSection('profile');}}>
                            PERFIL
                </button>

                <button className={selected === 'education' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {goToSection('education');}}>
                            FORMACIÓN
                </button>

                <button className={selected === 'contact' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {goToSection('contact');}}>
                            CONTACTO
                </button>

            </div>
        </div>
    )
}