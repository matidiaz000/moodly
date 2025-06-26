'use client'
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { redirect } from 'next/navigation';
import Header from './components/Header';
import Step from './components/Step';
import NextPrev from '../../components/NextPrev';

const steps = [
  {
    img: '/tutorial1.svg',
    width: 320,
    height: 278,
    label: 'Añade un registro diario de tu estado de ánimo',
    description: 'Podrás hacer un resumen de tu día, ánimo, actividades, incluir una nota adicional e imágen conmemorativa.',
  },
  {
    img: '/tutorial2.svg',
    width: 320,
    height: 278,
    label: 'Añade un registro de tu sesión de terapia',
    description: 'Podrás anotar lo hablado con tu terapeuta, progresos, herramientas adquiridas y a practicar.',
  },
  {
    img: '/tutorial3.svg',
    width: 320,
    height: 278,
    label: 'Observá tus progresos con la ayuda de métricas',
    description: 'Podrás tener un seguimiento de tus progresos de forma más visual y palpable.',
  },
];

export default function Tutorial() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      redirect('/registros');
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Container maxWidth="lg" sx={{ width: '100%', height: '100%' }}>
      <Box
        sx={{
          pt: 1,
          pb: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <Header />

        <Paper sx={{ width: '100%', borderRadius: '20px' }} elevation={10}>
          <Step steps={steps} activeStep={activeStep} />
        </Paper>

        <NextPrev
          active={activeStep}
          handleBack={handleBack} 
          handleNext={handleNext}
          length={steps.length - 1}
          sx={{ mx: 2, mt: 3 }}
        />
      </Box>
    </Container>
  );
}