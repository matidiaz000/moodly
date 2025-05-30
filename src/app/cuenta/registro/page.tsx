'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link as MuiLink } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import NextLink from 'next/link'
import Input from '@/components/Input/Input';
import { redirect } from 'next/navigation';
import Submit from '@/components/Submit';

export default function RegistroCuenta() {
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [repeatEmail, setRepeatEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [repeatPassword, setRepeatPassword] = React.useState<string>();

  const handleSubmit = () => {
    console.log("name: ", name)
    console.log("email: ", email)
    console.log("repeatEmail: ", repeatEmail)
    console.log("password: ", password)
    console.log("repeatPassword: ", repeatPassword)
    redirect('/cuenta/ingreso');
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
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography variant="h5" component="h1">
          Crea tu cuenta
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ width: '100%', display: 'block', textAlign: 'center' }}>
          ¿Ya tenés una cuenta? <MuiLink component={NextLink} underline="none" href="/cuenta/ingreso">Inicia sesión</MuiLink>.
        </Typography>
      </Box>

      <Box sx={{ mb: 'auto', width: '100%' }}>
        <Input
          startAdorment={<PersonRoundedIcon sx={{ color: 'primary.main' }} />}
          type="text"
          name="name"
          label="Nombre y Apellido"
          sx={{ mb: 2 }}
          handleInput={(value: string | undefined) => setName(value)}
        />
        <Input
          startAdorment={<EmailRoundedIcon sx={{ color: 'primary.main' }} />}
          type="email"
          name="email"
          label="Correo electrónico"
          sx={{ mb: 2 }}
          handleInput={(value: string | undefined) => setEmail(value)}
        />
        <Input
          startAdorment={<EmailRoundedIcon sx={{ color: 'primary.main' }} />}
          type="email"
          name="repeatEmail"
          label="Repite tu correo electrónico"
          sx={{ mb: 2 }}
          handleInput={(value: string | undefined) => setRepeatEmail(value)}
        />
        <Input
          startAdorment={<LockRoundedIcon sx={{ color: 'primary.main' }} />}
          type="password"
          name="password"
          label="Contraseña"
          sx={{ mb: 2 }}
          handleInput={(value: string | undefined) => setPassword(value)}
        />
        <Input
          startAdorment={<LockRoundedIcon sx={{ color: 'primary.main' }} />}
          type="password"
          name="repeatPassword"
          label="Repite tu contraseña"
          handleInput={(value: string | undefined) => setRepeatPassword(value)}
        />
      </Box>

      <Submit handleSubmit={handleSubmit} label="Continuar">
        <Typography variant="caption" sx={{ width: '100%', display: 'block' }}>
          Al registrate aceptas nuestra <MuiLink component={NextLink} underline="none" href="#">política de datos</MuiLink>.
        </Typography>
      </Submit>
    </Box>
  );
}