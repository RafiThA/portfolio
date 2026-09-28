import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function  ActiveLinks() {

    const navigate = useNavigate();

    const [selected, setSelected] = useState<string>('profile');

    return (
        <div className="fixed z-1000 w-full bottom-0 font-mono">
            <div className="flex row justify-around items-center
                            m-2 p-2
                            text-white text-xs
                            bg-black/50
                            backdrop-blur-[2px]">

                <button className={selected === 'projects' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {navigate('/projects'); setSelected('projects');}}>
                            PROYECTOS
                </button>

                <button className={selected === 'education' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {navigate('/education'); setSelected('education');}}>
                            FORMACIÓN
                </button>

                <button className={selected === 'profile' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {navigate('/'); setSelected('profile');}}>
                            PERFIL
                </button>

                <button className={selected === 'experience' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {navigate('/experience'); setSelected('experience');}}>
                            EXPERIENCIA
                </button>

                <button className={selected === 'contact' ? 'nb-btn-selected' : 'nb-btn'}
                        onClick={() => {navigate('/contact'); setSelected('contact');}}>
                            CONTACTO
                </button>

            </div>
        </div>
    )
}