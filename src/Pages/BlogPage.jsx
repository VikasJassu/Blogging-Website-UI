import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';


const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"; 
    const[blog , setBlog] = useState(null);
    const[relatedblogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {loading , setLoading} = useContext(AppContext);
   

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
      setLoading(true);
      let url = `${newBaseUrl}get-blog?blogId=${blogId}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log("url is :");
        console.log(url);

        setBlog(data.blog);
        setRelatedBlogs(data.relatedBlogs);
      }

      catch(error) {
        console.log("blog id wali call mein dikkat h");
        setBlog(null);
        setRelatedBlogs([]);
      }
      setLoading(false);
    }

    useEffect(() => {
      if(blogId) {
        fetchRelatedBlogs();
      }
    } , [location.pathname])


  return (
    <div className='flex justify-center'>
      <div  className='w-11/12 max-w-[670px]  py-8 flex flex-col gap-y-7 mt-[36px] mb-[36px]  justify-center items-center bg-white'>
      <Header/>
      <div>
        <button onClick={() => navigation(-1)} className='rounded-md border-2 px-4 py-1 -mx-[21rem]'>
          Back
        </button>
      </div>
      {
        loading ?
        (<div> <p>Loading</p> </div>) :
        blog ?
        (<div >
          <BlogDetails post={blog}/>
          
          <h2 className="font-bold text-3xl mt-10 mb-10 ">Related Blogs</h2>

          {
            relatedblogs.map( (post) => (
              <div key={post.id} className='mt-6'>
                <BlogDetails post={post}/>
              </div>
            ))
          }
        </div>) :
        (<div>
          No Blog Found
        </div>)
      }
    </div>
    </div>
  )
}

export default BlogPage