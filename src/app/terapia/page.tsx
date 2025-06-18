import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import { Container } from '@mui/material';
import Alarm from '@/components/Alarm';

export default function Terapia() {
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
        <Container maxWidth="lg" sx={{ width: '100%', mb: 'auto', mt: 4 }}>

          <Alarm
            hour="13:00"
            date={[ "martes" ]}
            title="Psicologa"
          />

          <Alarm
            hour="18:00"
            date="10 de febrero"
            title="Psiquiatra"
          />

          <Alarm
            hour="18:00"
            date={[ "martes", "miercoles" ]}
            title="Velafaxina"
          />

          </Container>
      </Box>
      <Nav />
    </>
  );
}