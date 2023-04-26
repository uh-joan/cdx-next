import { useAutocomplete } from '@mui/base';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import * as React from 'react';

interface FilmOptionType {
  inputValue?: string;
  title: string;
  year?: number;
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100FilmsDefault = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films: readonly FilmOptionType[] = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly', year: 1966 },
  { title: 'Fight Club', year: 1999 },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { title: 'Forrest Gump', year: 1994 },
  { title: 'Inception', year: 2010 },
  {
    title: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: 'Goodfellas', year: 1990 },
  { title: 'The Matrix', year: 1999 },
  { title: 'Seven Samurai', year: 1954 },
  {
    title: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },
  {
    title:
      'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { title: 'The Great Dictator', year: 1940 },
  { title: 'Cinema Paradiso', year: 1988 },
  { title: 'The Lives of Others', year: 2006 },
  { title: 'Grave of the Fireflies', year: 1988 },
  { title: 'Paths of Glory', year: 1957 },
  { title: 'Django Unchained', year: 2012 },
  { title: 'The Shining', year: 1980 },
  { title: 'WALL·E', year: 2008 },
  { title: 'American Beauty', year: 1999 },
  { title: 'The Dark Knight Rises', year: 2012 },
  { title: 'Princess Mononoke', year: 1997 },
  { title: 'Aliens', year: 1986 },
  { title: 'Oldboy', year: 2003 },
  { title: 'Once Upon a Time in America', year: 1984 },
  { title: 'Witness for the Prosecution', year: 1957 },
  { title: 'Das Boot', year: 1981 },
  { title: 'Citizen Kane', year: 1941 },
  { title: 'North by Northwest', year: 1959 },
  { title: 'Vertigo', year: 1958 },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { title: 'Reservoir Dogs', year: 1992 },
  { title: 'Braveheart', year: 1995 },
  { title: 'M', year: 1931 },
  { title: 'Requiem for a Dream', year: 2000 },
  { title: 'Amélie', year: 2001 },
  { title: 'A Clockwork Orange', year: 1971 },
  { title: 'Like Stars on Earth', year: 2007 },
  { title: 'Taxi Driver', year: 1976 },
  { title: 'Lawrence of Arabia', year: 1962 },
  { title: 'Double Indemnity', year: 1944 },
  {
    title: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { title: 'Amadeus', year: 1984 },
  { title: 'To Kill a Mockingbird', year: 1962 },
  { title: 'Toy Story 3', year: 2010 },
  { title: 'Logan', year: 2017 },
  { title: 'Full Metal Jacket', year: 1987 },
  { title: 'Dangal', year: 2016 },
  { title: 'The Sting', year: 1973 },
  { title: '2001: A Space Odyssey', year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: 'Toy Story', year: 1995 },
  { title: 'Bicycle Thieves', year: 1948 },
  { title: 'The Kid', year: 1921 },
  { title: 'Inglourious Basterds', year: 2009 },
  { title: 'Snatch', year: 2000 },
  { title: '3 Idiots', year: 2009 },
  { title: 'Monty Python and the Holy Grail', year: 1975 },
];

export function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100FilmsDefault}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} title="Movie" />}
    />
  );
}

