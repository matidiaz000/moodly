import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Button, FormControl, useTheme } from '@mui/material';
import Icons, { TFolder, TIcon } from '../Icons';

interface IProps {
  title: string,
  options: Array<TIcon>,
  sx?: object,
  type: TFolder,
  handleChange: (event: string | undefined) => void;
}

export default function FaceOptions({ title, options, type, sx, handleChange }: IProps) {
  const theme = useTheme();
  return (
    <FormControl sx={Object.assign({ textAlign: 'center', py: 4, px: 0, width: '100%' }, sx)} variant="standard">
      <Typography variant="h6" component="h2" sx={{ lineHeight: 'normal', mb: 2 }}>{title}</Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', flexWrap: 'wrap' }}>
        {options.map((option) => {
          const capitalize = option.charAt(0).toUpperCase() + option.slice(1);;
          const lowerCase = option.toLowerCase();
          return (
            <Button
              key={`${type}-${lowerCase}`}
              variant="text"
              sx={{ textTransform: 'uppercase', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
              onClick={() => handleChange(lowerCase)}
            >
              <Icons color={theme.palette.primary.main} selected={false} folder={type} icon={option} />
              <Typography sx={{ lineHeight: 'normal', mb: 2 }}>{capitalize}</Typography>
            </Button>
          )
        })}
      </Box>
    </FormControl>
  );
}