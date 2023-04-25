import { Button, Card, CardActions, CardContent, CardMedia, ImageListItem, Rating, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);

  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";

  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const div = {
    display: 'flex',
    flexWrap: 'wrap'
   
  }
  const card = {
    width: '27%',
    margin: 'auto'
  }
  const titulo = {
    width: '100%'
  }
  return (
    <div style={div}>
      <h1 style={titulo}>Productos</h1>
      {
        products.map((product:any) =>(
          <Card sx={{ maxWidth: 345 }} key={product.id} style={card}>

      <ImageListItem>
        <img
          src={`${product.imagen}`}
          srcSet={`${product.imagen}`}
          alt={product.name}
          loading="lazy"
          width={100}
        />
      </ImageListItem>

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.price}
        </Typography>
      </CardContent>
      <Rating name="size-medium" defaultValue={2} />
      <CardActions>
        <Button size="small">Buy Now</Button>
      </CardActions>
    </Card>
        )
        )
      }
      
    </div>
  )
}