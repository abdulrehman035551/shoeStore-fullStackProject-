import Box from '@mui/material/Box';
import Flip from 'react-reveal/Flip';
import css from "./Home.css"
import axios from 'axios';
import { useState,useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import  "./Home.css"


function Home(props) {

  let [product, setProduct] = useState([])
  async function getproducts() {
    let resp = await axios.get('/products')
    // console.log(resp.data)
    setProduct(resp.data)

  }
  useEffect(() => {
    getproducts()
  }, [])
  let saleshose=product.filter((val)=>
  {
    if(val.brand=="sale")
    return  val
  })
   let shoe=product.filter((val)=>
  {
   
    if(val.brand=="top")
    return val
  })
  
  return (
    <div>
      <Box id="box"
        sx={{
          width: '100%',
          height: '100vh',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundImage: `url(${"background.jpg"})`,
          opacity: '0.8',

        }}>
        <div id="Flip">
          <Flip left >
            <button id="shop-button">Shop Now</button>
          </Flip>
        </div>
      </Box>
      <Typography sx={{textAlign:"center",marginTop:"20px"}} variant='h5'>TOP SNIKERS</Typography>
      <Box sx={{ justifyContent: "center", width: '100%', display: 'flex', flexWrap: 'wrap', margin: '5px ' }}>
        {
           shoe.map((values)=>
          {
            return <Card sx={{ width: 345 ,padding:"10px" }}>
            <CardActionArea>
            <CardMedia
                    component="img"
                    height="240"
                    image={values.image.url}
                    alt="green iguana"
                  />
              <CardContent sx={{textAlign:"center"}}>
                <Typography sx={{fontSize:"20px"}} gutterBottom variant="text" component="div">
                {values.name}
                </Typography>
            
                      <Stack spacing={1} direction="row">
                        <Typography  width={"100%"}  variant="text" >Price{" "}{values.price}$</Typography>


                      </Stack>
                      <Stack  spacing={1} direction="row">
                      <Button width={"100%"}  variant="text">Details</Button>
                      </Stack>
                    

              </CardContent>
            </CardActionArea>
          </Card>
          })
        }
      
      </Box>
      <Typography sx={{textAlign:"center",marginTop:"20px"}} variant='h5'>TOP ITEMS</Typography>

    <div className='banner'>
       
       <Link><img id="kids-img" src='Kids_Desktop.jpg'></img></Link>
      </div> 
      <div className='half-banner'>
      <Link><img id="half-img" src='Women_Desktop.jpg'></img></Link>
      <Link><img id="half-img" src='Men_Desktop.jpg'></img></Link>
      </div>
      <Typography sx={{textAlign:"center",marginTop:"20px"}} variant='h5'>DEAL ZONE</Typography>

      <div className='sale-banner'>
       
       <Link><img id="sale-img" src='sale.jpg'></img></Link>
      </div> 
      <Box sx={{ justifyContent: "center", width: '100%', display: 'flex', flexWrap: 'wrap', margin: '5px ' }}>
        {
            saleshose.map((values)=>
          {
            return <Card sx={{ width: 345 ,padding:"10px" }}>
            <CardActionArea>
            <CardMedia
                    component="img"
                    height="240"
                    image={values.image.url}
                    alt="green iguana"
                  />
              <CardContent sx={{textAlign:"center"}}>
                <Typography sx={{fontSize:"20px"}} gutterBottom variant="text" component="div">
                {values.name}
                </Typography>
            
                      <Stack spacing={1} direction="row">
                        <Typography  width={"100%"}  variant="text" >Price{" "}{values.price}$</Typography>


                      </Stack>
                      <Stack  spacing={1} direction="row">
                      <Button width={"100%"}  variant="text">Details</Button>
                      </Stack>
                    

              </CardContent>
            </CardActionArea>
          </Card>
          })
        }
      
      </Box>
    </div>
  );
}

export default Home;