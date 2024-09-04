import { Button } from "@mui/material";

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
                <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                    <Typography component={'h1'} sx={{color: '#000000'}}>User Form</Typography>
                </Grid>
                <Grid>
                    <Typography 
                        component={'label'} 
                        htmlFOr='id'
                        sx={{

                        }}
                        >
                            ID
                        </Typography>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            sx={{width: '400px'}}
                            value={''}
                            onChange={e => {}}
                        />
                </Grid>

                <Grid item xs={12} sm={6} sx={{display:'flex'}}>
                    <Typography component={'h1'} sx={{color: '#000000'}}>User Form</Typography>
                </Grid>
                <Grid>
                    <Typography 
                        component={'label'} 
                        htmlFOr='id'
                        sx={{

                        }}
                        >
                            Name
                        </Typography>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            sx={{width: '400px'}}
                            value={''}
                            onChange={e => {}}
                        />
                </Grid>
                <Button>
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
                </Button>

            </Grid>
    );

}

export default UserForm;