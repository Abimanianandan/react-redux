import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsers, getUsers } from './Slice';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const DisplayUsers = () => {
    const users = useSelector((state)=>state.user.users);
    const disPatch = useDispatch();
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async ()=>{
        try {
            const res = await axios.get("https://practice-be-nd0k.onrender.com/api/user/allUsers")
            disPatch(getUsers(res.data.users))
        } catch (error) {
            console.log(error.message);           
        }
    }
    const handleDelete = async(id) =>{
          try {
            await axios.delete(`https://practice-be-nd0k.onrender.com/api/user/${id}`)
            alert("user deleted successfully")
            disPatch(deleteUsers(id))
          } catch (error) {
            console.log(error.message)
          }
    }
    
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3">
            {users.map((item,index)=>{
                return (
                <div className="col" key={index}>
                  <div className="card shadow p-3 mb-5 bg-tertiary rounded">
                    <div className="card-body">
                      <p className="card-text">Name:{item.name}</p>
                      <p className="card-text">Age:{item.age}</p>
                      <p className="card-text">Education:{item.education}</p>
                      <div className="button-container d-flex gap-3">
                         <Link to={`/${item._id}`} className='btn btn-success'>Edit</Link>
                         <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                );
            })}
        </div>
      </div>
    </>
  );
}

export default DisplayUsers