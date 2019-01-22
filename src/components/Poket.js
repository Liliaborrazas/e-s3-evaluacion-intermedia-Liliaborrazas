import React, {Component} from 'react';

class Poket extends Component {
    render(){
        const {item, index} = this.props;
        return(
            <li className="itemPoket">
          <div className="poketList">
          <img src={item.url}className="imgPoket" key={index}/>
          <h4 className="titleList" key={index}>
          {item.name}
          </h4>
          <p className="typesPoket" key={index}>
          {item.types.map((type, index)=>{
            return(<ul className="typesPoket">
            <li className="typeItem"key={index}></li>{type}</ul>)
          })}</p> 
          </div>
          </li>   
        );
    }
 
 
 }
 
 
 
 
 export default Poket;
 