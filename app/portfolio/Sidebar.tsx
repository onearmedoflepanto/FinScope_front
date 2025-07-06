import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";

const sidebarItems = [
  "대시보드",
  "요약",
  "AI 추천 포트폴리오",
  "포트폴리오 편집"
];

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 200,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 200, boxSizing: 'border-box' },
      }}
    >
      <Box sx={{py:"100px"}}>
      <List>
        {sidebarItems.map((text) => (
          <ListItemButton key={text}>
            <ListItemText primary={text} sx={{textAlign:'center', lineHeight:'1.8'}} />
          </ListItemButton>
        ))}
      </List>
      </Box>
    </Drawer>
  );
}
