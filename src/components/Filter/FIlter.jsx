import React from 'react';
// import TextField from '@mui/material/TextField';
import { TextField } from './Filter.styled';
export const Filter = ({ handleChange, value }) => {
  return (
    <TextField
      onChange={handleChange}
      value={value}
      id="standard-basic"
      label="Standard"
      variant="standard"
      placeholder="Search"
    />
  );
};
