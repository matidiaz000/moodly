import * as React from 'react';
import { Box } from '@mui/material';
import { type Dayjs } from 'dayjs';
import { ITypes } from '../../utilities';
import Date from '../Date';
import Timer from '../Timer';
import Title from '../Title';

interface IProps {
  hour: Dayjs,
  date: ITypes[] | Dayjs,
  title: string,
  sx?: object,
}

export default function Alarm({ title, hour, sx, date }: IProps) {
  return (
    <Box sx={Object.assign({ border: 1, p: 2, borderRadius: '16px', mb: 3, borderColor: 'grey.500' }, sx)}>
      <Title title={title} />
      <Timer hour={hour} />
      <Date date={date} />
    </Box>
  );
}