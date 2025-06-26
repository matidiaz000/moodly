import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from '@/components/Nav';
import Header from '@/components/Header';

export default function Salud() {
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
        <Header title='Salud' />

      </Box>
      <Nav />
    </>
  );
}