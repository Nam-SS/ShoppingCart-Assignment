import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

export default function ShoppingCard(props) {
  const {id,img,name,price} = props.details;
  const dispatch = useDispatch();
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
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Price: {price}/-
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => 
    {console.log(id,name,img,price);dispatch(addToCart({
      id, name, img, price
    }))}
  }>Add to Cart</Button>
        <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => removeFromCart(item.id)}
          >
            -
          </Button>
          <Button
            size="small"
            disableElevation
            variant="contained"
            onClick={() => addToCart(item)}
          >
            +
          </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}