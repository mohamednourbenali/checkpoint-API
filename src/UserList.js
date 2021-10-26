import axios from 'axios';
import React,{useState,useEffect} from 'react'

const UserList = () => {
    const [list,setList] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then (response => setList(response.data ))
        .catch(function (error){
            console.log(error);
        })
    })
    console.log("list : "+list)
    return (
        <div>
            {list.map(el=><div>
                <h1>Name : {el.name}</h1>
                <h3>email : {el.email}</h3>
                <h6>phone : {el.phone}</h6>
            </div>)}
        </div>
    )
}

export default UserList
