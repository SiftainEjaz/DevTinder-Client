import React from 'react'

function Usercard({user}) {
    const {firstName, lastName, age, gender ,about, photoUrl} = user;
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
                        <button className="btn btn-error rounded-2xl">Ignore</button>
                        <button className="btn btn-primary rounded-2xl">Interested</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Usercard
