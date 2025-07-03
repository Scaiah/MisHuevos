import { Montserrat, Krona_One } from "next/font/google";
import "./globals.css";
import Link from 'next/link'

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const kronaOne = Krona_One({
  variable: "--font-kronaone",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "MisHuevos",
  description: "By Pedro Lima",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${kronaOne.variable} antialiased`}
      >
        <header className="cabecalho">
        <nav className="cabecalho_menu">
            <ul className="cabecalho_menu_lista">
                <li className="cabecalho_menu_item"><Link className="cabecalho_menu_link" href="/">Home</Link></li>
                <li className="cabecalho_menu_item"><Link className="cabecalho_menu_link" href="/about">About</Link></li>
                <li className="cabecalho_menu_item"><Link className="cabecalho_menu_link" href="/contact">Contact</Link></li>
            </ul>
        </nav>

    </header>
        {children}
        <footer className="rodape">
        <p className="rodape_texto">Desenvolvido por Pedro Lima</p>

    </footer>
      </body>
    </html>
  );
}
