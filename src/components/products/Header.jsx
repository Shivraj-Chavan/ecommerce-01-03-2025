import React from 'react'

export default function Header({children}) {
  return (
    <div className='text-center py-5'>
        <h1 className='fs-1' >
            {children}
        </h1>
    </div>
  )
}
