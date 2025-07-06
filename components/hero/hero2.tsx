'use client';

import { Box, Typography, Container } from '@mui/material';

export default function Hero2() {
  return (
    <Box sx={{py: 8, width: '80%'}}>
      <Container maxWidth="lg">
        {/* 상단 메시지 */}
        <Typography variant="h4" align="center" gutterBottom>
          정보화 시대<br />시간도 정보도 자산이니까.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 6,
            gap: 4,
            width: '100%',
          }}
        >
          <Box sx={{ flex: 5, textAlign: 'center' }}>
            <Box sx={{ bgcolor: '#d3d3d3', height: 300, mb: 2 }} />
            <Typography variant="body1">
              AI 기반의 포트폴리오 생성으로<br />
              빠르고 편하게 투자
            </Typography>
          </Box>

          <Box sx={{ flex: 2, textAlign: 'center' }}>
            <Typography variant="h6">
              +<br />
              AI가 추천하는<br />
              트렌드 자산
            </Typography>
          </Box>

          <Box sx={{ flex: 5, textAlign: 'center' }}>
            <Box sx={{ bgcolor: '#d3d3d3', height: 300, mb: 2 }} />
            <Typography variant="body1">
              AI 기반의 포트폴리오에<br />
              나만의 투자를 더해보세요!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
