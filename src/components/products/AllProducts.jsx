import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function AllProducts() {
    const [apiData,setApiData]=useState([])

    
    useEffect(()=>{
        const getAPiData=async()=>{
          const {data}=await axios("https://fakestoreapi.com/products")
            setApiData(data)
            console.log(data);
        }
        getAPiData()
    },[])
    

  return (
  <div className="container">
      <div className='row'>
        {
            apiData.map((data,ind)=><ProductCard data={data} key={ind} />)
        }
    </div>
  </div>
  )
}
