
import { ContextProvider } from "./context";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "./(my-routes)/sidebar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saas AI",
  description: "Saas AI, your everyday AI buddy!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <div className="grid grid-cols-12 grid-rows-4 w-full h-full">
          <SideBar />
          <ContextProvider>{children}</ContextProvider>
        </div>
      </body>
    </html>
  );
}
