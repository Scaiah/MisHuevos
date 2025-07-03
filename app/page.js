'use client';
import React, { useState } from 'react';
import './globals.css';
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function HomePage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="apresentacao">
        <section className="apresentacao_texto">
                <h1 className="apresentacao_titulo">MisHuevos</h1>
                <p>Bienvenido a MisHuevos, la aplicación para gestionar <strong className="huevos">mis huevos.</strong></p>
                <p>Pronto podrás ver tus huevos aquí.</p>
                <p>¡Gracias por tu paciencia!</p>
            <div className="apresentacao_imagens">
                <Image className="apresentacao_imagens_img1" src="/MisHuevos.jpg" alt="MisHuevos Logo" width={300} height={200} />
            </div>
                <h2 className="apresentacao_links_titulo">Acesse minhas redes:</h2>
            <div className="apresentacao_links">
                <a className="apresentacao_links_link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1&pp=ygUXbmV2ZXIgZ29ubmEgZ2l2ZSB5b3UgdXCgBwE%3D">
                    <Image className="apresentacao_links_icones" src={'/instagram.png'} alt="Instagram" width={24} height={24}/>Instagram
                </a>
                <a className="apresentacao_links_link" href="https://www.youtube.com/watch?v=iHBVr_Puz5E&pp=ygUYbyB0YW1hbmhvIGRhIG1pbmhhIHBpenph">
                    <Image className="apresentacao_links_icones" src={'/twitch.png'} alt="Twitch" width={24} height={24}/>Twitch</a>
                <a className="apresentacao_links_link" href="https://www.youtube.com/watch?v=kmcTEZTrsNg">
                    <Image className="apresentacao_links_icones" src={'/github.png'} alt="Github" width={24} height={24}/>Github</a>
            </div> 
        </section>
    </main>
  );
}
