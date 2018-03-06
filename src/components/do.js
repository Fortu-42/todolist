import React, { Component } from 'react';
import '../styles/do.css';


class Do extends Component{
    constructor(props){
        super(props);

        this.state={
            inputField: ''
        };  

    }


    finishItem(item){
        this.props.finishItem(item);
    }
 
    removeItem(item){
        this.props.removed(item);
    }

    update(item){
        this.props.update(item);
    }

    valueChange(item){
        this.props.valueChange(item);
    }

    handleChange(event) {
        this.setState({
          inputField: event.target.value
        });
      }

      handleSubmit(evt) {
        evt.preventDefault();
        const item = this.props.items.filter((item)=>{
            return item.isEditing === true;
        });
        const newText = this.state.inputField;
        this.props.handleSubmit(item,newText);
        this.setState({
          inputField: ''
        });

        
      }

    renderItems(){
        const notDone = this.props.items;
        var filtered = notDone.filter(function(item){
            return item.isFinished === false;
        });

        return filtered.map((item)=>{
          
                return(
                    <li className="listItem" key={item.key}>

                        {item.isEditing 
                            ?                             
                            <div>
                                <form className="textInput" onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="text" 
                                        id="theInput" 
                                        value={this.state.inputField} 
                                        onChange={this.handleChange.bind(this)} 
                                        ref="inputInline"
                                        placeholder= "What do you have to do?"/>
                                    <input type="submit" />
                                </form>
                                <p className="itemText">{this.state.inputField}</p>
                            </div> 
                            :
                            
                            <p className="itemText" onClick={() => {this.update(item)}}>{item.text}</p>
                            
                            }
                        
                        <button className="buttonItem finishButton" onClick={() => {this.finishItem(item)} }>Finished</button>

                        <button className="buttonItem removeButton" onClick={() => {this.removeItem(item)} }>Remove</button>

                    </li>

                );
        });
    }
    renderDoneItems(){
        const notDone = this.props.items;
        var filtered = notDone.filter(function(item){
            return item.isFinished === true;
        });
          
        return filtered.map((item)=>{
          
                return(
                    <li className="listItemFinished" key={item.key}>

                        {item.isEditing 
                            ?                             
                            <div>
                                <form onSubmit={this.handleSubmit.bind(this)}>
                                    <input type="text" 
                                        id="theInput" 
                                        value={this.state.inputField} 
                                        onChange={this.handleChange.bind(this)} 
                                        ref="inputInline"
                                        placeholder= "What do you have to do?"/>
                                    <input type="submit" />
                                </form>
                                <p className="itemText">{this.state.inputField}</p>
                            </div> 
                            :
                            
                            <p className="itemText" onClick={() => {this.update(item)}}>{item.text}</p>
                            
                            }
                        
                        <button className="unfinishedButton buttonItem" onClick={() => {this.finishItem(item)} }>UnFinished</button>

                        <button className="buttonItem removeButton" onClick={() => {this.removeItem(item)} }>Remove</button>

                    </li>

                );
        });
    }
    render(){
        return(
            <div className="allTasks">
                <ul className="allItems">
                    {this.renderItems()}
                
                    {this.renderDoneItems()}
                
                   
                </ul>
            </div>
        );
    }
}

export default Do;