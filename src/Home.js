import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data:blogs , isPending , error } = useFetch('http://192.168.100.96:8000/api/userList/')
    console.log(blogs)
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
    </div>
   
  );
}
 
export default Home;
