import "../styles/style.scss";
import { PreloadResources } from './preload-resources';
import NavBar from "@/components/common/NavBar";
import Footer from "../components/common/Footer";
import WspFlotante from "@/components/common/WspFlotante";

export const metadata = {
  title: "VidaSana - Salud y bienestar",
  description: "En VidaSana nos preocupamos por el cuidado de tu salud y bienestar, empleando la tecnología para mejorar la calidad de vida de nuestros clientes."
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <PreloadResources />
      </head>
      <body>
        <WspFlotante/>
        <NavBar />
        {children}
        <Footer/>
      </body>

    </html>

  );
}
