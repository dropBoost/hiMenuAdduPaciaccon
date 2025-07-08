import { Nunito } from "next/font/google";
import "./globals.css";
import { companyName,colorLight,colorDark, logoLight } from "./components/infoCompany";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: `${companyName} • HiMenu`,
  description: `MENU - ${companyName}`,
  // icons: {
  //   icon: {logoLight}, // ✅ richiamo della favicon
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content={colorLight}/>
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content={colorLight}/>
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="icon" href={logoLight} type="image/png"></link>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              ::-webkit-scrollbar {
                width: 0.7rem;
              }
              ::-webkit-scrollbar-track {
                background: #c6c6c6;
              }
              ::-webkit-scrollbar-thumb {
                background: ${colorLight};
              }
              ::-webkit-scrollbar-thumb:hover {
                background: ${colorDark};
              }
            `,
          }}
        />
      </head>
      <body className={`${nunito.variable} font-nunito h-screen bg-neutral-950`}>
        {children}
      </body>
    </html>
  );
}