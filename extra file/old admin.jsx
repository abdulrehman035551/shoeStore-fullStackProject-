import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import 'react-notifications/lib/notifications.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import axios from "axios"
import { NotificationManager } from 'react-notifications';
function Admin(props) {
    function updateData() {

    }
    function handleSubmit() {

    }
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                      
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Admin
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                           
                                <TextField
                                    autoComplete="given-name"
                                    name="Product Name"
                                    required
                                    fullWidth
                                    id="Product Name"
                                    label="Product Name"
                                    autoFocus
                                    onChange={updateData}
                                />
                                <Box  sx={{ minWidth: 120, marginTop: 2.3 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">category</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={age}
                                            label="category"
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={"men"}>Men</MenuItem>
                                            <MenuItem value={"women"}>Women</MenuItem>
                                            <MenuItem value={"children"}>Children</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                  
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="description"
                                    label="description"
                                    name="description"
                                    autoComplete="high quality shose"
                                    onChange={updateData}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    type="number"
                                    name="price"
                                    label="price"
                                   
                                    id="price"
                                    autoComplete="price"
                                    onChange={updateData}
                                />
                            </Grid>
                
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                           Upload 
                        </Button>
                      
                       
                    </Box>
                </Box>
            </Container>

        </div>
    );
}

export default Admin;