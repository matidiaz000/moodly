import * as React from 'react';
import Typography from '@mui/material/Typography';
import { AppBar, Box, IconButton, LinearProgress, Toolbar } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';

interface IProps {
  activeStep: number
}

export default function Header({ activeStep }: IProps) {
  const progress = () => {
    return (100 / 4) * (activeStep + 1)
  }

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ bgColor: 'white', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <Box>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MuiLink
              component={NextLink}
              underline="none"
              href={"/registros"}
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <ClearRoundedIcon fontSize='large' />
            </MuiLink>
          </IconButton>
        </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase', textAlign: 'center' }}>
          {activeStep + 1} / 4
        </Typography>
      </Toolbar>

      <LinearProgress variant="determinate" value={progress()} />
    </AppBar>
  );
}