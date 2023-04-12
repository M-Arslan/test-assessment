import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, TextField, Select, MenuItem, Button } from '@material-ui/core';
import { LoadProfileAction } from '../../redux/actions/ProfileActions';
import {useDispatch, useSelector} from 'react-redux';

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
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [category, setCategory] = useState('');

  const [selectedValues, setSelectedValues] = useState([]);

  const handleChange = (event) => {
    setSelectedValues(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      to: date,
      from:fromDate,
      source:selectedValues,
      category:category
    }
    dispatch(LoadProfileAction());
    // handleSearch(searchTerm, date, category, source);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container>
        

        <Grid item xs={12} md={3}>
          <TextField
            label="To"
            variant="outlined"
            type="from"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            fullWidth
            className={classes.inputField}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <TextField
            label="From"
            variant="outlined"
            type="from"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
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
        <Select
          multiple
          value={selectedValues}
          onChange={handleChange}
          renderValue={(selected) => selected.join(', ')}
        >
           <MenuItem value="">Select a Source</MenuItem>
            <MenuItem value="bbc-news">BBC News</MenuItem>
            <MenuItem value="business">Handelsblatt</MenuItem>
            <MenuItem value="il-sole-24-ore">Il Sole 24 Ore</MenuItem>
            <MenuItem value="InfoMoney">InfoMoney</MenuItem>
            <MenuItem value="les-echos">Les Echos</MenuItem>
            <MenuItem value="wirtschafts-woche">Wirtschafts Woche</MenuItem>
            <MenuItem value="technology">Technology</MenuItem>
        </Select>
          {/* <TextField
            label="Source"
            variant="outlined"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            fullWidth
            className={classes.inputField}
          /> */}
        </Grid>
      </Grid>

      <Button type="submit" variant="contained" color="primary">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
