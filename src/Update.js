import Edit from "./Edit";
import useFetch from "./useFetch";

const Update = () => {
    const { data:blogs , isPending , error } = useFetch('http://192.168.100.96:8000/api/userList/')
    console.log(blogs)
  return (
    <div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <Edit blogs={blogs} /> }
    </div>
   
  );
}
 
export default Update;
