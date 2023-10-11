import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addToCart, incrementQuantity, decrementQuantity, removeItem } from '../redux/cartSlice';
import { useSelector } from 'react-redux';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import { ADDTOCART } from '../utils/Constants';

export default function ShoppingCard(props) {
  const { id, img, name, price } = props.details;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart)
  const displayButton = cart.find((item) => item.id === id)
  const [quantity, setQuantity] = React.useState('0');

  const retreiveQty = () => {
    cart.find((item) => {
      if (item.id === id) {
        setQuantity(item.quantity);
      }
    })
  }
  React.useEffect(() => {
    retreiveQty();
  }, [cart])
  return (
    <Grid item xs={12} sm={4} md={4} >
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="150"
          image={img}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
            {displayButton
              &&
              <RemoveShoppingCartIcon style={{ float: 'right' }} onClick={() => {
                dispatch(removeItem(
                  id))
              }
              } />}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {price}/-
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="success" onClick={() => {
            dispatch(addToCart({
              id, name, img, price
            }));
          }
          }>{ADDTOCART}</Button>
          {displayButton && <Button
            size="small"
            disableElevation
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(incrementQuantity(
                id));
            }
            }
          >
            +
          </Button>}
          {displayButton && <TextField sx={{
        width: { sm: 80, md: 80}, ml:1,"& .MuiInputBase-input-MuiFilledInput-input": {
          height: '0.4px'
      }
    }} id="quantity-field" value={quantity} variant="filled" disabled />}
          {displayButton && <Button
            size="small"
            disableElevation
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(decrementQuantity(
                id));
            }
            }
          >
            -
          </Button>}
        </CardActions>
      </Card>
    </Grid>
  );
}