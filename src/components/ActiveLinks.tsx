import { useNavigate } from 'react-router';

export default function  ActiveLinks() {

    const navigate = useNavigate();

    return (
        <div className="fixed z-1000 w-full bottom-0 font-mono">
        <div className="flex row justify-around items-center
                        m-2 p-2
                        text-white text-xs
                        bg-black/50
                        backdrop-blur-[2px]">
            <button className="hover:bg-white hover:text-black p-1" onClick={() => {navigate('/dev')}}>PROYECTOS</button>
            <button className="hover:bg-white hover:text-black p-1" onClick={() => {navigate('/dev')}}>FORMACIÓN</button>
            <button className="hover:bg-white hover:text-black p-1" onClick={() => {navigate('/')}}>PERFIL</button>
            <button className="hover:bg-white hover:text-black p-1" onClick={() => {navigate('/dev')}}>EXPERIENCIA</button>
            <button className="hover:bg-white hover:text-black p-1" onClick={() => {navigate('/dev')}}>CONTACTO</button>
        </div>
        </div>
    )
}