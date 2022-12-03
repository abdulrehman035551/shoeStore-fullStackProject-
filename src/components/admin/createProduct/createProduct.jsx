import axios from 'axios';
import React, { useState } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
function CreateProduct(props) {
    let [image, setImage] = useState("")
    let [name, setName] = useState("")
    let [description, setDescription] = useState("")
    let [price, setPrice] = useState("")
    let [brand, setBrand] = useState("")

    const hadelupload = (async (e) => {
        e.preventDefault()
        let resp = await axios.post('/addproduct', {
            name,
            price,
            brand,
            description,
            image

        })
       if(resp.status=200)
       {
        NotificationManager.success("product add successfully")
       }
    })

    const handleproductimageupload = ((event) => {
        const file = event.target.files[0];
        tansformfile(file)

    })
    const tansformfile = ((file) => {
        const reader = new FileReader()
        if (reader) {
            reader.readAsDataURL(file)
            reader.onloadend = (() => {
                setImage(reader.result)
            })
        }
        else {
            setImage("")
        }
    })
    console.log(image);
    return (
        <div>
            <form onSubmit={hadelupload}>
                <input
                    type="file"
                    accept='image/'
                    required
                    onChange={handleproductimageupload}
                ></input>
                <input type="text" placeholder='product name' required onChange={(e) => setName(e.target.value)}></input>
                <input type="number" placeholder='price' required onChange={(e) => setPrice(e.target.value)}></input>
                <input type="text" placeholder='description' required onChange={(e) => setDescription(e.target.value)}></input>
                <select onChange={(e) => setBrand(e.target.value)}>
                    <option value="">select catgorie</option>
                    <option value="man">men</option>
                    <option value="women">women</option>
                    <option value="kids">children</option>
                    <option value="sale">sale</option>
                    <option value="top">top-catgorie</option>

                </select>
                <button type='submit'>Upload</button>
            </form>



            <div>
                {setImage ? <>
                    <img  src={image} alt="image">
                    </img>
                </> : "image"}
            </div>
        </div>
    );
}

export default CreateProduct;