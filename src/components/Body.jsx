import Navbar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addUser} from '../utils/userSlice.js';

function Body() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector(store => store.user);


  const fetchUser = async () => {
    try {
       const res = await axios.get(
        BASE_URL + "/profile/view",
        {withCredentials : true}
      )

      console.log(res.data);
      dispatch(addUser(res.data));
    } 
    catch (error) {
      if(error.status == 401)
        navigate("/login");

      console.error(error);
    }
  }

  useEffect(()=>{
    if(!userData)
      fetchUser();
  },[])

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default Body
