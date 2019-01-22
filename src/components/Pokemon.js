import React, {Component} from 'react';
import Poket from './Poket'; 

class Pokemon extends Component {
   render(){
       return(
        <ul className="pokemon-list">
        {this.props.pokemon.map((item,index)=>{
          return(
            <li className="poketList" key={index}>
              <Poket item={item} />
            </li>
          )
        })}
        </ul>
       );
   }

}

export default Pokemon;












