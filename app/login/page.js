'use client';
import React, { useState } from 'react';
import '../globals.css';
import Image from "next/image";
import { usePathname } from 'next/navigation'

export default function LoginPage() {
  const [openModal, setOpenModal] = useState(false);
  const pathname = usePathname();

function handleModal() {
    setOpenModal(!openModal);
  }

function login(event) {
    const email = event.target.email.value;
    const senha = event.target.senha.value;
    if (email === "admin@admin.com" && senha === "admin") {
        setOpenModal(true);
    } else {
        alert("Email ou senha incorretos");
    }
  }

  return (
    <main className="login">
      <section className="login_section">
        <h1 className="login_titulo">Login</h1>
        <form className="login_form" onSubmit={login} method="POST">
          <label htmlFor="email" className="login_label">Email:</label>
          <input type="email" id="email" name="email" className="login_input" required></input>
          <label htmlFor="senha" className="login_label">Senha:</label>
          <input type="password" id="senha" name="senha" className="login_input" required></input>
          <button type="submit" className="login_botao">Entrar</button>
        </form>
      </section>
    </main>
  )
}
