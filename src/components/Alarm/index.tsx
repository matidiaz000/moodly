'use client'
import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dayjs, { type Dayjs } from 'dayjs';
import DatePicker from '../DatePicker';
import { allDates, DateClassActive, DateClassInactive, ITypes, stringDate } from './utilities';

interface IProps {
  hour: string,
  date: ITypes[] | string,
  title: string,
  sx?: object,
}

export default function Alarm({ title, hour, sx, date }: IProps) {
  const [timeValue, setTimeValue] = React.useState<Dayjs | null>();
  const [dateValues, setDateValues] = React.useState<ITypes[] | string>(date);

  const [openTimer, setOpenTimer] = React.useState(false);
  const [openCalendar, setOpenCalendar] = React.useState(false);

  const handleChangeDate = (type: ITypes | string) => {
    console.log(dateValues, type)
    const newValues = (dateValues as ITypes[]);
    if (!allDates.includes(type as ITypes)) setDateValues(type)
    else {
      if (typeof dateValues === "string") setDateValues([type as ITypes])
      else {
        if (newValues.includes(type as ITypes))
          setDateValues(newValues.filter(v => v != type))
        else setDateValues([...newValues, type as ITypes])
      }
    }
  }

  const handleCloseCalendar = (value?: Dayjs | null) => {
    setOpenCalendar(false)
    if (value) setDateValues(value.toString())
  }

  const handleCloseTimer = (value?: Dayjs | null) => {
    setOpenTimer(false)
    if (value) setTimeValue(value)
  }

  React.useEffect(() => {
    console.log(timeValue, dateValues)
  }, [timeValue, dateValues]);

  return (
    <Box sx={Object.assign({ border: 1, p: 2, borderRadius: '16px', mb: 3, borderColor: 'grey.500' }, sx)}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography>{title}</Typography>
        <Box sx={{ bgcolor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50%' }}>
          <KeyboardArrowDownRoundedIcon sx={{ color: 'grey.700' }} />
        </Box>
      </Box>
      <Typography sx={{ my: 1 }} variant="h3" onClick={() => setOpenTimer(true)}>{hour}</Typography>
      <Typography>{stringDate(date)}</Typography>
      <Box sx={Object.assign({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }, sx)}>
        {allDates.map(item => (
          <Box
            key={item}
            sx={dateValues?.includes(item) ? DateClassActive : DateClassInactive}
            onClick={() => handleChangeDate(item)}
          >{item.charAt(0)}</Box>
        ))}
        <Box sx={typeof dateValues === "string" ? DateClassActive : DateClassInactive} onClick={() => setOpenCalendar(true)}>
          <CalendarMonthRoundedIcon fontSize="small" />
        </Box>
      </Box>
      <DatePicker
        type="date"
        open={openCalendar}
        selectedValue={dayjs()}
        onClose={handleCloseCalendar}
      />
      <DatePicker
        type="time"
        open={openTimer}
        selectedValue={dayjs()}
        onClose={handleCloseTimer}
      />
    </Box>
  );
}