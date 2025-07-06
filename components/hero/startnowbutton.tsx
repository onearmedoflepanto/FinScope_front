import { Box, Button } from "@mui/material";

export default function StartNowButton() {
  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" size="large">
          바로 시작하기
        </Button>
      </Box>
    </>
  )
}