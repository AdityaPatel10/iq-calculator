import MainLayout from "@/layouts/main-layout";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IQ Calculator App",
  description: "Test your IQ with our online app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout children={children} />
      </body>
    </html>
  );
}
