import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'
import React, { CSSProperties } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HistoryIcon from '@mui/icons-material/History';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FolderIcon from '@mui/icons-material/Folder';
import FeedbackIcon from '@mui/icons-material/Feedback';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import GradingIcon from '@mui/icons-material/Grading';
import ArticleIcon from '@mui/icons-material/Article';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import { NavLink } from 'react-router-dom';

interface SideBarProps {
    drawerWidth: number;
    mobileOpen: boolean;
    handleDrawerClose: () => void;
    handleDrawerTransitionEnd: () => void;
}

interface UserSideBarItem {
    text: string;
    path: string;
    icon: React.ReactNode;
}

interface AdminSideBarItem {
    text: string;
    path: string;
    icon: React.ReactNode;
}

const SideBar = ({ drawerWidth, mobileOpen, handleDrawerClose, handleDrawerTransitionEnd }: SideBarProps) => {

  const UserSideBarItems: UserSideBarItem[] = [
    { text: '月報記入', path: '/report', icon: <EditNoteIcon /> },
    { text: '履歴', path: '/history', icon: <HistoryIcon /> },
    { text: 'テスト', path: '/test', icon: <ArticleIcon /> },
  ];

  const AdminSideBarItems: AdminSideBarItem[] = [
    { text: '社員管理', path: '/employeeManage', icon: <ManageAccountsIcon /> },
    { text: '提出確認', path: '/submissionCheck', icon: <ChecklistIcon /> },
    { text: '項目別確認', path: '/contentCheck', icon: <ManageSearchIcon /> },
  ];

  const baseLinkStyle:CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'block',
  };

  const activeLinkStyle:CSSProperties = {
    backgroundColor: 'lightgray',
  };

const drawer = (
  <div>
    <Toolbar />
    <Divider />
    <List>
      {UserSideBarItems.map((item, index) => (
        <NavLink to={item.path} style={({isActive}) => {
          return {
            ...baseLinkStyle,
            ...(isActive ? activeLinkStyle : {}),
          }
        }}>
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        </NavLink>
      ))}
    </List>
    <Divider />
  </div>
);
  return (
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* モバイル用ナビゲーションドロワー */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        {/* デスクトップ用ナビゲーションドロワー */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>  )
}

export default SideBar