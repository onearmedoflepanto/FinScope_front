import { Card, CardContent, Typography, Box } from "@mui/material";

export default function PortfolioReturnChart({ sx }: any) {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography variant="subtitle2">포트폴리오 누적 수익률 그래프</Typography>
        <Box sx={{ height: 200, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>선 그래프</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}