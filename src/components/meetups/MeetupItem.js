
import { useContext} from 'react';
import {Card,Button} from 'react-bootstrap';
import  FavoriteContext from '../../store/favourites-context'

function MeetupItem(props) {

  const favCtx = useContext(FavoriteContext);

  const itemFavourite = favCtx.itemsinFavorite(props.meetupData.id);
  function toogleFavStatusHa() {

    if(itemFavourite){
      favCtx.removeFavorite(props.meetupData.id);
    }else{
      console.log(props);
      favCtx.addFavorite({
        id:props.meetupData.id,
        title:props.meetupData.title,
        address:props.meetupData.address,
        desc:props.meetupData.description
      });
    }
  }
    return(

<Card
bg={'primary'}
key={props.meetupData.id}
text={'white'}
style={{ width: '18rem' }}
className="mb-2"
>
<Card.Header>{props.meetupData.title}</Card.Header>
<Card.Body>
  <Card.Title>  {props.meetupData.description}</Card.Title>
  <Card.Text>
  {props.meetupData.address}
  </Card.Text>
  <Button onClick={toogleFavStatusHa}>{itemFavourite ? 'Remove From Favourites' : 'To Favourites'}</Button>
</Card.Body>
</Card>
    );
    
}

export default MeetupItem;