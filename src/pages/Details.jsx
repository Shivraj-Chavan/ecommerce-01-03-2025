import React, { useEffect, useState } from 'react'
import Header from '../components/products/Header'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Details() {
    const {id}=useParams()
    const [apiData,setApiData]=useState([])

     
    useEffect(()=>{
        const getAPiData=async()=>{
          const {data}=await axios(`https://fakestoreapi.com/products/${id}`)
            setApiData(data)
            console.log(data);
        }
        getAPiData()
    },[])
    

  return (
    <div>
        <Header>
            Product Details {id}
        </Header>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img className='img-fluid' src={apiData.image} height={400} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>{apiData.title}</h1>
                    <p>{apiData.description}</p>
                    <button>{apiData.price}</button>
                </div>
            </div>
        </div>
    </div>
  )
}
