import { type Dayjs } from 'dayjs';
export type ITypes = 'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes' | 'sabado' | 'domingo';
export const allDates: ITypes[] = [ 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo' ];

const DateClass = {
  border: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  width: '2rem',
  height: '2rem',
  textTransform: 'uppercase'
}

export const DateClassActive = {
  ...DateClass,
  borderColor: 'grey.100',
  color: 'grey.100',
  bgcolor: 'primary.main'
}

export const DateClassInactive = {
  ...DateClass,
  borderColor: 'grey.500',
  color: 'grey.700',
  bgcolor: 'grey.000'
}

export const dateToString = (date: ITypes[] | Dayjs | null): string | null => {
  if (!date) return null;
  if (!Array.isArray(date)) return date.format('D [de] MMMM') // 10 de febrero
  let str = "Todos los ";
  const isSame = allDates.every(item => date.includes(item));
  if (isSame) str = str + "dias"; // Todos los dias
  else if (date.length === 1) str = str + date.join(', ') // Todos los martes
  else str = str + date.slice(0, -1).join(', ') + ' y ' + date.slice(-1); // Todos los martes, miercoles y jueves
  return str
}