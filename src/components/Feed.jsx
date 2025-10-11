import axios from 'axios';
import { BASE_URL } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import { useEffect } from 'react';
import Usercard from './Usercard';

function Feed() {

    const feed = useSelector(store => store.feed);
    const dispatch = useDispatch();

    useEffect(()=>{
        getFeedPage();
    },[]);


    const getFeedPage = async () => {
        try
        {
            // if(feed)
            //     return;

            const res = await axios.get(
                BASE_URL + "/user/feed",
                {withCredentials : true}
            )
            dispatch(addFeed(res.data.data));
        }
        catch(error)
        {
            console.error(error);
        }

    }

    if(!feed || feed.length == 0)
    {
        return (
            <div className='flex justify-center'>
                <h2 className='text-xl my-5'>Reached bottom of the page!!</h2>
            </div>
        )
    }

    return (
        <div className='flex justify-center my-10'>
        { feed && <Usercard user={feed[0]}/>}
        </div>
    )
}

export default Feed
