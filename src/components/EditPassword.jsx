import {useState} from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/constants';

function EditPassword() {

    const [password, setPassword] = useState('');

    const handleUpdate = async () => {
        const res = await axios.patch(
            BASE_URL + "/profile/password",
            {password},
            {withCredentials : true}
        )

        console.log(res);
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card card-border bg-base-100 w-96">
                <div className="card-body">
                    <h2 className="card-title text-2xl ">Change Password</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Old Password</legend>
                        <input type="text" className="input" placeholder="Enter old password" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">New Password </legend>
                        <input type="text" className="input" placeholder="Enter new password" 
                            value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </fieldset>

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleUpdate}> Update </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditPassword
