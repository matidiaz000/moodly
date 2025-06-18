import * as React from 'react';
import Typography from '@mui/material/Typography';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { Link as MuiLink } from '@mui/material';
import NextLink from 'next/link';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

interface IProps {
  title: string
}

export default function Header({ title }: IProps) {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ bgColor: 'white', pr: 1 }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <MuiLink component={NextLink} underline="none" href={"/perfil"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            <PersonRoundedIcon fontSize='inherit' />
          </IconButton>
        </MuiLink>
      </Toolbar>
    </AppBar>
  );
}