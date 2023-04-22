import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const TagPage = () => {
   const navigation = useNavigate();
   const location = useLocation();
   const tag = location.pathname.split("/").at(-1);
  return (
    <div className='relative'>
        <Header/>
        <div>
            <button onClick={() => navigation(-1)} className='rounded-md border-2 px-4 py-1 -mx-[21rem] translate-y-10'>
                Back
            </button>

            <h2 className='text-xl font-bold mx-[18.5rem] absolute top-[6rem]'>
                Blogs Tagged <span className='text-blue-700'>#{tag}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/> 
    </div>
  )
}

export default TagPage