import { createContext,useState} from 'react';


const FavoriteContext = createContext({
    favorites:[],
    totalFav:0,
    addFavorite:(favMeetup) => {},
    removeFavorite:(meetupid) =>{},
    itemsinFavorite:(meetupid)=>{}
});


export function FavoritesContextProvider(props){
    const[userFav,setUserFav] = useState([]);

    function addFavoriteHandler(favMeetup) {
        setUserFav((prevUserFav)=>{
            console.log("Previous State",prevUserFav);
          return prevUserFav.concat(favMeetup);
      }  );
    }
    function removeFavoriteHandler(meetupid) {
        setUserFav((prevUserFav)=>{
            return prevUserFav.filter(meetup => meetup.id !== meetupid);
        }  );
    }
    function itemsinFavoriteHandler(meetupid) {
        return userFav.some(meetup => meetup.id === meetupid);
    }
    const context ={
        favorites:userFav,
        totalFav:userFav.length,
        addFavorite:addFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        itemsinFavorite:itemsinFavoriteHandler
    }    
    console.log("conad1"+userFav);

    return (<FavoriteContext.Provider value={context}> 
        {props.children}
    </FavoriteContext.Provider>);
}

export default FavoriteContext;