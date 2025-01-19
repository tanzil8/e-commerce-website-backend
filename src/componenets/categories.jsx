import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';

const categories = [
  { id: 1, name: 'Electronics', image: 'https://source.unsplash.com/random/300x200/?electronics' },
  { id: 2, name: 'Fashion', image: 'https://source.unsplash.com/random/300x200/?fashion' },
  { id: 3, name: 'Home & Garden', image: 'https://source.unsplash.com/random/300x200/?home' },
  { id: 4, name: 'Sports', image: 'https://source.unsplash.com/random/300x200/?sports' },
];

var Categories = function() {
  var theme = useTheme();

  return (
    <Box sx={{ my: 8 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 'bold', mb: 4, color: theme.palette.text.primary }}>
        Categories
      </Typography>
      <Grid container spacing={2}>
        {categories.map(function(category) {
          return (
            <Grid item xs={6} sm={3} key={category.id}>
              <Paper
                sx={{
                  backgroundImage: `url(${category.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: 150,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: theme.palette.background.default, 
                    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    padding: '5px 10px',
                    borderRadius: '4px'
                  }}
                >
                  {category.name}
                </Typography>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Categories;

