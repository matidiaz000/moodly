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
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inicio" icon={<HomeRoundedIcon fontSize="medium" />} component={Link} href="/registros" />
        <BottomNavigationAction label="Salud" icon={<PsychologyAltRoundedIcon fontSize="medium" />} component={Link} href="#" />
        <BottomNavigationAction label="Estadisticas" icon={<LeaderboardRoundedIcon fontSize="medium" />} component={Link} href="#" />
        <BottomNavigationAction label="Configuración" icon={<SettingsRoundedIcon fontSize="medium" />} component={Link} href="#" />
      </BottomNavigation>
    </Paper>
  );
}