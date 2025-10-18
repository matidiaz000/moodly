import * as React from 'react';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';
import { Button, Dialog, Typography } from '@mui/material';
import CameraPhoto from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

interface IProps {
  label: string,
  sx?: object,
  handleChange: (image: string | null) => void;
}

export default function Camera({ label, sx, handleChange }: IProps) {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [dataUri, setDataUri] = React.useState('');

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = (value: string) => {
    setOpenDialog(false);
  };

  const handleTakePhotoAnimationDone = (dataUri: string) => {
    handleClose(dataUri);
    setDataUri(dataUri);
    handleChange(dataUri);
  }

  if (dataUri)
    return <img src={dataUri} />
  else
    return (
      <div>
        <Dialog fullScreen onClose={handleClose} open={openDialog}>
          <CameraPhoto
            onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
            isFullscreen={false}
          />
        </Dialog>

        <Button
          onClick={handleClickOpen}
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
        </Button>
      </div>
    );
}

/**
<input
  type="file"
  onChange={(e) => handleChange(e.target.files)}
  hidden
/>
 */