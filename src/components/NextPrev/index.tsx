import * as React from 'react';
import { Box, Button } from '@mui/material';

interface IProps {
  active: number,
  handleBack: () => void,
  handleNext: () => void
  length: number,
  disabled?: boolean,
  sx?: object,
}

export default function NextPrev({ active, handleBack, handleNext, disabled, sx }: IProps) {
  return (
    <Box sx={Object.assign({ display: 'flex', width: '100%', justifyContent: 'space-between', }, sx)} >
      <Button
        variant="contained"
        sx={{ borderRadius: '50rem', textTransform: 'uppercase', minWidth: 160 }}
        disabled={active === 0}
        onClick={handleBack}
      >Anterior</Button>
      <Button
        variant="contained"
        sx={{ borderRadius: '50rem', textTransform: 'uppercase', minWidth: 160 }}
        onClick={handleNext}
        disabled={disabled}
      >{active === length ? 'Comenzar' : 'Siguiente'}</Button>
    </Box>
  );
}