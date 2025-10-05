import { BASE_URL } from '../utils/constants.js';
import {useState} from 'react'
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {addUser} from '../utils/userSlice.js';
import {useNavigate} from 'react-router';

function Login() {

  const [emailId, setEmailId] = useState('siftain@gmail.com');
  const [password, setPassword] = useState('Siftain@1234');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async function (){
     try
     {
        const res = await axios.post(
          BASE_URL + "/login",
          {
            emailId,
            password
          },
          {withCredentials : true}
        )

        dispatch(addUser(res.data));
        navigate("/");
     }
     catch(error)
     {
        console.error(error);
     }
  }

  return (
    <div className='flex justify-center my-10'>
      <div className="card card-border bg-base-300 w-96">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>

          <div>

            <fieldset className="fieldset">
              <label className="fieldset-legend">Email Id</label>

              <input type="text" value={emailId} 
                onChange={(e)=>{setEmailId(e.target.value)}} 
                className="input" placeholder="Enter your Email Id" />
            </fieldset>

            <fieldset className="fieldset">
              <label className="fieldset-legend">Password</label>

              <input type="text" value={password} 
                onChange={(e)=>{setPassword(e.target.value)}} 
                className="input" placeholder="Enter your Password" />
            </fieldset>

          </div>

          <div className="card-actions justify-center">
            <button className="btn btn-soft btn-info"
              onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login
