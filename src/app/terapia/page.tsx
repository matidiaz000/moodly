'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import { Container } from '@mui/material';
import Alarm from '@/app/terapia/components/Alarm';
import dayjs from 'dayjs';

export default function Terapia() {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'start',
          width: '100%',
          height: 'calc(100% - 56px)'
        }}
      >
        <Header title='Terapia' />
        <Container maxWidth="lg" sx={{ width: '100%', mb: 5, mt: 4, pb: 5 }}>
          <Box sx={{ mb: 4 }}>
            <Alarm
              hour={dayjs().hour(13).minute(0)}
              date={[ "martes" ]}
              title="Psicologa"
            />

            <Alarm
              hour={dayjs().hour(18).minute(0)}
              date={dayjs().year(1991).month(1).date(10)}
              title="Psiquiatra"
            />

            <Alarm
              hour={dayjs().hour(18).minute(30)}
              date={[ "martes", "miercoles" ]}
              title="Velafaxina"
            />
          </Box>
        </Container>
      </Box>
      <Nav />
    </>
  );
}