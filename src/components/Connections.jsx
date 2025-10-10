import { useEffect } from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addConnections } from '../utils/connectionSlice';

function Connections() {

  const connections = useSelector(store => store.connections);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchConnections();
  }, []);

  const fetchConnections = async () => {
    try {
      
      const res = await axios.get(
        BASE_URL + "/user/connections",
        { withCredentials: true }
      )

      dispatch(addConnections(res.data.data));
      console.log(res.data);
    }
    catch (error) {
      console.error(error);
    }
  }


  if (!connections || connections.length === 0) {
    return (
      <div>
        <h1 className='text-2xl text-amber-50'>No connections found!</h1>
      </div>
    )
  }

  return (
    <div className="my-10 pb-20 text-center">
      <h1 className="text-2xl font-bold text-amber-50 mb-6">Connections</h1>

      {connections.map((connection) => {

        const {_id, firstName, about, lastName, photoUrl} = connection;
        
        return (
          <div
            key={_id}
            className="flex items-center gap-4 m-4 p-4 rounded-lg bg-base-300 w-full md:w-1/2 mx-auto shadow-md hover:shadow-lg transition-all duration-200"
          >
            <img
              alt="Profile pic"
              src={photoUrl}
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="text-left">
              <h2 className="font-bold text-xl">{firstName + " " + lastName}</h2>
              <p className="text-sm opacity-80">{about}</p>
            </div>
          </div>
        )
      })}
    </div>
  );

}

export default Connections
