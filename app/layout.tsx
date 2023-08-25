import "./globals.css";
import { Pacifico, Satisfy } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

const satisfy = Satisfy({
  subsets:['latin'],
  weight:['400'],
  variable: "--font-satisfy"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pacifico.variable} ${satisfy.variable} `}>
      <body className="bg-[#13262F] flex flex-col items-center">
        <div className="w-[1000px] h-[80px] flex items-center justify-center">
          <h1 className="text-5xl text-[#914D76] font-pacifico">Task Tracker</h1>
        </div>
        <div className="w-[1000px] bg-[#914D76] min-h-[calc(100vh-80px)] rounded-t-3xl p-8">
          {children}
        </div>
      </body>
    </html>
  );
}
