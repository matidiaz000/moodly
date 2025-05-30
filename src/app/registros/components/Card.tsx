import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, IconButton, Paper, useTheme } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import Icons, { TIcon } from '@/components/Icons';

interface IProps {
  img: string,
  date: Date,
  active: boolean,
  mood: TIcon,
  dream: TIcon,
  activities: TIcon[],
  note: string,
  sx?: object,
  handleActive: () => void;
}

export default function Card({ img, date, active, mood, dream, activities, note, sx, handleActive }: IProps) {
  const theme = useTheme();
  return (
    <Box sx={Object.assign({ width: '100%', px: 2 }, sx)}>
      <Paper sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }} onClick={() => handleActive()}>
          <Box
            sx={{
              backgroundImage: `url(${img})`,
              width: '33.3%',
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              flexGrow: 1,
              alignSelf: 'stretch',
              mr: 2
            }}
          ></Box>
          <Typography sx={{ flexGrow: 1, textTransform: 'uppercase', py: 3 }}>{date.toLocaleString('es-AR', { year: "numeric", month: "2-digit", day: "2-digit" })}</Typography>
          <IconButton
            edge="start"
            color="default"
            aria-label="menu"
            sx={{ ml: 2 }}
          >
            {active ? <KeyboardArrowUpRoundedIcon fontSize='medium' />
            : <KeyboardArrowDownRoundedIcon fontSize='medium' />}
          </IconButton>
        </Box>
        <Box sx={{ display: active ? 'block' : 'none' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', width: '100%', px: 2, pt: 2, flexWrap: 'nowrap' }}>
            <Box sx={{ width: '33.33%' }}>
              <Typography variant="caption">Animo</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexShrink: 0 }}>
                <Icons color={theme.palette.primary.main} selected={false} folder="animo" icon={mood} />
                <Typography variant='body2' sx={{ lineHeight: 'normal', textTransform: 'uppercase' }}>{mood}</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '33.33%' }}>
              <Typography variant="caption">Sueño</Typography>
              <Box width="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <Icons color={theme.palette.primary.main} selected={false} folder="dormir" icon={dream} />
                <Typography variant='body2' sx={{ lineHeight: 'normal', textTransform: 'uppercase' }}>{dream}</Typography>
              </Box>
            </Box>
            <Box sx={{ width: '33.33%' }}>
              <Typography variant="caption">Actividades</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                {activities.map((item) => (
                  <Box key={`actividad-${item}`} width="100%" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mr: 2 }}>
                    <Icons color={theme.palette.primary.main} selected={false} folder="actividad" icon={item} />
                    <Typography variant='body2' sx={{ lineHeight: 'normal', textTransform: 'uppercase' }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ px: 2, py: 2 }}>
            <Typography variant="caption">Nota</Typography>
            <Typography>{note}</Typography>
          </Box>
          <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between', px: 2, pb: 2 }}>
            <Button
              variant="text"
              sx={{ borderRadius: '50rem', textTransform: 'uppercase' }}
            >Eliminar</Button>
            <Button
              variant="contained"
              sx={{ borderRadius: '50rem', textTransform: 'uppercase' }}
            >Editar</Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}