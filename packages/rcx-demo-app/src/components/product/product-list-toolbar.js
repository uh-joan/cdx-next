import ClearIcon from '@mui/icons-material/Clear';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Button,
  Card,
  CardContent,
  Checkbox,
  Divider,
  FormControlLabel,
  InputAdornment,
  SvgIcon,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import itLocale from 'date-fns/locale/it';
import * as React from 'react';

import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';

export const ProductListToolbar = ({
  onSearch,
  onClear,
  onDateChange,
  onFilterChange,
  onFilterPropertyChange,
}) => {
  const defaultEndDate = new Date();
  const defaultStartDate = new Date(
    defaultEndDate - 10 * 12 * 30 * 24 * 60 * 60 * 1000,
  );

  const handleSearch = () => {
    onSearch(startDate, endDate, searchValue);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClear = () => {
    setSearchValue('');
    setStartDate(defaultStartDate);
    setEndDate(defaultEndDate);
    onClear();
    onDateChange(defaultStartDate, defaultEndDate);
  };

  const [showFilters, setShowFilters] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState('');

  const [startDate, setStartDate] = React.useState(defaultStartDate);

  const [endDate, setEndDate] = React.useState(defaultEndDate);

  const handleStartDateChange = (date) => {
    setStartDate(date);
    onDateChange(date, endDate);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    onDateChange(startDate, date);
  };

  const [selectedFilters, setSelectedFilters] = React.useState([
    'Clinics in liver disease',
    'Alzheimer disease',
    'Androgenetic Alopecia',
    'Weight Management',
  ]);

  const [selectedFiltersByProperties, setSelectedFiltersByProperties] =
    React.useState({
      peerReviewd: false,
      fullArticle: false,
      metaAnalysis: false,
    });

  const handleFilterChange = (filter) => {
    let newFilters;
    if (selectedFilters.includes(filter)) {
      newFilters = selectedFilters.filter((f) => f !== filter);
      setSelectedFilters(newFilters);
    } else {
      newFilters = [...selectedFilters, filter];
      setSelectedFilters(newFilters);
    }
    onFilterChange(newFilters);
  };

  const handleFilterPropertiesChange = (filterObj) => {
    const newFilters = {
      ...selectedFiltersByProperties,
      ...filterObj,
    };
    setSelectedFiltersByProperties(newFilters);
    onFilterPropertyChange(newFilters);
  };

  return (
    <Box>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1,
        }}
      >
        <Typography sx={{ m: 1 }} variant="h4">
          Articles
        </Typography>
        <Box sx={{ m: 1 }}>
          <Button startIcon={<UploadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Export
          </Button>
          <Button startIcon={<DownloadIcon fontSize="small" />} sx={{ mr: 1 }}>
            Import
          </Button>
          <Button color="primary" variant="contained">
            Add subject
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'space-between',
              padding: '16px!important',
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'space-between',
              }}
            >
              <TextField
                sx={{
                  width: 500,
                }}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search Articles"
                variant="outlined"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
              />
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Button
                  onClick={handleSearch}
                  color="primary"
                  variant="contained"
                  sx={{
                    mr: '16px',
                  }}
                >
                  Search
                </Button>
                <Button
                  sx={{
                    mr: '16px',
                    minWidth: '10rem',
                  }}
                  variant="outlined"
                  startIcon={
                    showFilters ? (
                      <ExpandLessIcon fontSize="small" />
                    ) : (
                      <ExpandMoreIcon fontSize="small" />
                    )
                  }
                  onClick={toggleFilters}
                >
                  {showFilters ? 'Hide Filters' : 'Show Filters'}
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<ClearIcon fontSize="small" />}
                  onClick={handleClear}
                >
                  Clear
                </Button>
              </Box>
            </Box>
          </CardContent>
          <Divider sx={{ marginRight: '1rem', marginLeft: '1rem' }} />
          {showFilters && (
            <Box
              sx={{
                paddingBottom: '2rem',
                display: 'flex',
                paddingTop: '2rem',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}
            >
              <Box>
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Arguments
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <FormControlLabel
                    onChange={() =>
                      handleFilterChange('Clinics in liver disease')
                    }
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Clinics in liver disease"
                  />
                  <FormControlLabel
                    onChange={() => handleFilterChange('Alzheimer disease')}
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Alzheimer disease"
                  />
                  <FormControlLabel
                    onChange={() => handleFilterChange('Androgenetic Alopecia')}
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Androgenetic Alopecia"
                  />
                  <FormControlLabel
                    onChange={() => handleFilterChange('Weight Management')}
                    control={<Checkbox color="primary" defaultChecked />}
                    label="Weight Management"
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Properties
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={selectedFiltersByProperties.peerReviewd}
                      onChange={() =>
                        handleFilterPropertiesChange({
                          peerReviewd: !selectedFiltersByProperties.peerReviewd,
                        })
                      }
                      color="primary"
                    />
                  }
                  label="Peer reviewd"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={selectedFiltersByProperties.fullArticle}
                      onChange={() =>
                        handleFilterPropertiesChange({
                          fullArticle: !selectedFiltersByProperties.fullArticle,
                        })
                      }
                      color="primary"
                    />
                  }
                  label="Full article"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={selectedFiltersByProperties.metaAnalysis}
                      onChange={() =>
                        handleFilterPropertiesChange({
                          metaAnalysis:
                            !selectedFiltersByProperties.metaAnalysis,
                        })
                      }
                      color="primary"
                    />
                  }
                  label="Meta analysis"
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <Typography color="textPrimary" gutterBottom variant="h6">
                  Date range
                </Typography>
                <LocalizationProvider
                  dateAdapter={AdapterDateFns}
                  locale={itLocale}
                >
                  <DatePicker
                    label="Start Date"
                    color="primary"
                    value={startDate}
                    maxDate={defaultEndDate}
                    onChange={handleStartDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                  <DatePicker
                    label="End Date"
                    color="primary"
                    value={endDate}
                    maxDate={defaultEndDate}
                    onChange={handleEndDateChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </Box>
            </Box>
          )}
        </Card>
      </Box>
    </Box>
  );
};
