import * as React from 'react';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import { Button, Typography } from '@mui/material';

interface IProps {
  label: string,
  sx?: object,
  handleChange: (fileList: FileList | null) => void;
}

export default function Camera({ label, sx, handleChange }: IProps) {
  return (
    <Button
      component="label"
      variant="text"
      sx={Object.assign({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        bgcolor: 'grey.100',
        boxShadow: 5,
        py: 4
      }, sx)}
    >
      <AddAPhotoRoundedIcon fontSize="large" />
      <Typography component="div" sx={{ flexGrow: 1, textTransform: 'none', textAlign: 'center', mt: 1 }}>
        {label}
      </Typography>
      <input
        type="file"
        onChange={(e) => handleChange(e.target.files)}
        hidden
      />
    </Button>
  );
}