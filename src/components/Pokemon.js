import React, { Component } from 'react'; 
import Poket from './Poket';

class Pokemon extends Component {
   
    render(){
        return(
            <ul className="list-poket">
        {this.props.pokemon.map((item)=>{
        return(
        <li className="item-poket">
        <Poket item={item}/>
        </li>

)
})}
      
       </ul>
        )
    }
    
    
    
        
}



export default Pokemon;