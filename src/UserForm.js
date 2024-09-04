import { Button, Grid, Input, Typography, TextField } from '@mui/material'

const UserForm = props => {
    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: '#ffffff',
                marginBottom: '30px',
                display: 'block',
            }}
        >
            <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                <Typography component={'h1'} sx={{ color: '#000000' }}>User Form</Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
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
                    value={''}
                    onChange={e => {}}
                    variant="outlined" // Using Material-UI TextField for consistent styling
                />
            </Grid>

            <Grid item xs={12} sm={6}>
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
                    value={''}
                    onChange={e => {}}
                    variant="outlined" // Using Material-UI TextField for consistent styling
                />
            </Grid>

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
        </Grid>
    );
}

export default UserForm;
