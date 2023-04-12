import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { onFilter } from 'Redux/contacts/contactsSlice';

export default function Filter() {
  const dispatch = useDispatch();
  //
  const filteredContacts = e => {
    dispatch(onFilter(e.currentTarget.value.toLowerCase()));
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={filteredContacts}
        id="standard-basic"
        label="Find contacts by name"
        variant="standard"
      />
    </Box>
  );
}
