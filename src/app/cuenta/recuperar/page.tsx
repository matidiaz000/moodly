'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link as MuiLink } from '@mui/material';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NextLink from 'next/link'
import Input from '@/components/Input/Input';
import { redirect } from 'next/navigation';
import Submit from '@/components/Submit';

export default function RecuperarCuenta() {
  const [email, setEmail] = React.useState<string>();
  const [submit, setSubmit] = React.useState<boolean>(false); 

  const handleSubmit = () => {
    if (submit === true) {
      redirect('/cuenta')
    } else {
      console.log("email: ", email)
      setSubmit(true)
    }
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
          Recupera tu cuenta
        </Typography>
        {!submit &&
          <Typography variant="caption" gutterBottom sx={{ width: '100%', display: submit ? 'none' : 'block', textAlign: 'center' }}>
            ¿Recordaste tus datos? <MuiLink component={NextLink} underline="none" href="/cuenta/ingreso">Inicia sesión</MuiLink>.
          </Typography>
        }
      </Box>

      <Box sx={{ mb: 'auto', width: '100%' }}>
        {submit ?
        <Typography>Te hemos enviado un correo con un link para que puedas restablecer tu contraseña.</Typography>
        :
        <Box>
          <Typography>Introduce tu correo electrónico para buscar tu cuenta.</Typography>
          <Input
            startAdorment={<EmailRoundedIcon sx={{ color: 'primary.main' }} />}
            type="email"
            name="email"
            label="Correo electrónico"
            sx={{ mt: 2 }}
            handleInput={(value: string | undefined) => setEmail(value)}
          />
        </Box>
        }
      </Box>

      <Submit handleSubmit={handleSubmit} label={submit ? "Volver" : "Continuar"}>
        {!submit &&
        <Typography variant="caption" sx={{ width: '100%', display: 'block' }}>
          Al continuar te enviaremos un correo para restablecer tu contraseña.
        </Typography>
        }
      </Submit>
    </Box>
  );
}