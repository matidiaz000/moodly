'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import { Container, Typography } from '@mui/material';
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import Input from '@/components/Input/Input';
import Submit from '@/components/Submit';
import { redirect } from 'next/navigation';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

export default function Perfil() {
  const [imgProfile, setImgProfile] = React.useState<string>();
  const [name, setName] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [password, setPassword] = React.useState<string>();
  const [repeatPassword, setRepeatPassword] = React.useState<string>();

  const handleSubmit = () => {
    console.log("imgProfile: ", imgProfile)
    console.log("name: ", name)
    console.log("email: ", email)
    console.log("password: ", password)
    console.log("repeatPassword: ", repeatPassword)
    redirect('/registros');
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 'calc(100% - 56px)'
        }}
      >
        <Header title='Terapia' />
        <Container
          maxWidth="lg"
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
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', mb: 3 }} onClick={() => setImgProfile('/happy.jpg')}>
            <Button 
              sx={{
                backgroundImage: `url(${imgProfile})`,
                width: '33.3%',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                flexGrow: 1,
                alignSelf: 'stretch',
                mr: 2
              }}
            >
              <AddPhotoAlternateRoundedIcon />
            </Button>
            <Typography>Has click en el circulo del costado para editar tu imagen de perfil</Typography>
          </Box>

          <Box sx={{ mb: 'auto', width: '100%' }}>
            <Input
              startAdorment={<PersonRoundedIcon sx={{ color: 'primary.main' }} />}
              type="text"
              name="name"
              label="Nombre y Apellido"
              defaultValue="Matias Diaz"
              sx={{ mb: 2 }}
              handleInput={(value: string | undefined) => setName(value)}
            />
            <Input
              startAdorment={<EmailRoundedIcon sx={{ color: 'primary.main' }} />}
              type="email"
              name="email"
              label="Correo electrónico"
              defaultValue="matidiaz00@gmail.com"
              sx={{ mb: 2 }}
              handleInput={(value: string | undefined) => setEmail(value)}
            />
            <Input
              startAdorment={<LockRoundedIcon sx={{ color: 'primary.main' }} />}
              type="password"
              name="password"
              label="Nueva contraseña"
              defaultValue=""
              sx={{ mb: 2 }}
              handleInput={(value: string | undefined) => setPassword(value)}
            />
            <Input
              startAdorment={<LockRoundedIcon sx={{ color: 'primary.main' }} />}
              type="password"
              name="repeatPassword"
              label="Repite tu nueva contraseña"
              defaultValue=""
              handleInput={(value: string | undefined) => setRepeatPassword(value)}
            />
          </Box>

          <Submit handleSubmit={handleSubmit} label="Editar perfil" />

        </Container>
      </Box>
      <Nav />
    </>
  );
}