export function Playground() {
  const defaultProps = {
    options: top100Films,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const flatProps = {
    options: top100Films.map((option) => option.title),
  };
  const [value, setValue] = React.useState<FilmOptionType | null>(null);

  return (
    <Stack spacing={1} sx={{ width: 300 }}>
      <Autocomplete
        {...defaultProps}
        id="disable-close-on-select"
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            label="disableCloseOnSelect"
            variant="standard"
          />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-escape"
        clearOnEscape
        renderInput={(params) => (
          <TextField {...params} label="clearOnEscape" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-clearable"
        disableClearable
        renderInput={(params) => (
          <TextField {...params} label="disableClearable" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="include-input-in-list"
        includeInputInList
        renderInput={(params) => (
          <TextField
            {...params}
            label="includeInputInList"
            variant="standard"
          />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="flat-demo"
        renderInput={(params) => (
          <TextField {...params} label="flat" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="controlled-demo"
        value={value}
        onChange={(event: any, newValue: FilmOptionType | null) => {
          setValue(newValue);
        }}
        renderInput={(params) => (
          <TextField {...params} label="controlled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-complete"
        autoComplete
        includeInputInList
        renderInput={(params) => (
          <TextField {...params} label="autoComplete" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-list-wrap"
        disableListWrap
        renderInput={(params) => (
          <TextField {...params} label="disableListWrap" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="open-on-focus"
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label="openOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-highlight"
        autoHighlight
        renderInput={(params) => (
          <TextField {...params} label="autoHighlight" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="auto-select"
        autoSelect
        renderInput={(params) => (
          <TextField {...params} label="autoSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disabled"
        disabled
        renderInput={(params) => (
          <TextField {...params} label="disabled" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="disable-portal"
        disablePortal
        renderInput={(params) => (
          <TextField {...params} label="disablePortal" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="blur-on-select"
        blurOnSelect
        renderInput={(params) => (
          <TextField {...params} label="blurOnSelect" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="clear-on-blur"
        clearOnBlur
        renderInput={(params) => (
          <TextField {...params} label="clearOnBlur" variant="standard" />
        )}
      />
      <Autocomplete
        {...defaultProps}
        id="select-on-focus"
        selectOnFocus
        renderInput={(params) => (
          <TextField {...params} label="selectOnFocus" variant="standard" />
        )}
      />
      <Autocomplete
        {...flatProps}
        id="readOnly"
        readOnly
        defaultValue={flatProps.options[13]}
        renderInput={(params) => (
          <TextField {...params} label="readOnly" variant="standard" />
        )}
      />
    </Stack>
  );
}

export function CountrySelect() {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.title}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.title} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          title="Choose a country"
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}

interface CountryType {
  code: string;
  title: string;
  phone: string;
  suggested?: boolean;
}

// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  { code: 'AD', title: 'Andorra', phone: '376' },
  {
    code: 'AE',
    title: 'United Arab Emirates',
    phone: '971',
  },
  { code: 'AF', title: 'Afghanistan', phone: '93' },
  {
    code: 'AG',
    title: 'Antigua and Barbuda',
    phone: '1-268',
  },
  { code: 'AI', title: 'Anguilla', phone: '1-264' },
  { code: 'AL', title: 'Albania', phone: '355' },
  { code: 'AM', title: 'Armenia', phone: '374' },
  { code: 'AO', title: 'Angola', phone: '244' },
  { code: 'AQ', title: 'Antarctica', phone: '672' },
  { code: 'AR', title: 'Argentina', phone: '54' },
  { code: 'AS', title: 'American Samoa', phone: '1-684' },
  { code: 'AT', title: 'Austria', phone: '43' },
  {
    code: 'AU',
    title: 'Australia',
    phone: '61',
    suggested: true,
  },
  { code: 'AW', title: 'Aruba', phone: '297' },
  { code: 'AX', title: 'Alland Islands', phone: '358' },
  { code: 'AZ', title: 'Azerbaijan', phone: '994' },
  {
    code: 'BA',
    title: 'Bosnia and Herzegovina',
    phone: '387',
  },
  { code: 'BB', title: 'Barbados', phone: '1-246' },
  { code: 'BD', title: 'Bangladesh', phone: '880' },
  { code: 'BE', title: 'Belgium', phone: '32' },
  { code: 'BF', title: 'Burkina Faso', phone: '226' },
  { code: 'BG', title: 'Bulgaria', phone: '359' },
  { code: 'BH', title: 'Bahrain', phone: '973' },
  { code: 'BI', title: 'Burundi', phone: '257' },
  { code: 'BJ', title: 'Benin', phone: '229' },
  { code: 'BL', title: 'Saint Barthelemy', phone: '590' },
  { code: 'BM', title: 'Bermuda', phone: '1-441' },
  { code: 'BN', title: 'Brunei Darussalam', phone: '673' },
  { code: 'BO', title: 'Bolivia', phone: '591' },
  { code: 'BR', title: 'Brazil', phone: '55' },
  { code: 'BS', title: 'Bahamas', phone: '1-242' },
  { code: 'BT', title: 'Bhutan', phone: '975' },
  { code: 'BV', title: 'Bouvet Island', phone: '47' },
  { code: 'BW', title: 'Botswana', phone: '267' },
  { code: 'BY', title: 'Belarus', phone: '375' },
  { code: 'BZ', title: 'Belize', phone: '501' },
  {
    code: 'CA',
    title: 'Canada',
    phone: '1',
    suggested: true,
  },
  {
    code: 'CC',
    title: 'Cocos (Keeling) Islands',
    phone: '61',
  },
  {
    code: 'CD',
    title: 'Congo, Democratic Republic of the',
    phone: '243',
  },
  {
    code: 'CF',
    title: 'Central African Republic',
    phone: '236',
  },
  {
    code: 'CG',
    title: 'Congo, Republic of the',
    phone: '242',
  },
  { code: 'CH', title: 'Switzerland', phone: '41' },
  { code: 'CI', title: "Cote d'Ivoire", phone: '225' },
  { code: 'CK', title: 'Cook Islands', phone: '682' },
  { code: 'CL', title: 'Chile', phone: '56' },
  { code: 'CM', title: 'Cameroon', phone: '237' },
  { code: 'CN', title: 'China', phone: '86' },
  { code: 'CO', title: 'Colombia', phone: '57' },
  { code: 'CR', title: 'Costa Rica', phone: '506' },
  { code: 'CU', title: 'Cuba', phone: '53' },
  { code: 'CV', title: 'Cape Verde', phone: '238' },
  { code: 'CW', title: 'Curacao', phone: '599' },
  { code: 'CX', title: 'Christmas Island', phone: '61' },
  { code: 'CY', title: 'Cyprus', phone: '357' },
  { code: 'CZ', title: 'Czech Republic', phone: '420' },
  {
    code: 'DE',
    title: 'Germany',
    phone: '49',
    suggested: true,
  },
  { code: 'DJ', title: 'Djibouti', phone: '253' },
  { code: 'DK', title: 'Denmark', phone: '45' },
  { code: 'DM', title: 'Dominica', phone: '1-767' },
  {
    code: 'DO',
    title: 'Dominican Republic',
    phone: '1-809',
  },
  { code: 'DZ', title: 'Algeria', phone: '213' },
  { code: 'EC', title: 'Ecuador', phone: '593' },
  { code: 'EE', title: 'Estonia', phone: '372' },
  { code: 'EG', title: 'Egypt', phone: '20' },
  { code: 'EH', title: 'Western Sahara', phone: '212' },
  { code: 'ER', title: 'Eritrea', phone: '291' },
  { code: 'ES', title: 'Spain', phone: '34' },
  { code: 'ET', title: 'Ethiopia', phone: '251' },
  { code: 'FI', title: 'Finland', phone: '358' },
  { code: 'FJ', title: 'Fiji', phone: '679' },
  {
    code: 'FK',
    title: 'Falkland Islands (Malvinas)',
    phone: '500',
  },
  {
    code: 'FM',
    title: 'Micronesia, Federated States of',
    phone: '691',
  },
  { code: 'FO', title: 'Faroe Islands', phone: '298' },
  {
    code: 'FR',
    title: 'France',
    phone: '33',
    suggested: true,
  },
  { code: 'GA', title: 'Gabon', phone: '241' },
  { code: 'GB', title: 'United Kingdom', phone: '44' },
  { code: 'GD', title: 'Grenada', phone: '1-473' },
  { code: 'GE', title: 'Georgia', phone: '995' },
  { code: 'GF', title: 'French Guiana', phone: '594' },
  { code: 'GG', title: 'Guernsey', phone: '44' },
  { code: 'GH', title: 'Ghana', phone: '233' },
  { code: 'GI', title: 'Gibraltar', phone: '350' },
  { code: 'GL', title: 'Greenland', phone: '299' },
  { code: 'GM', title: 'Gambia', phone: '220' },
  { code: 'GN', title: 'Guinea', phone: '224' },
  { code: 'GP', title: 'Guadeloupe', phone: '590' },
  { code: 'GQ', title: 'Equatorial Guinea', phone: '240' },
  { code: 'GR', title: 'Greece', phone: '30' },
  {
    code: 'GS',
    title: 'South Georgia and the South Sandwich Islands',
    phone: '500',
  },
  { code: 'GT', title: 'Guatemala', phone: '502' },
  { code: 'GU', title: 'Guam', phone: '1-671' },
  { code: 'GW', title: 'Guinea-Bissau', phone: '245' },
  { code: 'GY', title: 'Guyana', phone: '592' },
  { code: 'HK', title: 'Hong Kong', phone: '852' },
  {
    code: 'HM',
    title: 'Heard Island and McDonald Islands',
    phone: '672',
  },
  { code: 'HN', title: 'Honduras', phone: '504' },
  { code: 'HR', title: 'Croatia', phone: '385' },
  { code: 'HT', title: 'Haiti', phone: '509' },
  { code: 'HU', title: 'Hungary', phone: '36' },
  { code: 'ID', title: 'Indonesia', phone: '62' },
  { code: 'IE', title: 'Ireland', phone: '353' },
  { code: 'IL', title: 'Israel', phone: '972' },
  { code: 'IM', title: 'Isle of Man', phone: '44' },
  { code: 'IN', title: 'India', phone: '91' },
  {
    code: 'IO',
    title: 'British Indian Ocean Territory',
    phone: '246',
  },
  { code: 'IQ', title: 'Iraq', phone: '964' },
  {
    code: 'IR',
    title: 'Iran, Islamic Republic of',
    phone: '98',
  },
  { code: 'IS', title: 'Iceland', phone: '354' },
  { code: 'IT', title: 'Italy', phone: '39' },
  { code: 'JE', title: 'Jersey', phone: '44' },
  { code: 'JM', title: 'Jamaica', phone: '1-876' },
  { code: 'JO', title: 'Jordan', phone: '962' },
  {
    code: 'JP',
    title: 'Japan',
    phone: '81',
    suggested: true,
  },
  { code: 'KE', title: 'Kenya', phone: '254' },
  { code: 'KG', title: 'Kyrgyzstan', phone: '996' },
  { code: 'KH', title: 'Cambodia', phone: '855' },
  { code: 'KI', title: 'Kiribati', phone: '686' },
  { code: 'KM', title: 'Comoros', phone: '269' },
  {
    code: 'KN',
    title: 'Saint Kitts and Nevis',
    phone: '1-869',
  },
  {
    code: 'KP',
    title: "Korea, Democratic People's Republic of",
    phone: '850',
  },
  { code: 'KR', title: 'Korea, Republic of', phone: '82' },
  { code: 'KW', title: 'Kuwait', phone: '965' },
  { code: 'KY', title: 'Cayman Islands', phone: '1-345' },
  { code: 'KZ', title: 'Kazakhstan', phone: '7' },
  {
    code: 'LA',
    title: "Lao People's Democratic Republic",
    phone: '856',
  },
  { code: 'LB', title: 'Lebanon', phone: '961' },
  { code: 'LC', title: 'Saint Lucia', phone: '1-758' },
  { code: 'LI', title: 'Liechtenstein', phone: '423' },
  { code: 'LK', title: 'Sri Lanka', phone: '94' },
  { code: 'LR', title: 'Liberia', phone: '231' },
  { code: 'LS', title: 'Lesotho', phone: '266' },
  { code: 'LT', title: 'Lithuania', phone: '370' },
  { code: 'LU', title: 'Luxembourg', phone: '352' },
  { code: 'LV', title: 'Latvia', phone: '371' },
  { code: 'LY', title: 'Libya', phone: '218' },
  { code: 'MA', title: 'Morocco', phone: '212' },
  { code: 'MC', title: 'Monaco', phone: '377' },
  {
    code: 'MD',
    title: 'Moldova, Republic of',
    phone: '373',
  },
  { code: 'ME', title: 'Montenegro', phone: '382' },
  {
    code: 'MF',
    title: 'Saint Martin (French part)',
    phone: '590',
  },
  { code: 'MG', title: 'Madagascar', phone: '261' },
  { code: 'MH', title: 'Marshall Islands', phone: '692' },
  {
    code: 'MK',
    title: 'Macedonia, the Former Yugoslav Republic of',
    phone: '389',
  },
  { code: 'ML', title: 'Mali', phone: '223' },
  { code: 'MM', title: 'Myanmar', phone: '95' },
  { code: 'MN', title: 'Mongolia', phone: '976' },
  { code: 'MO', title: 'Macao', phone: '853' },
  {
    code: 'MP',
    title: 'Northern Mariana Islands',
    phone: '1-670',
  },
  { code: 'MQ', title: 'Martinique', phone: '596' },
  { code: 'MR', title: 'Mauritania', phone: '222' },
  { code: 'MS', title: 'Montserrat', phone: '1-664' },
  { code: 'MT', title: 'Malta', phone: '356' },
  { code: 'MU', title: 'Mauritius', phone: '230' },
  { code: 'MV', title: 'Maldives', phone: '960' },
  { code: 'MW', title: 'Malawi', phone: '265' },
  { code: 'MX', title: 'Mexico', phone: '52' },
  { code: 'MY', title: 'Malaysia', phone: '60' },
  { code: 'MZ', title: 'Mozambique', phone: '258' },
  { code: 'NA', title: 'Namibia', phone: '264' },
  { code: 'NC', title: 'New Caledonia', phone: '687' },
  { code: 'NE', title: 'Niger', phone: '227' },
  { code: 'NF', title: 'Norfolk Island', phone: '672' },
  { code: 'NG', title: 'Nigeria', phone: '234' },
  { code: 'NI', title: 'Nicaragua', phone: '505' },
  { code: 'NL', title: 'Netherlands', phone: '31' },
  { code: 'NO', title: 'Norway', phone: '47' },
  { code: 'NP', title: 'Nepal', phone: '977' },
  { code: 'NR', title: 'Nauru', phone: '674' },
  { code: 'NU', title: 'Niue', phone: '683' },
  { code: 'NZ', title: 'New Zealand', phone: '64' },
  { code: 'OM', title: 'Oman', phone: '968' },
  { code: 'PA', title: 'Panama', phone: '507' },
  { code: 'PE', title: 'Peru', phone: '51' },
  { code: 'PF', title: 'French Polynesia', phone: '689' },
  { code: 'PG', title: 'Papua New Guinea', phone: '675' },
  { code: 'PH', title: 'Philippines', phone: '63' },
  { code: 'PK', title: 'Pakistan', phone: '92' },
  { code: 'PL', title: 'Poland', phone: '48' },
  {
    code: 'PM',
    title: 'Saint Pierre and Miquelon',
    phone: '508',
  },
  { code: 'PN', title: 'Pitcairn', phone: '870' },
  { code: 'PR', title: 'Puerto Rico', phone: '1' },
  {
    code: 'PS',
    title: 'Palestine, State of',
    phone: '970',
  },
  { code: 'PT', title: 'Portugal', phone: '351' },
  { code: 'PW', title: 'Palau', phone: '680' },
  { code: 'PY', title: 'Paraguay', phone: '595' },
  { code: 'QA', title: 'Qatar', phone: '974' },
  { code: 'RE', title: 'Reunion', phone: '262' },
  { code: 'RO', title: 'Romania', phone: '40' },
  { code: 'RS', title: 'Serbia', phone: '381' },
  { code: 'RU', title: 'Russian Federation', phone: '7' },
  { code: 'RW', title: 'Rwanda', phone: '250' },
  { code: 'SA', title: 'Saudi Arabia', phone: '966' },
  { code: 'SB', title: 'Solomon Islands', phone: '677' },
  { code: 'SC', title: 'Seychelles', phone: '248' },
  { code: 'SD', title: 'Sudan', phone: '249' },
  { code: 'SE', title: 'Sweden', phone: '46' },
  { code: 'SG', title: 'Singapore', phone: '65' },
  { code: 'SH', title: 'Saint Helena', phone: '290' },
  { code: 'SI', title: 'Slovenia', phone: '386' },
  {
    code: 'SJ',
    title: 'Svalbard and Jan Mayen',
    phone: '47',
  },
  { code: 'SK', title: 'Slovakia', phone: '421' },
  { code: 'SL', title: 'Sierra Leone', phone: '232' },
  { code: 'SM', title: 'San Marino', phone: '378' },
  { code: 'SN', title: 'Senegal', phone: '221' },
  { code: 'SO', title: 'Somalia', phone: '252' },
  { code: 'SR', title: 'Suriname', phone: '597' },
  { code: 'SS', title: 'South Sudan', phone: '211' },
  {
    code: 'ST',
    title: 'Sao Tome and Principe',
    phone: '239',
  },
  { code: 'SV', title: 'El Salvador', phone: '503' },
  {
    code: 'SX',
    title: 'Sint Maarten (Dutch part)',
    phone: '1-721',
  },
  {
    code: 'SY',
    title: 'Syrian Arab Republic',
    phone: '963',
  },
  { code: 'SZ', title: 'Swaziland', phone: '268' },
  {
    code: 'TC',
    title: 'Turks and Caicos Islands',
    phone: '1-649',
  },
  { code: 'TD', title: 'Chad', phone: '235' },
  {
    code: 'TF',
    title: 'French Southern Territories',
    phone: '262',
  },
  { code: 'TG', title: 'Togo', phone: '228' },
  { code: 'TH', title: 'Thailand', phone: '66' },
  { code: 'TJ', title: 'Tajikistan', phone: '992' },
  { code: 'TK', title: 'Tokelau', phone: '690' },
  { code: 'TL', title: 'Timor-Leste', phone: '670' },
  { code: 'TM', title: 'Turkmenistan', phone: '993' },
  { code: 'TN', title: 'Tunisia', phone: '216' },
  { code: 'TO', title: 'Tonga', phone: '676' },
  { code: 'TR', title: 'Turkey', phone: '90' },
  {
    code: 'TT',
    title: 'Trinidad and Tobago',
    phone: '1-868',
  },
  { code: 'TV', title: 'Tuvalu', phone: '688' },
  {
    code: 'TW',
    title: 'Taiwan, Republic of China',
    phone: '886',
  },
  {
    code: 'TZ',
    title: 'United Republic of Tanzania',
    phone: '255',
  },
  { code: 'UA', title: 'Ukraine', phone: '380' },
  { code: 'UG', title: 'Uganda', phone: '256' },
  {
    code: 'US',
    title: 'United States',
    phone: '1',
    suggested: true,
  },
  { code: 'UY', title: 'Uruguay', phone: '598' },
  { code: 'UZ', title: 'Uzbekistan', phone: '998' },
  {
    code: 'VA',
    title: 'Holy See (Vatican City State)',
    phone: '379',
  },
  {
    code: 'VC',
    title: 'Saint Vincent and the Grenadines',
    phone: '1-784',
  },
  { code: 'VE', title: 'Venezuela', phone: '58' },
  {
    code: 'VG',
    title: 'British Virgin Islands',
    phone: '1-284',
  },
  {
    code: 'VI',
    title: 'US Virgin Islands',
    phone: '1-340',
  },
  { code: 'VN', title: 'Vietnam', phone: '84' },
  { code: 'VU', title: 'Vanuatu', phone: '678' },
  { code: 'WF', title: 'Wallis and Futuna', phone: '681' },
  { code: 'WS', title: 'Samoa', phone: '685' },
  { code: 'XK', title: 'Kosovo', phone: '383' },
  { code: 'YE', title: 'Yemen', phone: '967' },
  { code: 'YT', title: 'Mayotte', phone: '262' },
  { code: 'ZA', title: 'South Africa', phone: '27' },
  { code: 'ZM', title: 'Zambia', phone: '260' },
  { code: 'ZW', title: 'Zimbabwe', phone: '263' },
];

export function FreeSolo() {
  return (
    <Stack spacing={2} sx={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => <TextField {...params} title="freeSolo" />}
      />
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={top100Films.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            title="Search input"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </Stack>
  );
}

const filter = createFilterOptions<FilmOptionType>();

export function FreeSoloCreateOption() {
  const [value, setValue] = React.useState<FilmOptionType | null>(null);

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            title: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            title: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some(
          (option) => inputValue === option.title,
        );
        if (inputValue !== '' && !isExisting) {
          filtered.push({
            inputValue,
            title: `Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={top100Films}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.title;
      }}
      renderOption={(props, option) => <li {...props}>{option.title}</li>}
      sx={{ width: 300 }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Free solo with text demo" />
      )}
    />
  );
}

export function Grouped() {
  const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Autocomplete
      id="grouped-demo"
      options={options.sort(
        (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
      )}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="With categories" />
      )}
    />
  );
}

export function DisabledOptions() {
  return (
    <Autocomplete
      id="disabled-options-demo"
      options={timeSlots}
      getOptionDisabled={(option) =>
        option === timeSlots[0] || option === timeSlots[2]
      }
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Disabled options" />
      )}
    />
  );
}

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${
      index % 2 === 0 ? '00' : '30'
    }`,
);

const Label = styled('label')({
  display: 'block',
});

const Input = styled('input')(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  color: theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

export function UseAutocomplete() {
  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: top100Films,
    getOptionLabel: (option) => option.title,
  });

  return (
    <div>
      <div {...getRootProps()}>
        <Label {...getInputLabelProps()}>useAutocomplete</Label>
        <Input {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof top100Films).map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.title}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

export default ComboBox();
