import './globals.css'
import { Mulish } from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer';

const mulish = Mulish({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: 's2flix',
  description: 's2sharpit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
