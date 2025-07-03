'use client';
import React, { useState } from 'react';
import '../globals.css';
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function AboutPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className="apresentacao">
        <section className="apresentacao_texto">
            <h1 className="apresentacao_titulo">Sobre MisHuevos</h1>
            <p>MisHuevos é uma aplicação dedicada a gerenciar <strong className="huevos">meus ovos</strong> de forma simples e eficiente.</p>
            <p>Em breve, você poderá visualizar e gerenciar <strong className="huevos">meus ovos</strong> aqui.</p>
            <p>Agradecemos pela sua paciência!</p>
        </section>
    </main>
  )
}