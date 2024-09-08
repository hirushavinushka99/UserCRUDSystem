import { Button, Grid2, Input, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UserForm = ({ addUser, updateUser, submitted, data, isEdit }) => {

  const [id, setId] = useState('0');
  const [name, setName] = useState('');

  useEffect(() => {
    if(!submitted){
      setId(0);
      setName('');
    }
  },[submitted]);

  useEffect(() => {
    if(data?.id && data.id !==0){
      setId(data.id);
      setName(data.name);
    }
  },[data]);

  return (
    <Grid2
  container
  spacing={2}
  sx={{
    backgroundColor: '#ffffff',
    marginBottom: '30px',
    marginLeft: '30px',
    padding: '60px',
  }}
>
<Grid2
  item
  xs={12}
  sx={{
    position: 'absolute', // Position it at the top
    top: '0', // Align it to the top of the page
    left: '50%', // Center horizontally
    transform: 'translateX(-50%)', // Center alignment correction
    padding: '20px',
    backgroundColor: '#000000', // Optional: background to make it stand out
    width: '100%', // Ensure it spans across the full width
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)', // Optional: shadow for depth
    
  }}
>
  <Typography
    component={'h1'}
    sx={{
      color: '#ffffff',
      paddingBottom: '20px',
      textAlign: 'center', // Center the text
      fontWeight: 'bold',
      fontSize: '40px',
    }}
  >
    User Form
  </Typography>
</Grid2>


  <Grid2 item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography
      component={'label'}
      htmlFor="id"
      sx={{
        color: '#000000',
        marginRight: '20px',
        fontSize: '16px',
      }}
    >
      ID
    </Typography>
    <Input
      type="number"
      id="id"
      name="id"
      sx={{ width: '100%' }} // Make the input responsive
      value={id}
      onChange={e => setId(e.target.value)}
    />
  </Grid2>

  <Grid2 item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center' }}>
    <Typography
      component={'label'}
      htmlFor="name"
      sx={{
        color: '#000000',
        marginRight: '20px',
        fontSize: '16px',
      }}
    >
      Name
    </Typography>
    <Input
      type="text"
      id="name"
      name="name"
      sx={{ width: '100%' }} // Make the input responsive
      value={name}
      onChange={e => setName(e.target.value)}
    />
  </Grid2>

  <Grid2 item xs={12} sx={{ textAlign: 'center' }}>
    <Button
      sx={{
        margin: '20px auto',
        backgroundColor: '#00c6e6',
        color: '#000000',
        '&:hover': {
          opacity: '0.7',
          backgroundColor: '#00c6e6',
        },
      }}
      onClick={() => (isEdit ? updateUser({ id, name }) : addUser({ id, name }))}
    >
      {isEdit ? 'Update' : 'Add'}
    </Button>
  </Grid2>
</Grid2>

  )
}

export default UserForm