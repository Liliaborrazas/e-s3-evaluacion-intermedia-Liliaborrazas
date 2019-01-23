import React, { Component } from 'react';

class Poket extends Component {
    render(){
        const {item} = this.props;
        return(
            <div className="card-poket">
            <img src={item.url} alt={item.name}/>
            <h4 className="title-poket">{item.name}</h4>
             <ul className="type-poket">
             {item.types.map((type, index)=>{
               return(
                 <li key={index}>{type}</li>
               )
             })}
              
            </ul>
            </div>
        )
    }
}






export default Poket;