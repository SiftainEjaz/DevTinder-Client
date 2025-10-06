import React from 'react'

function Usercard({user}) {
    const {firstName, lastName, age, gender ,about, photoUrl} = user;
    return (
        <div>
            <div className="card bg-base-300 w-96 shadow-sm">

                <figure>
                    <img
                        src={photoUrl}
                        alt="Profile Picture" />
                </figure>

                <div className="card-body">
                    
                    <h2 className="card-title">{firstName + " " + lastName}</h2>

                    {age && gender && <p>{age + " " + gender}</p>}
                    <p>{about}</p>

                    <div className="card-actions justify-center">
                        <button className="btn btn-error">Ignore</button>
                        <button className="btn btn-primary">Interested</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Usercard
