import { useSelector } from 'react-redux';
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import Zoom from 'react-reveal/Zoom';
import { NotificationManager} from 'react-notifications';
import { useParams } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from "../../store/addtocard"
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import "./ProductDetails.css"


const ProductDetails = () => {
    let [product, setProduct] = useState(
        {
            image:{url:""}
        }
    )
    let [count, setCount] = useState(1)
    let [size, setSize] = useState(35)
    // console.log(size)
    let dispatch = useDispatch()
    if (count <= 0) {
        count = 1
    }
    if (size <= 37 || size >= 43) {
        size = 37
    }

    const hadelAdd = (items) => {

        dispatch(add({ ...items, count, size }))
        NotificationManager.success('Added In Your Card');




    }
    const { details } = useParams();
    async function getdata() {
        let resp = await axios.get('/products')
        let item = resp.data.find((val) => {
            if (details === val.name) {
                return true
            }

        })
        setProduct(item)
        console.log(product);
    }
    useEffect(() => {
        getdata()
    }, [])




    return (
        <div>
        <h1 style={{textAlign:"center"}}> Product Details</h1>

        <div style={{display:"flex"}}>

            <Card sx={{ width: "45%", align: "center" }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        width="100%"
                        image={product.image.url}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography sx={{fontFamily:"monospace",textAlign:"center"}} gutterBottom variant="h4" component="div">
                            {product.name}

                        </Typography>
                        <p style={{fontFamily:"system-ui",textAlign:"center"}}>{product.description}</p>



                    </CardContent>
                </CardActionArea>
            </Card>
            <div style={{width:"300px",textAlign:"center"}}>
                <div id="count">
                    <h4>No of Pairs</h4>
                    <button className='btn' style={{width:"50px"}} onClick={() => { setCount(count + 1) }}><spna>+</spna></button>
                    <span>{count}</span>
                    <button className='btn' style={{width:"50px"}} onClick={() => { setCount(count - 1) }}><span>-</span></button>
                </div>
                <div id="size">
                    <h4>Select Size</h4>
                    <button className='btn' style={{width:"50px"}} onClick={() => { setSize(size + 1) }}>+</button>
                    {size}
                    <button  className='btn' style={{width:"50px"}} onClick={() => { setSize(size - 1) }}>-</button>
                </div>
                <button id="btn"   onClick={() => hadelAdd(product)}>Add To Card</button>

            </div>
        </div>
        </div>
    );
};

export default ProductDetails;