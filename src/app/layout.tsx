import './globals.css'
import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../components/ThemeContext';
import Layout from '../components/Layout';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Student Portal for managing academic activities",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}
