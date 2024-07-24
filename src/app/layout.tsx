import type { Metadata } from "next";
import "./globals.css";
import StyledComponentsRegistry from "@/lib/register";
import { RobotoRegular } from "@/lib/font";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";


export const metadata: Metadata = {
  title: "NutriBem",
  description: "Descubra como otimizar sua saúde com nosso serviço de nutrição personalizado. Oferecemos planos alimentares para todas as necessidades, incluindo nutrição esportiva, materna e infantil. Transforme seu bem-estar com orientação profissional e alcance seus objetivos de saúde de maneira prática e eficaz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="shortcut icon" href="/img/Logo.png" type="image/png" />
      </head>
      <body className={RobotoRegular.variable}>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
