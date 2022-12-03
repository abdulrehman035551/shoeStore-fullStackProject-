import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Zoom from 'react-reveal/Zoom';
import Box from '@mui/material/Box';
import {Link} from "react-router-dom"
function Prodindex(props) {
    let [products,setProducts]=useState([
        // {
        //     name: '',
        //     _id:"",
        //     price:"",
        //     description:"",
        //     brand: '',
        //     image:""
        // }
    ])
    const { id } = useParams()
    async function getproducts()
    {
        let resp=await axios.get('/products')
        let specificproduct =resp.data.filter((val) => {
            if(val.brand==id)
            {
                return true
            }
            // return val.brand = "men"
        })
        setProducts(specificproduct)
    }
    useEffect(()=>
    {
        getproducts()
    },[getproducts])
    return (
        <div>
            <Zoom top>
                <Typography id="collection-heading" sx={{ marginTop: "3px", fontFamily: " sans-serif", width: "100", alignItems: "center", justifyContent: "center" }} variant="h3" component="h2" align="center">
                    <span>{id}</span>
                </Typography>
            </Zoom>

            <Box sx={{ justifyContent: "center", width: '100%', display: 'flex', flexWrap: 'wrap', margin: '5px ' }}>
                {
                    products.map((val) => {
                        return <div >
                            <Link to={val.name}>
                                <Card sx={{ width: 300 }}>
                                    <CardActionArea>
                                        <Zoom bottom>
                                            <CardMedia
                                                component="img"
                                                height="200"

                                                image={val.image.url}
                                                alt="green iguana"
                                            >

                                            </CardMedia>
                                        </Zoom>
                                        <CardContent>
                                            <Typography align="center" gutterBottom variant="h4" component="div">
                                                <Zoom top>
                                                    <h6 style={{ fontFamily: "Six Caps', sans-serif" }}>{val.name}</h6>
                                                    <h6> {val.price}$</h6>
                                                </Zoom>
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>


                        </div>
                    })
                }
            </Box>









        </div>
    );
}

export default Prodindex;