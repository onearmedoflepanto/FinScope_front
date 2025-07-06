import { Card, CardContent, Typography, Box } from "@mui/material";
// 여기에 차트 라이브러리 import (예시용 더미)
export default function AssetChart() {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle2">자산 비율 요약</Typography>
        {/* 도넛 그래프 들어갈 자리 */}
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', height:'100%' }}>
          <Typography>도넛 그래프</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}