'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { type Dayjs } from 'dayjs';
import DatePicker from '@/components/DatePicker';

interface IProps {
  hour: Dayjs,
}

export default function Timer({ hour }: IProps) {
  const [timeValue, setTimeValue] = React.useState<Dayjs>(hour);
  const [openTimer, setOpenTimer] = React.useState(false);

  const handleCloseTimer = (value?: Dayjs | null) => {
    setOpenTimer(false)
    if (value) setTimeValue(value)
  }

  React.useEffect(() => {
    console.log({
      "time": timeValue.format('HH:mm'), 
    })
  }, [timeValue]);

  return (
    <>
      <Typography
        sx={{ my: 1 }}
        variant="h3"
        onClick={() => setOpenTimer(true)}
      >{timeValue.format('HH:mm')}</Typography>

      <DatePicker
        type="time"
        open={openTimer}
        selectedValue={timeValue}
        onClose={handleCloseTimer}
      />
    </>
  );
}