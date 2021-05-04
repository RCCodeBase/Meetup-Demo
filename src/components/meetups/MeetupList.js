import Meetupitem from './MeetupItem';
import {CardDeck} from 'react-bootstrap'
function MeetupList(props) {
    return(
        <CardDeck style={{padding:'1%'}}>
            {
                props.meetups.map((items)=>{
                  return  <Meetupitem key={items.id} meetupData={items}/>
                })
            }
        </CardDeck>
    );
    
}
export default MeetupList;