import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BlogList = ({blogs,title}) => {
    const [del,setDel] = useState([])


    function handleClick(id){
        console.log(id)
        fetch(`http://192.168.100.96:8000/api/userList/${id}`,{
            method:'DELETE'

        }).then((result)=>{
            result.json().then((resp)=>{
                console.warn(resp)
               const sethide=del.filter((to)=>to.id !== id);
               console.log(sethide);
               setDel([...sethide])
            })
        })
    }


    useEffect(()=>{
        console.log(blogs.data);
        setDel(blogs.data)
    },[]);

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
             {del.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.name}</h2>
                        <p><b>Email:</b>{blog.email}</p>
                    </Link>
                    <Link to={`/blogs/edit/${blog.id}`}><button>Edit</button></Link>
                 &nbsp;
                 <button onClick={()=>handleClick(blog.id)}>Delete</button> 
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;