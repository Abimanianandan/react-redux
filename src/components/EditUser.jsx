import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editUsers } from './Slice';

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {id} = useParams()
    const[editUser,setEditUser] = useState({
        name:"",
        password:"",
        age:"",
        education:""
    })
    useEffect(()=>{
        getData()
    },[])
    const getData = async() =>{
        try {
            const res = await axios.get(`https://practice-be-nd0k.onrender.com/api/user/${id}`)
            setEditUser(res.data.user)
        } catch (error) {
          console.log(error.message);           
        }
    }
    const handleSubmit =async (e) =>{
        e.preventDefault()
       try {
        const res = await axios.put(`https://practice-be-nd0k.onrender.com/api/user/${id}`,editUser)
        dispatch(editUsers(res.data.user))
        alert("user updated successfully")
        setEditUser({name:"",password:"",education:"",age:""})
        navigate("/")
       } catch (error) {
         console.log(error.message);        
       }
    }
    const handleChange = (e) =>{
        const {name,value} = e.target;
        setEditUser((data)=>({...data,[name]:value}))
    }

  return (
     <form className="d-flex justify-content-center align-items-center" onSubmit={handleSubmit}>
        <div className="card mt-5 shadow p-3 mb-5 bg-body-secondary rounded" style={{ width: "18rem" }}>
            <h5 className='d-flex justify-content-center'>Edit User</h5>
          <div className="card-body">
            <div className="col-sm-auto mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control"
                onChange={handleChange}
                value={editUser.name}
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
                value={editUser.password}
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
                value={editUser.age}
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
                value={editUser.education}
                name='education'
                required
              />
            </div>
            <button type="submit" className='btn btn-primary'>UpdateUser</button>
          </div>
        </div>
      </form>
  )
}

export default EditUser