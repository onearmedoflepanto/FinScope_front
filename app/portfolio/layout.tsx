import { Box, Typography, Card } from "@mui/material";
import Sidebar from "./Sidebar";
import PortfolioSummary from "./PortfolioSummary";
import AssetDonutChart from "./AssetChart";
import PortfolioReturnLineChart from "./PortfolioReturnChart";
import TopStocksBarChart from "./TopItemsReturnChart";
import AiFeedbackCard from "./FeedbackCard";
import HotStockCard from "./HotStockcard";

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Sidebar />
      <Box sx={{ flex: 1, bgcolor: "#f5f5f5", p: 4 }}>
        {/* 상단 요약 영역 */}
        <Box sx={{ display: "flex", gap: 2, mb: 3,  }}>
          <PortfolioSummary />
          <AssetDonutChart />
          <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 140 }}>
            <Typography variant="h5" component="div">
              +10%
            </Typography>
            <Typography color="text.secondary">
              (전일대비)
            </Typography>
          </Card>
          <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 140 }}>
            <Typography variant="h5" component="div" color="primary.main">
              +20%
            </Typography>
            <Typography color="text.secondary">
              (누적 수익률)
            </Typography>
          </Card>
          <Box sx={{ minWidth: 140, justifyContent:'right' }}>
            <Typography variant="h5" fontWeight="bold">+10,000,000</Typography>
            <Typography variant="body2">총 수익</Typography>
          </Box>
        </Box>
        {/* 메인 그래프 2개 */}
        <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
          <PortfolioReturnLineChart sx={{ flex: 1 }} />
          <TopStocksBarChart sx={{ flex: 1 }} />
        </Box>
        {/* 하단 카드 2개 */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <AiFeedbackCard sx={{ flex: 1 }} />
          {/* <HotStockCard sx={{ flex: 1 }} /> */}
        </Box>
      </Box>
    </Box>
  );
}
