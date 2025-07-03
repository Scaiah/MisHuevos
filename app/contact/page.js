'use client';
import React, { useState } from 'react';
import '../globals.css';
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function ContactPage() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main className='apresentacao'>
        <section className="formulario">
            <h1 className="formulario_titulo">Contact <strong className="huevos">My eggs</strong></h1>
            <form className="formulario_form" action="https://formspree.io/f/xjvjlzqk" method="POST">
                <label htmlFor="nome" className="formulario_label">Nome:</label>
                <input type="text" id="nome" name="nome" className="formulario_input" required></input>
                <label htmlFor="email" className="formulario_label">Email:</label>
                <input type="email" id="email" name="_replyto" className="formulario_input" required></input>
                <label htmlFor="mensagem" className="formulario_label">Mensagem:</label>
                <textarea id="mensagem" name="mensagem" className="formulario_textarea" required></textarea>
                <button type="submit" className="formulario_botao">Enviar</button>
            </form>
        </section>
    </main>
  )
}