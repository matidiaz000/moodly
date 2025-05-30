import { Container } from "@mui/material";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Container maxWidth="lg" sx={{ width: '100%', height: '100%' }}>
      {children}
    </Container>
  );
}