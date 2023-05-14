import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {  useParams } from "react-router";
import { Link } from "react-router-dom";
const EditTodo = ({blogs}) => {
    const [todo,setTodo] = useState('');
    const [user_list_id,setUuid] = useState('')
    const [isPending,setIsPending] = useState(false);
    const history   = useHistory();
    const {id} =useParams();
    console.log(id);
    const todoList = blogs.data
    console.log(todoList)

    const todoid = todoList.filter(usr => {
        return usr.id== id ;
      });
      console.log(todoid);
    //   console.log(todoid[0]. todo)

    function getUsers() {
       
        setTodo(todoid[0].todo)
        setUuid(todoid[0].user_list_id)
       
    
  }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={ todo , user_list_id };

        setIsPending(true);
        
        fetch(`http://192.168.100.96:8000/api/todoList/${id}`,{
            method : 'PUT',
            headers : {
            'Accept': 'application/json',
            'Content-Type': 'application/json',},
             body   : JSON.stringify(data)
        })
        .then(()=>{
            console.log(data);
            setIsPending(false);
           history.go(1);
           history.push(`/blogs/${todoid[0].user_list_id}`);
        getUsers()

        })
        
      }
      useEffect(()=>{
        getUsers();
    },[])

    return ( 
        <div className="create">
            <h2>Create Todo</h2>
            <form onSubmit={handleSubmit}>
            <label>Edit Todo</label>
                <input 
                    type="text"
                    required
                    value={todo}
                    onChange={(e)=> setTodo(e.target.value)}
                ></input>
                 <input 
                    type="hidden"
                    required
                    value={user_list_id}
                    onChange={(e)=> setUuid(e.target.value)}
                ></input>
                {!isPending && <button>Update Todo</button>}
                { isPending && <button disabled>Updating Todo...</button>}&nbsp;&nbsp;
                <Link to={`/blogs/${todoid[0].user_list_id}`}><button>Back Detail</button></Link>
            </form>
        </div>
     );
}
 
export default EditTodo;