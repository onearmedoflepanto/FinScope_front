import { Card, CardContent, Typography } from "@mui/material";

export default function PortfolioSummary() {
  return (
    <Card sx={{ minWidth: 180 }}>
      <CardContent>
        <Typography variant="subtitle2">요약</Typography>
        <Typography variant="h6">포트폴리오 이름</Typography>
        <Typography color="primary">적극형</Typography>
      </CardContent>
    </Card>
  );
}