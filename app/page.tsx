'use client';
import { Box, Typography } from '@mui/material';
import Hero1 from '@/components/hero/hero1';
import Hero2 from '@/components/hero/hero2';
import Hero3 from '@/components/hero/hero3';

export default function Hero() {
  return (
    <Box sx={{background: 'linear-gradient(to right, #b3e5fc 0%, #ffffff 10%, #ffffff 90%, #b3e5fc 100%)',
}}>
      {/* Page 1 */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Hero1></Hero1>
      </Box>

      {/* Page 2 */}
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Hero2></Hero2>
      </Box>

      {/* Page 3 */}
      <Box
        sx={{
          height: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Hero3></Hero3>
      </Box>
    </Box>
  );
};
