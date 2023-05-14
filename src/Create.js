import { useState } from "react";
import { useHistory } from "react-router";
const Create = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const [isPending,setIsPending] = useState(false);
    const history   = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data ={ name, email,phone ,address };
        setIsPending(true);

        fetch('http://192.168.100.96:8000/api/userList',{
            method : 'POST',
            headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
            body   : JSON.stringify(data)
        }).then(()=>{
            console.log(data);
            setIsPending(false);
           history.go(1);
           history.push('/');
        })

      }
    
    return ( 
        <div className="create">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <label>User Name</label>
                <input 
                    type="text"
                    required
                    placeholder="Please enter name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                ></input>
                <label>User Email</label>
                <input 
                    type="text"
                    required
                    placeholder="Please enter email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                ></input>
                  <label>User Phone</label>
                  <input 
                    type="number"
                    required
                    placeholder="Please enter Phone number"
                    value={phone}
                    onChange={(e)=> setPhone(e.target.value)}
                ></input>
                  <label>User address</label>
                <textarea
                    required
                    placeholder="Please enter address"
                    value={address}
                    onChange={(e)=> setAddress(e.target.value)}
                ></textarea>
               
                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding blog...</button>}
                
            </form>
        </div>
     );
}
 
export default Create;


