import { Box, Container, Grid, Pagination } from '@mui/material';
import * as React from 'react';

import articles from '../../__mocks__/articles';
import { products } from '../../__mocks__/products';
import { ProductCard } from '../../components/product/product-card';
import { ProductListToolbar } from '../../components/product/product-list-toolbar';

const Products = () => {
  const [showProducts, setShowProducts] = React.useState(false);

  const handleSearch = () => {
    setShowProducts(true);
  };

  const handleClear = () => {
    setShowProducts(false);
  };

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth={false}>
        <ProductListToolbar onSearch={handleSearch} onClear={handleClear} />

        {showProducts && (
          <div>
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={3}>
                {articles.map((article) => (
                  <Grid item key={article.id} lg={12} md={12} xs={12}>
                    <ProductCard article={article} />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3,
              }}
            >
              <Pagination color="primary" count={3} size="small" />
            </Box>
          </div>
        )}
      </Container>
    </Box>
  );
};

export default Products;
