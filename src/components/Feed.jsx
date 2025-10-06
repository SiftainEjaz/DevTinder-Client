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
            if(feed)
                return;

            const res = await axios.get(
                BASE_URL + "/user/feed",
                {withCredentials : true}
            )
            dispatch(addFeed(res.data));
        }
        catch(error)
        {
            console.error(error);
        }

    }

    return (
        <div className='flex justify-center my-10'>
        { feed && <Usercard user={feed.data[1]}/>}
        </div>
    )
}

export default Feed
