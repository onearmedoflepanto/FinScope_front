import { Card, CardContent, Typography, Button, Box } from "@mui/material";

export default function HotStockCard({ sx }: any) {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography variant="h6">오늘의 급등주<br/>삼성전자!</Typography>
        <Box sx={{ display: "flex", gap: 1, mt: 2 }}>
          <Button variant="outlined">더 알아보기</Button>
          <Button variant="contained">추가하기</Button>
        </Box>
      </CardContent>
    </Card>
  );
}