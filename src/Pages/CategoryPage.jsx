import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div className='relative'>
        <div className='absolute z-40'>
        <Header/>
        </div>
        <div className='mt-5'>
            <button onClick={() => navigation(-1)} className='mx-[18.5rem] absolute top-16 rounded-md border-2 px-4 py-1'>
                Back
            </button>
            <h2 className='mx-[25rem] absolute top-[66px] font-bold text-xl'>
                Blogs on <span>{category}</span>
            </h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage