import { Card, CardContent, Typography, Box } from "@mui/material";

export default function TopItemsReturnChart({ sx }: any) {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography variant="subtitle2">상위 10개 종목 수익률</Typography>
        <Box sx={{ height: 200, mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>막대 그래프<br/>(음수면 파란색)</Typography>
        </Box>
      </CardContent>
    </Card>
  );
}