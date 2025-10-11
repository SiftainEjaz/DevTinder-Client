import { BASE_URL } from '../utils/constants.js';
import { useState } from 'react'
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice.js';
import Usercard from './Usercard.jsx';

function Editprofile({ user }) {

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName || '');
    const [age, setAge] = useState(user.age || '');
    const [gender, setGender] = useState(user.gender || '');
    const [about, setAbout] = useState(user.about || '');
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl || '');
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const dispatch = useDispatch();

    const saveProfile = async () => {
        setError('');
        try {
            const res = await axios.patch(
                BASE_URL + "/profile/edit",
                { firstName, lastName, age, gender, about, photoUrl },
                { withCredentials: true }
            )

            dispatch(addUser(res.data.data));
            setShowPopup(true);
            setTimeout(() => { setShowPopup(false) }, 3000);
        }
        catch (error) {
            setError(error?.response?.data || "Something went wrong");
            console.error(error);
        }
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 my-10">

                <div className='flex justify-center my-10'>
                    <div className="card card-border bg-base-300 w-96">
                        <div className="card-body">
                            <h2 className="card-title justify-center">Edit Profile</h2>

                            <div>

                                <fieldset className="fieldset">
                                    <label className="fieldset-legend">First Name</label>

                                    <input type="text" value={firstName}
                                        onChange={(e) => { setFirstName(e.target.value) }}
                                        className="input" placeholder="Enter your First Name" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-legend">Last Name</label>

                                    <input type="text" value={lastName}
                                        onChange={(e) => { setLastName(e.target.value) }}
                                        className="input" placeholder="Enter your Last Name" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-legend">Photo URL</label>

                                    <input type="text" value={photoUrl}
                                        onChange={(e) => { setPhotoUrl(e.target.value) }}
                                        className="input" placeholder="Enter your First Name" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-legend">Age</label>

                                    <input type="text" value={age}
                                        onChange={(e) => { setAge(e.target.value) }}
                                        className="input" placeholder="Enter your age" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-legend">Gender</label>

                                    <select defaultValue="Select the gender"
                                        value={gender} onChange={(e) => setGender(e.target.value)} className="select select-md">
                                        <option disabled={true}>Select the Gender</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </fieldset>

                                <fieldset className="fieldset">
                                    <label className="fieldset-legend">About</label>
                                    
                                    <textarea value={about} onChange={(e)=>setAbout(e.target.value)} className="textarea" placeholder="BIo"></textarea>
                                </fieldset>

                            </div>
                            <p className='text-red-500'>{error}</p>
                            <div className="card-actions justify-center">

                                <button className="btn btn-soft btn-info" onClick={saveProfile}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Usercard user={{ firstName, lastName, age, gender, about, photoUrl }} />
            </div>
            {showPopup && (
                <div
                    role="alert"
                    className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 alert alert-success"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Profile has been updated</span>
                </div>
            )}
        </div>

    )
}

export default Editprofile
