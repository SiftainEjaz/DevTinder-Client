import {Link, useNavigate} from 'react-router'
import {useSelector, useDispatch} from 'react-redux';
import {removeUser} from '../utils/userSlice.js';
import {removeFeed} from '../utils/feedSlice.js';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

function Navbar() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);
  
  const handleLogout = async () => {
    try
    {
      await axios.post(
        BASE_URL + "/logout",
        {},
        {withCredentials : true}
      )
      dispatch(removeFeed());
      dispatch(removeUser());
      navigate("/login");

    }
    catch(error)
    {
      console.error(error);
    }
  }

  const handleConnections = () => {
    navigate('/connections');
  }

  return (
    <>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost text-2xl font-stretch-semi-expanded">
             👩🏻‍❤️‍👨🏽 DevTinder</Link>
        </div>
        <div>
          <button className='btn btn-wide bg-amber-200 text-black rounded-2xl' 
            onClick={handleConnections}>Connections</button>
        </div>
        <div className="flex gap-2">
          {user && <div className="dropdown dropdown-end mx-5 flex ">
            <p className='px-4 flex items-center'>Welcome, {user.firstName}</p>
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User's Picture"
                  src={user.photoUrl} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <Link to='/profile' className="justify-between">
                  Edit Profile
                </Link>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>}
        </div>
      </div>
    </>
  )
}

export default Navbar
