import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export const Blogdetails = () => {
    const [user,setUser] = useState([]);
    const [todoUser,setTodoUser] = useState([]);
    
    const {id} = useParams();
    const data ={id};
    console.log(todoUser)
    

function detail(){
        fetch('http://192.168.100.96:8000/api/details',{
            method : 'POST',
            headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',},
            body   : JSON.stringify(data)
        })
        .then((result)=>{result.json()
        .then((res)=>{ console.log(res);
                        setUser(res.data) ; 
                        console.log(res.data) ;     
                        setTodoUser(res.data.todos) ;
                        console.log(data);
                        })
        })
    
}
function handleDelete(id){
    console.log(id)
    fetch(`http://192.168.100.96:8000/api/todoList/${id}`,{
        method:'DELETE'

    }).then((result)=>{
        result.json().then((resp)=>{
        console.log(resp);
        const list = todoUser.filter((todo) => todo.id != resp?.data?.id)
        setTodoUser(list);
        })
    })
}

useEffect(()=>{
    detail();
},[])
 
    return ( 
        <div className="blog-details">
             
                <article>
                <Link to={`/addtodo/${user.id}`}><button>ADD TODO</button></Link>
                 <br></br>
                 <br></br>
                    <h2>name: {user.name}</h2>
                    <div><b>email:{user.email}</b> </div>
                    <div><b>Phone:{user.phone}</b> </div>
                    <div><b>Address:{user.address}</b> </div>
                </article>
                <div>
                    <br></br>
                    <h2>User TODO</h2>
                  
                {todoUser.map((todo)=>(
                            <div className="blog-preview" key={todo.id}>
                                 <p><b>{todo.todo}</b></p><br></br>
                                 <Link to={`/edittodo/${todo.id}` }><button>Edit</button></Link>&nbsp;&nbsp;
                                 <button onClick={()=>handleDelete(todo.id)}>Delete</button> 
                                </div>
                        ))}
                </div>
        </div>
     );
}

export default Blogdetails;