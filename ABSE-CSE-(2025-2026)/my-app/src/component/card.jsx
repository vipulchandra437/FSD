import react from 'react';
import './card.css';
function card (props) {
  return (
    <div>
        <img id='adi' src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Card Image"/>
      <h1>{props.name}</h1>
      <h3>{props.education}</h3>
    </div>
  )
}

export default card;    