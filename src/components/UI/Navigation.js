import {useEffect} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ScatterPlot from '@mui/icons-material/ScatterPlot';
import NotificationsIcon from '@mui/icons-material/Notifications';



const Navigation = () => {
  
  const Account = () => (
    <>
    </>
  )

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{'backgroundColor':'#DEEBFA', 'boxShadow':'none'}}>
          <Toolbar style={{'minHeight':'0px'}}>
            <Box>
              <Button>
                <ScatterPlot style={{'fontSize':'32px', 'color':'#5156B0'}}/>
                </Button>
            </Box>
            <Typography
              variant="h6"
              color='#5156B0'
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              Softy
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications" 
                style={{"color":'#5156B0'}}
              >
                <Badge color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Avatar alt="Remy Sharp" src="/images/avatar.jpg" />
          </Toolbar>
        </AppBar>
      </Box>
    );
}

export default Navigation;