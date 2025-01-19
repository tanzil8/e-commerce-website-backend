import React from 'react';
import { Box, Typography, Button, Container, useTheme } from '@mui/material';

var Banner = function() {
  var theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?shopping)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '70vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(165, 157, 132, 0.7)', // Using #A59D84 with opacity
        },
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ textAlign: 'center', color: theme.palette.background.default }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              mb: 4,
            }}
          >
            Welcome to E-Shop
          </Typography>
          <Typography
            variant="h5"
            component="h2"
            gutterBottom
            sx={{
              mb: 4,
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            }}
          >
            Discover amazing products at unbeatable prices
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 2,
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.background.default,
              '&:hover': {
                backgroundColor: theme.palette.secondary.dark,
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

