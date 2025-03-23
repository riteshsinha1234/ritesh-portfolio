'use client';
import { white } from "@/comp/colors";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <>
      <Typography
        sx={{
          fontSize: '25px',
          fontWeight: 500,
          fontFamily: 'var(--font-inter)',
          color: white,
          textAlign: 'center',
          ml: '30px',
          mr: '31px'
        }}
      >
        Ritesh Sinha Portfolio (Inter)
      </Typography>
      <Typography
        sx={{
          fontSize: '25px',
          fontWeight: 500,
          fontFamily: 'var(--font-lato)',
          color: white,
          textAlign: 'center',

          ml: '30px',
          mr: '31px'
        }}
      >
        Ritesh Sinha Portfolio (Lato)
      </Typography>
      <Typography
        sx={{
          fontSize: '25px',
          fontWeight: 500,
          fontFamily: 'var(--font-outfit)',
          color: white,
          textAlign: 'center',
          ml: '30px',
          mr: '31px'
        }}
      >
        Ritesh Sinha Portfolio (Outfit)
      </Typography>
    </>
  );
}
