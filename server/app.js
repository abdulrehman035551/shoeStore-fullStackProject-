let dotenv=require('dotenv')
dotenv.config({path:'./server/config.env'})
let express = require('express')
let app = express()
var mongoose = require('mongoose')
app.use(express.json())
let cloudinary=require('../server/utils/cloudinary')
const bcrypt = require('bcryptjs');
const webtoken = require("jsonwebtoken")
let DB =process.env.DATABASE
mongoose.connect(DB).then(() => {
  console.log("data base connected");
}).catch((err) =>console.log ("connection fail"))
let Product=require('./database/productSchema')

let User = require('./database/userSchema');

app.listen(6040, () => {
  console.log("server is running");
})
app.get('/', (req, res) => {
  res.send("hello from server")
})
app.get('/products',async(req,res)=>
{
  let pod= await Product.find({})
  res.send(pod)
})
app.post('/addproduct',async(req,res)=>
{

  const {name,brand,description,price,image}=req.body;
  
  try{
    if(image)
    {
    let uploadRes=  await cloudinary.uploader.upload(image,
         )
         if(uploadRes)
         {
           let product=new Product({
             name,
             brand,
             description,
             price,
             image:uploadRes
     
           })
           let saveproduct=await product.save()
           res.send(200)
         }
    }
   
   
  }
  catch(err)
  {
    console.log(err)
    res.send(500)
  }
})


app.post('/signup', async (req, res) => {
  let { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.json(406)
  }
  try {
    const userExist = await User.findOne({ email: email })
    if (userExist) {
      return res.json(407)
    }
    const user = new User({ firstName, lastName, email, password })

    user.save()
    res.json(408)
  } catch (err) {
    console.log(err)
  }
})
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
  
    if (!email || !password) {
      res.json(406)
    }
    let userFind = await User.findOne({ email: email })
    const token = await userFind.generateAuthToken()
    res.cookie("webtoken", token, {
      expires: new Date(Date.now() + 290000000),
      httpOnly: true
    })
    if (userFind) {
      let userPassword = await bcrypt.compare(password, userFind.password)

      if (userPassword) {
        res.json(408)
      }
      else {
        res.json(411)
      }
    }
    else {
      res.json(411)
    }


  }
  catch (err) {
    console.log("err");
  }

})
