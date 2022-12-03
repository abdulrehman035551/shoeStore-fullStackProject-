import * as React from "react";
import Container from "@mui/material/Container";
// import Image from "next/image";
import {Link} from "react-router-dom";
import List from '@mui/material/List';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { FaFacebook,FaInstagram,FaGitSquare,FaLinkedin} from "react-icons/fa";

// import Paper from "@mui/material/Paper";

export default function GuestFooter() {
  return (
    <Box sx={{marginTop: '60px', bottom: 0,backgroundColor:"whitesmoke"}} component="footer" square variant="outlined">
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my:1
          }}
        >
          <List sx={{display:"flex",fontSize:"38px",color:"black"}}>
                    <Link to=""><li> <FaFacebook/></li></Link>
                    <Link to=""><li> <FaGitSquare/></li></Link>
                    <Link to=""><li>  <FaInstagram/></li></Link>

                    <Link to=""><li> <FaLinkedin/></li></Link>
                    </List>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography sx={{fontSize:"15px",fontFamily:" sans-serif"}} variant="caption" color="initial">
            Copyright ©2022. [] Created By Abdul Rehman
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}