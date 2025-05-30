import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

interface IProps {
  label: string,
  handleSubmit: () => void,
  children?: React.ReactNode,
  sx?: object,
}

export default function Submit({ label, children, handleSubmit, sx }: IProps) {
  return (
    <Box 
      sx={Object.assign({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }, sx)}
    >
      <Button
        variant="contained"
        sx={{
          borderRadius: '50rem',
          textTransform: 'uppercase',
          minWidth: 160,
          letterSpacing: 1,
          lineHeight: 1.7,
          mt: 3,
          mb: 1
        }}
        onClick={handleSubmit}
      >{label}</Button>
      {children &&
        <Typography variant="caption" sx={{ width: '100%', display: 'block' }}>
          {children}
        </Typography>
      }
    </Box>
  );
}