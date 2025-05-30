'use client'
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import { redirect } from 'next/navigation';
import FaceOptions from '@/components/FaceOptions';
import Input from '@/components/Input/Input';
import Camera from '@/components/Camera';
import NextPrev from '@/components/NextPrev';
import Header from './components/Header';

export default function AgregarRegistro() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [inputAnimo, setInputAnimo] = useState<string>();
  const [inputDormir, setInputDormir] = useState<string>();
  const [inputActividad, setInputActividad] = useState<string>();
  const [inputNota, setInputNota] = useState<string>();
  const [inputFile, setInputFile] = useState<FileList | null>();
  
  const handleNext = () => {
    if (activeStep === 3) {
      handleSubmit();
      return;
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleSubmit = () => {
    console.log("Animo: ", inputAnimo)
    console.log("Dormir: ", inputDormir)
    console.log("Actividad: ", inputActividad)
    console.log("Nota: ", inputNota)
    console.log("File: ", inputFile)
    redirect('/registros');
  }

  const isDisabled = () => {
    if (activeStep === 0 && !inputAnimo) return true
    if (activeStep === 1 && !inputDormir) return true
    if (activeStep === 2 && !inputActividad) return true
    if (activeStep === 3 && !inputNota) return true
    else return false 
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
          height: '100%'
        }}
      >
        <Header activeStep={activeStep} />

        <Box sx={{ px: 2, width: '100%' }}>
          <Paper sx={{ width: '100%', borderRadius: '20px', display: activeStep === 3 ? 'none' : 'block' }} elevation={7}>
            <FaceOptions
              title="¿Cómo estas de ánimos?"
              options={[ 'increible', 'bien', 'neutral', 'mal', 'horrible' ]}
              sx={{ display: activeStep === 0 ? 'block' : 'none' }}
              type="animo"
              handleChange={(value: string | undefined) => setInputAnimo(value)}
            />
            <FaceOptions
              title="¿Cómo dormiste hoy?"
              options={[ 'mal', 'regular', 'bien' ]}
              sx={{ display: activeStep === 1 ? 'block' : 'none' }}
              type="dormir"
              handleChange={(value: string | undefined) => setInputDormir(value)}
            />
            <FaceOptions
              title="¿Que actividad hiciste hoy?"
              options={[ 'tv', 'juegos', 'cine', 'restaurante', 'trabajo', 'lectura', 'ejercicio', 'estudio' ]}
              sx={{ display: activeStep === 2 ? 'block' : 'none' }}
              type="actividad"
              handleChange={(value: string | undefined) => setInputActividad(value)}
            />
          </Paper>
          <Box sx={{ width: '100%', display: activeStep === 3 ? 'flex' : 'none', flexDirection: 'column' }}>
            <Input
              rows={4}
              type="text"
              name="nota"
              handleInput={(value: string) => setInputNota(value)}
              label="Añade una nota adicional"
              sx={{ mb: 5, px: 0 }}
            />
            <Camera
              handleChange={(fileList: FileList | null) => setInputFile(fileList)}
              label="Añade una imágen de tu día"
            />
          </Box>
        </Box>

        <NextPrev
          active={activeStep}
          handleBack={handleBack} 
          handleNext={handleNext}
          length={3}
          disabled={isDisabled()}
          sx={{ mb: 4, px: 2 }}
        />
      </Box>
    </>
  );
}