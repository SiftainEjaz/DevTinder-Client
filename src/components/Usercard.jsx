import React from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { updateFeed } from '../utils/feedSlice';
import { useDispatch } from 'react-redux';

function Usercard({user}) {

    const dispatch = useDispatch();

    const {_id,firstName, lastName, age, gender ,about, photoUrl} = user;

    const handleConnectionStatus = async (status, _id) => {
       try
       {    
            const res = await axios.post(
                BASE_URL + "/request/send/" + status + "/" + _id,
                {},
                {withCredentials : true}
            )
            dispatch(updateFeed(_id));
            console.log(res.data.data);

       }
       catch(error)
       {
            console.error(error);
       }


    }

    return (
        <div className='flex-none w-96'>
            <div className="card bg-base-300 w-96 shadow-sm">

                <figure className='w-96 h-96 overflow-hidden'>
                    <img
                        src={photoUrl}
                        alt="Profile Picture" 
                        className='w-full h-full object-cover'
                    />
                </figure>

                <div className="card-body">
                    
                    <h2 className="card-title">{firstName + " " + lastName}</h2>

                    {age ? age : ""} {gender ? gender : ""}
                    <p>{about}</p>
                    
                    <div className="card-actions justify-center">
                        <button className="btn btn-error rounded-2xl"
                            onClick={() => handleConnectionStatus("ignored",_id)}>Ignore</button>
                        <button className="btn btn-primary rounded-2xl"
                            onClick={() => handleConnectionStatus("interested",_id)}>Interested</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Usercard
