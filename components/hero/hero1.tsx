'use client'
import {Typography, Box, Container, Button } from '@mui/material';
import StartNowButton from './startnowbutton';

export default function Hero1() {
  return (
    <>
      <Box sx={{width:'80%'}}>
      <Container maxWidth="md" sx={{ textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom sx={{lineHeight:"2.5"}}>
          AI 시대, 투자도 AI로 간편하게 하세요!
        </Typography>
        <Typography variant="h6" color="text.secondary" paragraph>
          소중한 내 자산, 빠르고 편하고 <br />
          안전하게 관리하고 싶다면? <br />
          AI 포트폴리오 서비스 FinScope!
        </Typography>

        <Box
          sx={{
            my: 6,
            height: 500,
            bgcolor: '#ccc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '1.2rem',
          }}
        >
          대시보드 이미지 섹션(개발 완료 후 삽입 예정)
        </Box>

        <StartNowButton></StartNowButton>
        
      </Container>
      </Box>
    </>
  );
}