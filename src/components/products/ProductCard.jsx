import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({data}) {
    const {title,image,description,id,price}=data
    return (
       <div className='col-md-3 '>
         <Link class="card text-decoration-none" to={`/product-detail/${id}`} style={{width: "18rem"}}>
            <img src={image} class="card-img-top" height={200} alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title.substr(0,18)} {title.length>18 && '...'}</h5>
                    <p class="card-text">
                        {description.substr(0,120)}...
                    </p>
                    <a href="#" class="btn btn-primary">
                        {price}
                    </a>
                </div>
        </Link>
       </div>
    )
}
