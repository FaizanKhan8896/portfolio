import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LenisProvider } from "@/components/layout/LenisProvider";
import { Navigation } from "@/components/layout/Navigation";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Faizan Khan - AI Engineer & Full Stack Developer",
  description: "Portfolio of Faizan Khan, an elite AI Engineer and Creative Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${inter.variable} ${syne.variable} font-sans antialiased bg-black text-white selection:bg-white/20 selection:text-white cursor-none tracking-tight`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LenisProvider>
            <CustomCursor />
            <ScrollProgress />
            <LoadingScreen />
            <Navigation />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
