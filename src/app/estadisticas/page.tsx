'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Nav from '@/components/Nav';
import Header from '@/components/Header';
import { PieChart } from '@mui/x-charts/PieChart';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { BarChart } from '@mui/x-charts';

export default function Estadisticas() {
  const [date, setDate] = React.useState("20");

  const handleChange = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };

  return (
    <>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 'calc(100% - 56px)'
        }}
      >
        <Header title='Estadisticas' />

        <Box sx={{ width: "100%", p: 2 }}>
          <FormControl fullWidth variant="filled" sx={{ bgcolor: 'grey.100', boxShadow: 5}}>
            <InputLabel id="filtro-by-date">Filtrar por</InputLabel>
            <Select
              labelId="filtro-by-date"
              value={date}
              label="Filtro por fechas"
              onChange={handleChange}
            >
              <MenuItem value="20">Ultima semana</MenuItem>
              <MenuItem value="10">Ultimo mes</MenuItem>
              <MenuItem value="30">Ultimo año</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
        <Box sx={{ width: "100%", p: 2 }}>
          <Typography variant="h6">Animo</Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={200}
            height={200}
          />
        </Box>

        <Box sx={{ width: "100%", p: 2 }}>
          <Typography variant="h6">Sueño</Typography>
          <BarChart
            xAxis={[{ data: ['group A', 'group B', 'group C'] }]}
            series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
            height={300}
          />
        </Box>

        <Box sx={{ width: "100%", p: 2 }}>
          <Typography variant="h6">Actividades</Typography>
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 10, label: 'series A' },
                  { id: 1, value: 15, label: 'series B' },
                  { id: 2, value: 20, label: 'series C' },
                ],
              },
            ]}
            width={200}
            height={200}
          />
        </Box>

      </Box>
      <Nav />
    </>
  );
}