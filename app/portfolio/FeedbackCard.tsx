import { Card, CardContent, Typography, Button } from "@mui/material";

export default function FeedbackCard({ sx }: any) {
  return (
    <Card sx={{ ...sx }}>
      <CardContent>
        <Typography>AI 추천보다 높아요/낮아요/좋아요</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>리밸런싱 하기</Button>
      </CardContent>
    </Card>
  );
}