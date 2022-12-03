import * as React from 'react';
import { useState } from 'react';
import {add} from "/Final Project/onlinestore/src/store/history";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

let url='https://dog.ceo/api/breeds/image/random'
function Home() {
let [pic,setPic]=useState([])
let dipatch=useDispatch()
let navigate=useNavigate()



  async function fetchData()
  {
   
    let resp=await axios.get(url)
    setPic(resp.data.message)
  
  
    
  }
function call()
{
  navigate('/Header')
}
function senddata()
{
  dipatch(add(pic))
}
  return<div>
    <img onClick={senddata} src={pic}></img>
    <button onClick={fetchData}>fetch</button>
    <button onClick={call}>result</button>
  </div>
 }
export default Home;
