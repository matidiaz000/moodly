'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, Dialog, DialogActions, TextField } from '@mui/material';

interface IProps {
  title: string,
}

export default function Title({ title }: IProps) {
  const [titleValue, setTitleValue] = React.useState<string>(title);
  const [openTitle, setOpenTitle] = React.useState(false);

  const handleCloseTitle = (value?: string | null) => {
    setOpenTitle(false)
    if (value) setTitleValue(value)
  }

  React.useEffect(() => {
    console.log({
      "title": titleValue,
    })
  }, [titleValue]);

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography onClick={() => setOpenTitle(true)}>{titleValue}</Typography>
      </Box>

      <Dialog
        onClose={() => handleCloseTitle()}
        open={openTitle}
        fullWidth
        slotProps={{
          paper: {
            component: 'form',
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const formJson = Object.fromEntries((formData as any).entries());
              const title = formJson.title;
              handleCloseTitle(title);
            },
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <TextField fullWidth defaultValue={titleValue} label="Titulo" variant="filled" name="title" />
        </Box>
        <DialogActions>
          <Button onClick={() => handleCloseTitle()}>Cancelar</Button>
          <Button type="submit">OK</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}