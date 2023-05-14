
import EditTodo from "./EditTodo";
import useFetch from "./useFetch";

const Update = () => {
    const { data:blogs , isPending , error } = useFetch('http://192.168.100.96:8000/api/todoList')
    console.log(blogs)
  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <EditTodo blogs={blogs} /> }
    </div>
   
  );
}
 
export default Update;
