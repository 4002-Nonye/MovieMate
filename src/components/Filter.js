import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Database from '../api/Database'

const Filter = () => {

  return (
   
    <div className='text-white absolute right-0 top-20 z-10 bg-slate-600 p-2 rounded-md w-40 items-center text-right flex flex-col'>
     
        <p>Sci-fi</p>
        <p>Action</p>
        <p>Comedy</p>
    </div>
  )
}

export default Filter