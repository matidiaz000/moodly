'use client'
import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Paper from '@mui/material/Paper';
import Link from 'next/link'

export default function Nav() {
  const pathname = window.location.pathname;
  const [value, setValue] = React.useState(pathname);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inicio" icon={<HomeRoundedIcon fontSize="medium" />} component={Link} href="/registros" />
        <BottomNavigationAction label="Salud" icon={<PsychologyAltRoundedIcon fontSize="medium" />} component={Link} href="/salud" />
        <BottomNavigationAction label="Estadisticas" icon={<LeaderboardRoundedIcon fontSize="medium" />} component={Link} href="/estadisticas" />
        <BottomNavigationAction label="Terapia" icon={<SettingsRoundedIcon fontSize="medium" />} component={Link} href="/terapia" />
      </BottomNavigation>
    </Paper>
  );
}