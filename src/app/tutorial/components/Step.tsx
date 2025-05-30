import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import Image from 'next/image';

interface IStep {
  img: string,
  width: number,
  height: number,
  label: string,
  description: string
}

interface IProps {
  steps: IStep[],
  activeStep: number
}

export default function Step({ steps, activeStep }: IProps) {
  return (
    <>
      <Image
        src={steps[activeStep].img}
        alt={steps[activeStep].label}
        width={steps[activeStep].width}
        height={steps[activeStep].height}
      />
      <Box sx={{ px: 3, pb: 4, pt: 3 }}>
        <Typography
          variant="h6"
          component="h2"
          sx={{ lineHeight: 'normal' }}
        >{steps[activeStep].label}</Typography>

        <Typography sx={{ mt: 1 }}>{steps[activeStep].description}</Typography>
        
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 1 }}>
          {steps.map((step: IStep, index: number) => 
            <Box
              key={step.label}
              sx={{
                borderRadius: '50%',
                bgcolor: activeStep === index ? 'primary.main' : 'grey.400',
                width: 14,
                height: 14,
                display: 'block',
                mx: 1
              }}
            ></Box>
          )}
        </Box>
      </Box>
    </>
  );
}