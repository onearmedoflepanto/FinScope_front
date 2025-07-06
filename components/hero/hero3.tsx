// components/Hero3.tsx
"use client";

import { Box, Typography } from "@mui/material";
import StartNowButton from "./startnowbutton";

import {
  ShieldOutlined,
  SelfImprovementOutlined,
  BalanceOutlined,
  TrendingUpOutlined,
  WhatshotOutlined,
} from "@mui/icons-material";

const investmentTypes = [
  { label: "안정형", icon: <ShieldOutlined fontSize="large" /> },
  { label: "소극형", icon: <SelfImprovementOutlined fontSize="large" /> },
  { label: "중립형", icon: <BalanceOutlined fontSize="large" /> },
  { label: "적극형", icon: <TrendingUpOutlined fontSize="large" /> },
  { label: "공격형", icon: <WhatshotOutlined fontSize="large" /> },
];

export default function Hero3() {
  return (
    <Box sx={{ width: "80%", bgcolor: "#fff" }}>
      {/* 텍스트 영역 */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography variant="h3" sx={{lineHeight:"2.3"}}>어떤 투자를 원하시나요?</Typography>
        <Typography variant="h5">
          말씀만 해 주세요. 투자는 알아서 할게요!
        </Typography>
      </Box>

      {/* 아이콘 영역들 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 4,
          mb: 6,
        }}
      >
        {investmentTypes.map(({ label, icon }, index) => (
          <Box key={index} sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: 100,
                height: 100,
                borderRadius: 2,
                mb: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {icon}
            </Box>
            <Typography>{label}</Typography>
          </Box>
        ))}
      </Box>

      <StartNowButton></StartNowButton>

    </Box>
  );
}
