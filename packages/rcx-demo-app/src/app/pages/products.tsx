import { Box, Container, Grid, Pagination } from '@mui/material';
import * as React from 'react';

import { Article, articles } from '../../__mocks__/articles';
import { ProductCard } from '../../components/product/product-card';
import { ProductListToolbar } from '../../components/product/product-list-toolbar';

type Filter = {
  peerReviewed: boolean;
  fullArticle: boolean;
  metaAnalysis: boolean;
};

const Products = () => {
  const defaultEndDate = new Date();
  const defaultStartDate = new Date();
  defaultStartDate.setFullYear(defaultEndDate.getFullYear() - 10);

  const [showProducts, setShowProducts] = React.useState(false);

  const handleSearch = () => {
    setShowProducts(true);
  };

  const handleClear = () => {
    setShowProducts(false);
  };

  const [startDate, setStartDate] = React.useState(defaultStartDate);
  const [endDate, setEndDate] = React.useState(defaultEndDate);

  const handleDateChange = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
  };

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
  };

  const handleFilterPropertyChange = (
    filters: React.SetStateAction<Filter>,
  ) => {
    setSelectedFiltersByProperties(filters);
  };

  const [selectedFilters, setSelectedFilters] = React.useState([
    'Clinics in liver disease',
    'Alzheimer disease',
    'Androgenetic Alopecia',
    'Weight Management',
  ]);

  const [selectedFiltersByProperties, setSelectedFiltersByProperties] =
    React.useState({
      peerReviewed: false,
      fullArticle: false,
      metaAnalysis: false,
    });

  const filterArticlesByDate = () => {
    return articles.filter((article: Article) => {
      const articleDate = new Date(article.updated);
      return articleDate >= startDate && articleDate <= endDate;
    });
  };

  const filterArticlesByFilters = (articles: Article[]) => {
    return articles.filter((article: Article) => {
      return selectedFilters.some(
        (selectedFilters) =>
          article.argument.includes(selectedFilters) &&
          (!selectedFiltersByProperties.peerReviewed || article.peerReviewed) &&
          (!selectedFiltersByProperties.metaAnalysis || article.metaAnalysis) &&
          (!selectedFiltersByProperties.fullArticle || article.fullArticle),
      );
    });
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
        <ProductListToolbar
          onSearch={handleSearch}
          onClear={handleClear}
          onDateChange={handleDateChange}
          onFilterChange={handleFilterChange}
          onFilterPropertyChange={handleFilterPropertyChange}
        />

        {showProducts && (
          <div>
            <Box sx={{ pt: 3 }}>
              <Grid container spacing={3}>
                {filterArticlesByFilters(filterArticlesByDate()).map(
                  (article: Article) => (
                    <Grid item key={article.id} lg={12} md={12} xs={12}>
                      <ProductCard article={article} />
                    </Grid>
                  ),
                )}
              </Grid>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 3,
              }}
            >
              {!!filterArticlesByFilters(filterArticlesByDate()).length && (
                <Pagination color="primary" count={3} size="small" />
              )}
            </Box>
          </div>
        )}
      </Container>
    </Box>
  );
};

export default Products;
