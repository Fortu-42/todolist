import React, { Component } from 'react';
import Do from './do';
import "../styles/items.css";

class Items extends Component{

    removeItem(item){
        item.isRemoved = true;
        this.setState({
            Items : this.props.Items
        });
    }

    finishItem(item){
     
        item.isFinished = !item.isFinished

        this.setState({
            Items : this.props.Items
        });        
    }


    addItem(item){
        var newArrayItems = this.props.Items;
      
        if(this.refs.input.value !== ""){
            newArrayItems.unshift({
                text: this.refs.input.value,
                key: Date.now(),
                isFinished: false,
                isRemoved: false,
                isEditing : false   
            });
    
            this.setState({
                Items: newArrayItems
            });
        }
        this.refs.input.value="";
        item.preventDefault();        
    }


     update(text){
         text.isEditing = true;
         this.setState({
             Items: this.props.Items
         });
        }


     handleSubmit(item, text){
        
        item[0].text = text;
        item[0].isEditing = false;
     
       this.setState({
            Items : this.props.Items
        });

    }
       
    render(){
        const notRemoved = this.props.Items.filter(function(obj){
            return obj.isRemoved === false;
        });
        return(
            <div className="wholeContent">
                <form className="formInput" action="" onSubmit={this.addItem.bind(this)}>
                    <input className="textInput" type="text" ref="input" placeholder="What do you have to do?" />
                    <button className="buttonSubmit">Save</button>
                </form>
                <Do {...this.props} 
                    handleSubmit={this.handleSubmit.bind(this)} 
                    update={this.update.bind(this)} 
                    removed={this.removeItem.bind(this)} 
                    finishItem={this.finishItem.bind(this)} 
                    items={notRemoved}/>
            </div>
        );
    }
}

export default Items;
