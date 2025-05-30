import * as React from 'react';
import { Box, Fab as FabMaterial } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Image from 'next/image';

interface IProps {
  arrow: boolean
}

export default function Fab({ arrow }: IProps) {
  return (
    <Box 
      sx={{ 
        display: 'flex',
        justifyContent: 'end',
        position: 'fixed',
        mb: 4,
        width: '100%',
        mr: 2,
        bottom: 56,
        right: 0
      }}>
      <Box sx={{ display: arrow ? 'block' : 'none' }}>
        <Image
          src="/rare-arrow.svg"
          alt="Añadí tu primer registro de estado de ánimo"
          width="60"
          height="60"
        />
      </Box>
      
      <FabMaterial color="primary" aria-label="add" sx={{ mt: 3, ml: 2 }}>
        <MuiLink
          component={NextLink}
          underline="none"
          href={"/registros/agregar"}
          sx={{ color: 'white', display: 'flex', alignItems: 'center' }}
        >
          <AddRoundedIcon />
        </MuiLink>
      </FabMaterial>
    </Box>
  );
}