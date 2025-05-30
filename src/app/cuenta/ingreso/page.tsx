'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link as MuiLink } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import NextLink from 'next/link'
import Input from '@/components/Input/Input';
import Image from 'next/image'
import { redirect } from 'next/navigation';
import Submit from '@/components/Submit';

export default function IngresoCuenta() {
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();

  const handleSubmit = () => {
    console.log("email: ", email)
    console.log("password: ", password)
    redirect('/tutorial');
  }

  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <Typography variant="h5" component="h1">
          ¡Hola, te damos la bienvenida!
        </Typography>
      
        <Box sx={{ my: 3 }}>
          <Image
            src="/bienvenida.svg"
            alt="¡Hola, te damos la bienvenida!"
            width="330"
            height="241"
            priority
          />
        </Box>
      </Box>

      <Box sx={{ mb: 'auto', width: '100%' }}>
        <Input
          startAdorment={
            <EmailRoundedIcon sx={{ color: 'primary.main' }} />
          }
          type="email"
          name="email"
          label="Correo electrónico"
          sx={{ mb: 2 }}
          handleInput={(value: string | undefined) => setEmail(value)}
        />

        <Input
          startAdorment={
            <LockRoundedIcon sx={{ color: 'primary.main' }} />
          }
          type="password"
          name="password"
          label="Contraseña"
          handleInput={(value: string | undefined) => setPassword(value)}
        />

        <Typography variant="caption" sx={{ width: '100%', display: 'block', textAlign: 'right', mt: 2 }}>
          <MuiLink component={NextLink} underline="none" href="/cuenta/recuperar">¿Olvidaste tu contraseña?</MuiLink >
        </Typography>
      </Box>

      <Submit handleSubmit={handleSubmit} label="Iniciar Sesión">
        <Typography variant="caption">
          ¿No tenés una cuenta? <MuiLink component={NextLink} underline="none" href="/cuenta/registro">Registrate</MuiLink>
        </Typography>
      </Submit>
    </Box>
  );
}