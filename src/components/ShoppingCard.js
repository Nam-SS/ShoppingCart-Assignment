import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ShoppingCard(props) {
  const [img,name,price] = props.details;
  console.log("shopping card: ",props.details);
  return (
    <div style={{margin: '5%'}}>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="150"
        image ={img}
        alt="Tomato"
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
        <Button size="small">Add to Cart</Button>
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
    </div>
  );
}