import { useState } from "react";
 import { useParams } from "react-router-dom";
 import { useHistory } from "react-router-dom";
 import { Link } from "react-router-dom";
const CreateTodo = () => {
    const [val,setVal]=useState([""]);
    const history = useHistory();
    const {id} = useParams()
    console.log(id);
    const handleAdd=()=>{
        const text=[...val,[]]
        setVal(text)
    }
    const handleChange=(onChangeValue,id)=>{
     const inputdata=[...val]
     inputdata[id]=onChangeValue.target.value;
     setVal(inputdata)
    }
    const handleSubmit =() =>{
        const inputdata= { user_list_id: parseInt(id) ,
                            todos: [...val] };
                            console.log(inputdata);
                            
        fetch('http://192.168.100.96:8000/api/todoList',{
            method : 'POST',
            headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
            body   : JSON.stringify(inputdata)
        })
        .then((result)=>{result.json()
        .then((res)=>{ console.log(res);  
                history.go(1);
                history.push(`/blogs/${id}`);
                 })
            })
    
    }
     
 return(
     <div className="create">
        <h2>ADD TODO</h2>
         {val.map((data,id)=>{
             return(
                <div key={id}> 
                     <input value={data} placeholder="Please enter todo" required onChange={e=>handleChange(e,id)} />
                </div>
             )
         })}
          <button onClick={()=>handleAdd()}>Add More</button>&nbsp;&nbsp;
          <button onClick={()=>handleSubmit()}>Create</button>&nbsp;&nbsp;
          <Link to={`/blogs/${id}`}><button>Back Detail</button></Link>
     </div>
 );
}
 
export default CreateTodo;
