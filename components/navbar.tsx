// components/Navbar.tsx
'use client';

import React from 'react';
import { AppBar, Toolbar, Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: 'sky', boxShadow: 'none', zIndex: (theme) => theme.zIndex.drawer +1 }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* 좌측: 로고 */}
        <Box display="flex" alignItems="center" gap={2}>
          <Button component={Link} href="/" variant="contained"
            sx={{
              backgroundColor: '#e58f8f',
              color: 'black',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#d17676' }
            }}
          >
            로고
          </Button>
          <Typography variant="h6" color="black">
            FinScope
          </Typography>
        </Box>

        {/* 중앙: 네비게이션 메뉴 */}
        <Box display="flex" alignItems="center" gap={4}>
          <Button component={Link} href="/portfolio" variant="contained" sx={{ color: 'black',  }}>포트폴리오</Button>
          <Button component={Link} href="/stock" variant="contained" sx={{ color: 'black',  }}>주식 정보</Button>
          <Button component={Link} href="/economy" variant="contained" sx={{ color: 'black',  }}>경제 트렌드</Button>
        </Box>

        {/* 우측: 로그인/회원가입 */}
        <Box display="flex" gap={2}>
          <Button component={Link} href="/signup" variant="contained" sx={{ color: 'gray', fontWeight: 'bold', backgroundColor: 'black' }}>회원가입</Button>
          <Button component={Link} href="/login" variant="contained" sx={{ color: 'gray', fontWeight: 'bold', backgroundColor: 'black' }}>로그인</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
