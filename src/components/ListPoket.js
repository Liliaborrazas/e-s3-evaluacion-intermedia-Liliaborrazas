import React, { Component } from 'react'; 


class ListPoket extends Component {
    constructor(props){
        super(props);
       

    }

    

    render(){
        return(
            <ul className="card-pokemon">
           <div className="card-pokemon__list">
           <li className="list-pokemon">
           <h4 className="title">{this.props.item.name}</h4>
           <img src={this.props.item.url} alt="{this.props.item.name}"/>
           <div className="types-evolution">
           {this.props.item.types.map((i)=>{
             return(
               <ul className="items-evolition">
                 <li className="item-evol">
                   {i}
                 </li>
               </ul>
             )
           })}
           </div>
           </li>
           </div>
           </ul>
        )
    }
    

    
        
}



export default ListPoket;