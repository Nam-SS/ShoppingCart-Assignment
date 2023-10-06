import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addToCart,incrementQuantity,decrementQuantity,removeItem} from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

export default function ShoppingCard(props) {
  const {id,img,name,price} = props.details;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  const displayButton=cart.find((item) => item.id === id)

  console.log("shopping card: ",props.details);
  return (
    <Grid item xs={12} sm={4} md={4} > 
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image ={img}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
          {displayButton 
          && 
          <RemoveShoppingCartIcon style={{ float: 'right' }} onClick={() => 
            {dispatch(removeItem(
              id))}
          }/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: {price}/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="success" onClick={() => 
    {dispatch(addToCart({
      id, name, img, price
    }))}
  }>Add to Cart</Button>
        {displayButton && <Button
            size="small"
            disableElevation
            variant="contained"
            color="success"
            onClick={() => 
              {dispatch(incrementQuantity(
                id))}
            }
          >
            +
          </Button>}
          {displayButton && <Button
            size="small"
            disableElevation
            variant="contained"
            color="success"
            onClick={() => 
              {dispatch(decrementQuantity(
                id))}
            }
          >
            -
          </Button>}
      </CardActions>
    </Card>
    </Grid>
  );
}