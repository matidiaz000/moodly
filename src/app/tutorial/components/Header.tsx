import * as React from 'react';
import { Box, Button } from '@mui/material';
import NextLink from 'next/link';

export default function Header() {
  return (
    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'end', }} >
      <NextLink href="/registros" >
        <Button variant="text" sx={{ textTransform: 'uppercase' }}>Omitir</Button>
      </NextLink>
    </Box>
  );
}