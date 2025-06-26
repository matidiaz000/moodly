'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from "@/components/Nav";
import Card from '@/app/registros/components/Card';
import Header from '@/components/Header';
import Empty from './components/Empty';
import Fab from './components/Fab';

const registros = [
  {
    id: 0,
    img: '/happy.jpg',
    mood: 'mal',
    dream: 'bien',
    activities: ['trabajo', 'ejercicio'],
    note: 'Esta es una nota de ejemplo para el primer item de registro de estados de animo.',
    date: new Date()
  },
  {
    id: 1,
    img: '/happy.jpg',
    mood: 'mal',
    dream: 'bien',
    activities: ['trabajo', 'ejercicio', 'restaurante'],
    note: 'Esta es una nota de ejemplo para el primer item de registro de estados de animo.',
    date: new Date()
  },
  {
    id: 2,
    img: '/happy.jpg',
    mood: 'mal',
    dream: 'bien',
    activities: ['trabajo', 'ejercicio'],
    note: 'Esta es una nota de ejemplo para el primer item de registro de estados de animo.',
    date: new Date()
  }
]

export default function ListadoRegistros() {
  const [active, setActive] = React.useState<number>();
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
        <Header title='Inicio' />
        
        <Empty sx={{ display: registros.length === 0 ? 'block' : 'none'}} />
        
        <Box sx={{ display: registros.length > 0 ? 'flex' : 'none', flexDirection: 'column', mt: 4, mb: 'auto', width: '100%', pb: '56px' }}>
          {// eslint-disable-next-line @typescript-eslint/no-explicit-any
          registros.map((item: any, index) => 
            <Card
              key={item.id}
              sx={{ mb: 2 }}
              img={item.img}
              date={item.date}
              active={active === index}
              mood={item.mood}
              dream={item.dream}
              activities={item.activities}
              note={item.note}
              handleActive={() => setActive(active === index ? undefined : index)}
            />
          )}
        </Box>
      </Box>

      <Fab arrow={registros.length === 0} />

      <Nav />
    </>
  );
}