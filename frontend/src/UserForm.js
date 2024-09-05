import { Button, Input, Typography, TextField, Grid2 } from '@mui/material'
import { useState } from 'react';

const UserForm = props => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    return (
        <Grid2
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid2 item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid2>
            
            <Grid2 item xs={12} sm={6}>
                <Typography 
                    component={'label'} 
                    htmlFor='id' 
                    sx={{ marginBottom: '8px', display: 'block' }}
                >
                    ID
                </Typography>
                <TextField
                    type="number"
                    id="id"
                    name="id"
                    sx={{ width: '400px' }}
                    value={id}
                    onChange={e => setId(e.target.value)}
                    variant="outlined" // Using Material-UI TextField for consistent styling
                />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
                <Typography 
                    component={'label'} 
                    htmlFor='name' 
                    sx={{ marginBottom: '8px', display: 'block' }}
                >
                    Name
                </Typography>
                <TextField
                    type="text"
                    id="name"
                    name="name"
                    sx={{ width: '400px' }}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    variant="outlined" // Using Material-UI TextField for consistent styling
                />
            </Grid2>

            <Button
                sx={{
                    margin: 'auto',
                    marginBottom: '20px',
                    backgroundColor: '#00c6e6',
                    color: '#000000',
                    marginLeft: '15px',
                    marginTop: '20px',
                    '&:hover': {
                        opacity: '0.7',
                        backgroundColor: '#00c6e6'
                    }
                }}
            >
                Submit
            </Button>
        </Grid2>
    );
}

export default UserForm;
