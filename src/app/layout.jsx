import { Nunito } from "next/font/google";
import "./globals.css";
import { companyName,colorLight,colorDark } from "./components/infoCompany";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata = {
  title: "hi)Menu by DROPBOOST",
  description: `MENU - ${companyName}`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
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
      <body className={`${nunito.variable} font-nunito h-screen`}>
        {children}
      </body>
    </html>
  );
}