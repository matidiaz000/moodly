'use client'
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/theme';
import { CssBaseline } from "@mui/material";
import "react-day-picker/style.css";
import '@/global.css';
import React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()

  React.useEffect(() => {
    const fetchData = async () => {
      const cookieName = 'token';
      try {
        const token = Cookies.get(cookieName)
        if (!token) return
        const expiration = getCookieExpiration(cookieName);
        if (expiration && expiration < new Date()) throw `Cookie with name ${cookieName} has expired.`
        const res = await fetch(`/api/account`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        });
        const data = await res.json();
        if (data) return
        else {
          Cookies.remove(cookieName)
          router.push('/cuenta')
        }
      } catch (err) {
        console.error(err)
        Cookies.remove(cookieName)
        router.push('/cuenta')
      }
    };

    fetchData();
  }, []);

  const getCookieExpiration = (name: string): Date | null => {
    const cookies = document.cookie.split('; ');
    const cookie = cookies.find(row => row.startsWith(`${name}=`));

    if (cookie) {
      const parts = cookie.split(';');
      const expiresPart = parts.find(part => part.trim().startsWith('expires='));
      if (expiresPart) {
        const expirationDateString = expiresPart.split('=')[1];
        return new Date(expirationDateString);
      }
    }
    return null;
  };

  return (
    <html lang="es">
      <body className={roboto.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}