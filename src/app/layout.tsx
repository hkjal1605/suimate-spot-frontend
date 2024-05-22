import "@/styles/global.css";

import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProgressBarProvider from "@/components/ProgressBarProvider";

import WalletProviderWrapper from "./WalletProviderWrapper";

export const metadata: Metadata = {
  icons: [
    {
      rel: "apple-touch-icon",
      url: "/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon-16x16.png",
    },
    {
      rel: "icon",
      url: "/favicon.ico",
    },
  ],
};

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600"],
});

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={props.params.locale} className={nunito.className}>
      <body>
        <ProgressBarProvider>
          <WalletProviderWrapper>
            <div className="w-full h-full flex flex-col items-center justify-center">
              <Header />
              <div className="w-full max-h-[calc(100vh-115px)] min-h-[calc(100vh-115px)] overflow-auto">
                {props.children}
              </div>
              <Footer />
            </div>
          </WalletProviderWrapper>
        </ProgressBarProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
