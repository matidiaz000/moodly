'use client'
import * as React from 'react';
import { Dialog } from '@mui/material';
import { StaticDatePicker, StaticTimePicker } from '@mui/x-date-pickers';
import dayjs, { type Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/es';

interface IProps {
  type: 'date' | 'time',
  open: boolean,
  selectedValue: Dayjs,
  onClose: (value: Dayjs | null) => void,
  sx?: object,
}

export default function DatePicker({ type, open, selectedValue, onClose, sx }: IProps) {
  const [value, setValue] = React.useState<Dayjs | null>(selectedValue);

  return (
    <Dialog onClose={() => onClose(null)} open={open} sx={Object.assign({}, sx)}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        {type === 'date' ?
        <StaticDatePicker
          value={value}
          onChange={(newValue) => setValue(newValue)}
          onAccept={() => onClose(value)}
          onClose={() => onClose(null)}
        />
        : 
        <StaticTimePicker
          value={value}
          onChange={(newValue) => setValue(dayjs(newValue))}
          onAccept={() => onClose(value)}
          onClose={() => onClose(null)}
        />}
      </LocalizationProvider>
    </Dialog>
  );
}