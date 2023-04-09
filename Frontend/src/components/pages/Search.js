import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Select, MenuItem, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  inputField: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(2),
    },
  },
}));

const SearchForm = ( ) => {
  const classes = useStyles();

  const [searchTerm, setSearchTerm] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleSearch(searchTerm, date, category, source);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container>
        <Grid item xs={12} md={3}>
          <TextField
            label="Search"
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            fullWidth
            className={classes.inputField}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            label="Date"
            variant="outlined"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            className={classes.inputField}
          />
        </Grid>

        <Grid item xs={12} md={3}>
          <Select
            label="Category"
            variant="outlined"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            fullWidth
            className={classes.inputField}
          >
            <MenuItem value="">Select a category</MenuItem>
            <MenuItem value="business">Business</MenuItem>
            <MenuItem value="entertainment">Entertainment</MenuItem>
            <MenuItem value="health">Health</MenuItem>
            <MenuItem value="science">Science</MenuItem>
            <MenuItem value="sports">Sports</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
          </Select>
        </Grid>

        <Grid item xs={12} md={3}>
          <TextField
            label="Source"
            variant="outlined"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            fullWidth
            className={classes.inputField}
          />
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
