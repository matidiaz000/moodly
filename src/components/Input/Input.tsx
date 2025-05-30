'use client'
import * as React from 'react';
import { Box, IconButton, InputAdornment, TextField } from '@mui/material';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';

interface IProps {
  startAdorment?: React.ReactNode,
  type: 'email' | 'password' | 'text',
  name: string,
  label: string,
  sx?: object,
  rows?: number,
  handleInput: (event: string) => void;
}

export default function Input({ startAdorment, type, name, label, sx, rows, handleInput }: Readonly<IProps>) {
  const [showPassword, setShowPassword] = React.useState(false);
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const setType = () => {
    if (type === 'email') return type
    else if (type === 'password') return showPassword ? 'text' : 'password'
    else return 'text';
  }

  return (
    <Box sx={Object.assign({
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      bgcolor: 'grey.100',
      pl: 2,
      pr: 1,
      boxShadow: 5
    }, sx)}>
      {startAdorment}
      <TextField
        fullWidth
        id={`input-${name}`}
        label={label}
        variant="filled"
        type={setType()}
        sx={{ formControl: { background: 'red'} }}
        multiline={rows ? true : false}
        rows={rows}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => handleInput(e.target.value)}
        slotProps={{
          input: {
            disableUnderline: true,
            color: 'primary',
            endAdornment: (
              (type === 'password' &&
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'esconder contraseña' : 'mostrar contraseña'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                  sx={{ color: 'primary.main' }}
                >
                  {showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
                </IconButton>
              </InputAdornment>)
            ),
          },
        }}
      />
    </Box>
  );
}