import { BASE_URL } from '../utils/constants.js';
import { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import { useNavigate } from 'react-router';

function Login() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async function () {
    try {
      setError("");
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password
        },
        { withCredentials: true }
      )

      dispatch(addUser(res.data));
      navigate("/");
    }
    catch (error) {
      setError(error?.response?.data || "Something went wrong");
    }
  }

  const handleSignUp = async function () {
    try
    {
      const res = await axios.post(
          BASE_URL + "/signup",
          {firstName, lastName, emailId, password},
          {withCredentials : true}
        )

      dispatch(addUser(res.data.data));
      navigate("/profile");
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
          <h2 className="card-title justify-center">{isLogin ? "Login" : "SignUp"}</h2>

          <div>

            {!isLogin && <>
              <fieldset className="fieldset">
                <label className="fieldset-legend">First Name</label>

                <input type="text" value={firstName}
                  onChange={(e) => { setFirstName(e.target.value) }}
                  className="input" placeholder="Enter your first name" />
              </fieldset>

              <fieldset className="fieldset">
                <label className="fieldset-legend">Last Name</label>

                <input type="text" value={lastName}
                  onChange={(e) => { setLastName(e.target.value) }}
                  className="input" placeholder="Enter your last name" />
              </fieldset>
            </>}

            <fieldset className="fieldset">
              <label className="fieldset-legend">Email Id</label>

              <input type="text" value={emailId}
                onChange={(e) => { setEmailId(e.target.value) }}
                className="input" placeholder="Enter your email Id" />
            </fieldset>

            <fieldset className="fieldset">
              <label className="fieldset-legend">Password</label>

              <input type="password" value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                className="input" placeholder="Enter your password" />
            </fieldset>

          </div>
          <p className='text-red-500'>{error}</p>
          <div className="card-actions justify-center">

            <button className="btn btn-soft btn-info"
              onClick={isLogin ? handleLogin : handleSignUp}>{isLogin ? "Login" : "Sign Up"}</button>
          </div>
          <p className='link link-hover m-auto cursor-pointer my-2' 
            onClick={() => setIsLogin((flag) => !flag)}>
              {isLogin ? "Don't have an account? Sign Up" : "Existing User ? Login "}
          </p>
        </div>
      </div>
    </div>    
  )
}

export default Login
