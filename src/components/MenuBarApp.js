import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Icon } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import {GOTOCART, NOITEMSADDED, SHOPPINGCART, SHOWALL} from '../utils/Constants';

export default function MenuAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [buttonText, setButtonText] = React.useState("Show All");
  const pathName = window.location.pathname;
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickCart = ()=>{
    navigate('Cart');
    handleClose();
  };

  const onClickHome = ()=>{
    navigate('/');
    handleClose();
  };


  const cart = useSelector((state) => state.cart)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    cart.length<=3?setButtonText(GOTOCART):setButtonText(SHOWALL);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="success">
        <Toolbar>
          <Icon
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ShoppingBagIcon />
          </Icon>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {SHOPPINGCART}  
          </Typography>
            <div>
              {pathName==='/' && <ShoppingCartIcon onClick={handleMenu}/>}
              {pathName==='/Cart' && <HomeIcon onClick={onClickHome}/>}
              {/* </IconButton> */}
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {cart.filter((item, index) => index < 3).map((filteredItem) => (<MenuItem key={filteredItem.id}>{filteredItem.name} - {filteredItem.quantity}</MenuItem>))}
                {cart.length>0?<Button color="success" variant="contained" onClick={onClickCart}>{buttonText}</Button>:NOITEMSADDED}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
