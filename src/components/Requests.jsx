import React, { useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { addRequests } from '../utils/requestSlice.js';
import { useDispatch, useSelector } from 'react-redux';

function Requests() {

  const dispatch = useDispatch();
  const requests = useSelector(store => store.requests);

  useEffect(() => {
    fetchRequests();
  }, [])

  const fetchRequests = async () => {
    try {
      const res = await axios.get(
        BASE_URL + "/user/requests/received",
        { withCredentials: true }
      )

      dispatch(addRequests(res.data.data));
      console.log(res.data.data);

    }
    catch (error) {
      console.error(error);
    }
  }

  if (!requests || requests.length == 0) {
    return <h2>No pending requests!</h2>
  }

  return (
    <div className="my-10 pb-20 text-center">
      <h1 className="text-2xl font-bold text-amber-50 mb-6">Pending Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, about, photoUrl } = request.fromUserId;
        return (
          <div
            key={_id}
            className="flex justify-between items-center gap-4 m-4 p-4 rounded-lg bg-base-300 w-full md:w-2/3 mx-auto shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div className="flex items-center gap-4">
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

            <div className="flex gap-2">
              <button className="btn btn-outline btn-primary">Accept</button>
              <button className="btn btn-outline btn-secondary">Reject</button>
            </div>
          </div>

        )
      })}
    </div>
  );
}

export default Requests
