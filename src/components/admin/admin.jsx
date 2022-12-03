import React from 'react';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { NavLink ,Outlet} from 'react-router-dom';



function Admin(props) {
    return (
        <div>

            <Container component="main"   sx={{width:"100%", aligenItems:"center"}}>
                <Box sx={{position:"relative", left:"47%"  ,width:"70px"}}>
                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                      
                      </Avatar>
                      <Typography component="h1" variant="h5">
                          Admin
                      </Typography>
                </Box>
                <Box sx={{position:"relative", left:"35%" ,margin:"3px" }}>
                   <NavLink to="/admin/createproduct"><Button variant="outlined">Add New Product</Button></NavLink> 
                   <NavLink to="/admin/ordersummary"><Button variant="outlined">Orders Summary</Button></NavLink> 
                   </Box> 
                   <Container>
                    <Outlet></Outlet>
                   </Container>
                     
            </Container>
        </div>
    );
}

export default Admin;