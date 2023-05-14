
import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import {  useParams } from "react-router";


const Edit = ({blogs}) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history   = useHistory();
    const {id} =useParams();
    console.log(id)
    const usersData = blogs.data;
    console.log(usersData)
   console.log(id);


    const users = usersData.filter(usr => {
        return usr.id== id ;
      });

    console.log(users);
    console.log(users[0].name)

    function getUsers() {
       
            setName(users[0].name)
            setEmail(users[0].email)
            setPhone(users[0].phone)
            setAddress(users[0].address)
        
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={ 
            name,
            email,
            phone,
            address };

        setIsPending(true);
        
        fetch('http://192.168.100.96:8000/api/userList/'+id,{
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
           history.push('/');
           getUsers()
        })
        
      }
     
      useEffect(()=>{
        getUsers();
    },[])
    
    return ( 
        <div className="create">
            <h2>Edit User</h2>

            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input 
                    type="text"
                    required
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                ></input>
                <label>User Email</label>
                <input 
                    type="text"
                    required
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                ></input>
                  <label>User Phone</label>
                  <input 
                    type="number"
                    required
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                ></input>
                  <label>User address</label>
                <textarea
                    required
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                ></textarea>
               
                {!isPending && <button>Update User</button>}
                { isPending && <button disabled>Updating user...</button>}
                
            </form>
            
        </div>
     );
    
    
}
 
export default Edit;




