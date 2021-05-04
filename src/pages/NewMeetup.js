import {useHistory} from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetup() {
    const history = useHistory();
    function addMeetupHandler(meetupData) {

        fetch(
            'https://meetup-b0996-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            header: {
                'content-Type': 'application/json'
            }
        }
        ).then(()=>{history.replace('/')});

    }
    return (
        <NewMeetupForm AddMeetUp={addMeetupHandler} />
    );
}

export default NewMeetup;