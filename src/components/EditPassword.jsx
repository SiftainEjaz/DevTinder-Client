import {useState} from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

function EditPassword() {

    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');

    const handleUpdate = async () => {
        try
        {
            const res = await axios.patch(
                BASE_URL + "/profile/password",
                {password},
                {withCredentials : true}
            )
            setShowPopup(true);
            setTimeout(()=>{setShowPopup(false)},3000);
        }
        catch(error)
        {
            setError(error?.response?.data || "Something went wrong");
        }
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title text-2xl ">Change Password</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Old Password</legend>
                        <input type="password" className="input" placeholder="Enter old password" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">New Password </legend>
                        <input type="password" className="input" placeholder="Enter new password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </fieldset>
                    <p className='text-red-500'>{error}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleUpdate}> Update </button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div
                    role="alert"
                    className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 alert alert-success"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Password Updated</span>
                </div>
            )}
        </div>
    )
}

export default EditPassword
