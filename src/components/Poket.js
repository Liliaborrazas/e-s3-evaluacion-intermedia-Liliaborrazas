import React, {Component} from 'react';

class Poket extends Component {
    render(){
        const {item} = this.props;
        return(
          <div className="poketList">
            <img src={item.url} alt={item.name} className="imgPoket"/>
            <h4 className="titleList">
                {item.name}
            </h4>
            <ul className="typesPoket">
                {item.types.map((type, index)=>{
                    return (
                        <li className="typeItem" key={index}>{type}</li>
                    )
                })}
            </ul>
        </div>
            
        );
    }
 
 
 }
 
 
 export default Poket;
 