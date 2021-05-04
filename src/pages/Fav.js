import { useContext } from 'react';
import  FavoriteContext from '../store/favourites-context'
import MeetupList from '../components/meetups/MeetupList'

function Fav() {
    const favCtrx = useContext(FavoriteContext);
    console.log(favCtrx);
    return (
        <div>
            <MeetupList meetups={favCtrx.favorites}></MeetupList>
        </div>
    );
}



export default Fav;