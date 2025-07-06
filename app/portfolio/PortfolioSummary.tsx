import { Card, CardContent, Typography } from "@mui/material";

export default function PortfolioSummary() {
  return (
    <Card sx={{ minWidth: 180 , minHeight:'60px', maxHeight:'60px'}}>
      <CardContent>
        <Typography variant="subtitle2" sx={{textAlign:"center"}}>요약</Typography>
        <Typography variant="h6">포트폴리오 이름</Typography>
        <Typography color="primary" sx={{textAlign:"center"}}>적극형</Typography>
      </CardContent>
    </Card>
  );
}