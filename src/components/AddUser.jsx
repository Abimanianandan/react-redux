import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createUsers } from './Slice';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const[newUser,setNewUser] = useState({
        name:"",
        password:"",
        age:"",
        education:""
    })
    const handleSubmit =async (e) =>{
        e.preventDefault()
       try {
        const res = await axios.post(`https://practice-be-nd0k.onrender.com/api/user/register`,newUser)
        dispatch(createUsers(res.data.users))
        alert("user created successfully")
        navigate("/")
        window.location.reload();
        setNewUser({name:"",password:"",education:"",age:""})
       } catch (error) {
         console.log(error.message);        
       }
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setNewUser((data)=>({...data,[name]:value}))
    }

  return (
    <>
      <form className="d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="card mt-5 shadow p-3 mb-5 bg-body-secondary rounded" style={{ width: "18rem" }}>
            <h5 className='d-flex justify-content-center'>Add User</h5>
          <div className="card-body">
            <div className="col-sm-auto mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={handleChange}
                value={newUser.name}
                name='name'
                required
              />
            </div>
          <div className='col-sm-auto mb-3'>
            <input
                type="text"
                placeholder="Password"
                className="form-control"
                onChange={handleChange}
                value={newUser.password}
                name='password'
                required
              />
            </div>
            <div className="col-sm-auto mb-3">
              <input
                type="number"
                placeholder="Age"
                className="form-control"
                onChange={handleChange}
                value={newUser.age}
                name='age'
                required
              />
            </div>
            <div className="col-sm-auto mb-3">
              <input
                type="text"
                placeholder="Education"
                className="form-control"
                onChange={handleChange}
                value={newUser.education}
                name='education'
                required
              />
            </div>
            <button type="submit" className='btn btn-primary'>AddUser</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddUser