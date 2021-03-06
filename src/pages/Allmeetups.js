import {useState,useEffect} from 'react';
import MeetupList from "../components/meetups/MeetupList";



function Allmeetups() {
    const [isLoading,setisLoading] = useState(true);
    const [loadedMeetups,setLoadedMeetups] = useState([]);

    useEffect(()=>{
        setisLoading(true);
        fetch('https://meetup-b0996-default-rtdb.firebaseio.com/meetups.json').then((response)=>{
        return response.json();
        }).then((data)=>{
            const meetups = [];

            for(const key in data){
                const meetup={
                    id:key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setisLoading(false);
            setLoadedMeetups(meetups);
        })
    },[]);

    if(isLoading){
        return(<section><p>Loading</p></section>);
    }else{
    return (

            <MeetupList meetups={loadedMeetups}/>

    );
}
}

export default Allmeetups;