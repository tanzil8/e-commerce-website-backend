import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useTheme,
  Rating,
  Chip,
} from '@mui/material';

var initialProducts = [
  { id: 1, name: 'Premium Headphones', price: '$199.99', image: 'https://source.unsplash.com/random/300x200/?headphones', rating: 4.5, discount: 10 },
  { id: 2, name: 'Smart Watch', price: '$249.99', image: 'https://source.unsplash.com/random/300x200/?smartwatch', rating: 4.2, discount: 15 },
  { id: 3, name: 'Wireless Keyboard', price: '$79.99', image: 'https://source.unsplash.com/random/300x200/?keyboard', rating: 4.0, discount: 0 },
  { id: 4, name: 'Gaming Mouse', price: '$59.99', image: 'https://source.unsplash.com/random/300x200/?mouse', rating: 4.7, discount: 5 },
  { id: 5, name: 'Portable SSD', price: '$129.99', image: 'https://source.unsplash.com/random/300x200/?ssd', rating: 4.8, discount: 0 },
  { id: 6, name: 'Bluetooth Speaker', price: '$89.99', image: 'https://source.unsplash.com/random/300x200/?speaker', rating: 4.3, discount: 20 },
  { id: 7, name: 'Ergonomic Chair', price: '$299.99', image: 'https://source.unsplash.com/random/300x200/?chair', rating: 4.6, discount: 0 },
  { id: 8, name: 'Laptop Stand', price: '$39.99', image: 'https://source.unsplash.com/random/300x200/?laptopstand', rating: 4.1, discount: 0 },
  { id: 9, name: 'Wireless Charger', price: '$49.99', image: 'https://source.unsplash.com/random/300x200/?wirelesscharger', rating: 4.4, discount: 10 },
  { id: 10, name: 'Noise-Canceling Earbuds', price: '$159.99', image: 'https://source.unsplash.com/random/300x200/?earbuds', rating: 4.9, discount: 5 },
];

var allProducts = [
  ...initialProducts,
  { id: 11, name: 'Mechanical Keyboard', price: '$129.99', image: 'https://source.unsplash.com/random/300x200/?mechanicalkeyboard', rating: 4.7, discount: 0 },
  { id: 12, name: 'Ultrawide Monitor', price: '$499.99', image: 'https://source.unsplash.com/random/300x200/?monitor', rating: 4.8, discount: 10 },
  { id: 13, name: 'Wireless Mouse', price: '$39.99', image: 'https://source.unsplash.com/random/300x200/?wirelessmouse', rating: 4.2, discount: 0 },
  { id: 14, name: 'USB-C Hub', price: '$59.99', image: 'https://source.unsplash.com/random/300x200/?usbhub', rating: 4.5, discount: 15 },
  { id: 15, name: 'Webcam', price: '$79.99', image: 'https://source.unsplash.com/random/300x200/?webcam', rating: 4.3, discount: 5 },
];

var ProductShowcase = function() {
  var [products, setProducts] = useState(initialProducts);
  var [open, setOpen] = useState(false);
  var [selectedProduct, setSelectedProduct] = useState(null);
  var theme = useTheme();

  var handleViewAll = function() {
    setProducts(allProducts);
  };

  var handleOpenDialog = function(product) {
    setSelectedProduct(product);
    setOpen(true);
  };

  var handleCloseDialog = function() {
    setOpen(false);
  };

  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.text.primary }}>
        Featured Products
      </Typography>
      <Grid container spacing={4}>
        {products.map(function(product) {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: theme.shadows[4],
                  },
                  backgroundColor: theme.palette.background.paper,
                }}
              >
                <CardMedia component="img" height="200" image={product.image} alt={product.name} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div" color="text.primary">
                    {product.name}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Typography variant="h6" color="primary">
                      {product.price}
                    </Typography>
                    {product.discount > 0 && (
                      <Chip
                        label={`${product.discount}% OFF`}
                        color="secondary"
                        size="small"
                      />
                    )}
                  </Box>
                  <Rating value={product.rating} precision={0.1} readOnly size="small" />
                </CardContent>
                <Button size="small" onClick={function() { handleOpenDialog(product); }} sx={{ m: 2, color: theme.palette.primary.main }}>
                  Quick View
                </Button>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {products.length === initialProducts.length && (
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" onClick={handleViewAll} size="large" sx={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.background.default }}>
            View All Products
          </Button>
        </Box>
      )}
      <Dialog open={open} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
        {selectedProduct && (
          <>
            <DialogTitle sx={{ color: theme.palette.text.primary }}>{selectedProduct.name}</DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                <Box sx={{ flex: 1 }}>
                  <img src={selectedProduct.image || "/placeholder.svg"} alt={selectedProduct.name} style={{ width: '100%', borderRadius: '4px' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {selectedProduct.price}
                  </Typography>
                  <Rating value={selectedProduct.rating} precision={0.1} readOnly size="small" sx={{ mb: 1 }} />
                  <Typography variant="body1" paragraph color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </Typography>
                  {selectedProduct.discount > 0 && (
                    <Chip
                      label={`${selectedProduct.discount}% OFF`}
                      color="secondary"
                      size="small"
                      sx={{ mb: 2 }}
                    />
                  )}
                </Box>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog} sx={{ color: theme.palette.text.primary }}>Close</Button>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default ProductShowcase;

