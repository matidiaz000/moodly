'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dayjs, { type Dayjs } from 'dayjs';
import DatePicker from '@/components/DatePicker';
import { allDates, DateClassActive, DateClassInactive, ITypes, dateToString } from '../../utilities';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  months: [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ]
});

interface IProps {
  date: ITypes[] | Dayjs
}

export default function Date({ date }: IProps) {
  const [dayOfWeekValue, setDayOfWeekValue] = React.useState<ITypes[] | null>(Array.isArray(date) ? date : null);
  const [dateValue, setDateValue] = React.useState<Dayjs | null>(!Array.isArray(date) ? date : null);

  const [openCalendar, setOpenCalendar] = React.useState(false);

  const handleChangeDayOfWeek = (type: ITypes) => {
    setDateValue(null)
    const newValues = dayOfWeekValue ? dayOfWeekValue : [];
    if (newValues.includes(type))
      setDayOfWeekValue(newValues.filter(v => v != type))
    else setDayOfWeekValue([...newValues, type])
  }

  const handleCloseCalendar = (value?: Dayjs | null) => {
    setOpenCalendar(false)
    if (value) {
      setDayOfWeekValue(null)
      setDateValue(value)
    }
  }

  React.useEffect(() => {
    console.log({
      "day": dayOfWeekValue,
      "date": dateValue?.format('D [de] MMMM')
    })
  }, [dayOfWeekValue, dateValue]);

  return (
    <>
      <Typography>{dateToString(dayOfWeekValue ? dayOfWeekValue : dateValue)}</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
        {allDates.map(item => (
          <Box
            key={item}
            sx={dayOfWeekValue?.includes(item) ? DateClassActive : DateClassInactive}
            onClick={() => handleChangeDayOfWeek(item)}
          >{item.charAt(0)}</Box>
        ))}
        <Box sx={dateValue ? DateClassActive : DateClassInactive} onClick={() => setOpenCalendar(true)}>
          <CalendarMonthRoundedIcon fontSize="small" />
        </Box>
      </Box>

      <DatePicker
        type="date"
        open={openCalendar}
        selectedValue={dateValue ? dateValue : dayjs()}
        onClose={handleCloseCalendar}
      />
    </>
  );
}