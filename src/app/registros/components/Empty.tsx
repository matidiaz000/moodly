import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';

interface IProps {
  sx?: object;
}

export default function Empty({ sx }: IProps) {
  return (
    <Box sx={Object.assign({ textAlign: 'center', mb: 'auto', mt: 6 }, sx)}>
      <Typography sx={{ mb: 1 }}>Ups, no hay nada que mostrar aún</Typography>
      <Image
        src="/vacio.svg"
        alt="Ups, no hay nada que mostrar aún"
        width="329"
        height="341"
      />
      <Typography sx={{ mt: 3 }}>Añadí tu primer registro de estado de ánimo</Typography>
    </Box>
  );
}