import "./globals.css";
import TopBar from "../components/TopBar";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import FloatingWhatsapp from "../components/FloatingWhatsapp";
import SideCta from "../components/SideCta";

export const metadata = {
  title: "HGS Diensten - Professionele Schoonmaak & Huishoudelijke Hulp | Amsterdam",
  description: "✓ Betrouwbare schoonmaakdiensten voor kantoor en thuis ✓ Ervaren team ✓ Milieuvriendelijk ✓ Gratis offerte ✓ Kwaliteitsgarantie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <TopBar />
        <Nav />
        {children}
        <CtaSection />
        <Footer />
        <FloatingWhatsapp />
        <SideCta />
      </body>
    </html>
  );
}
