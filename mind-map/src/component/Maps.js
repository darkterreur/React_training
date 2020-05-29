import React from 'react';
import '../style/maps.css';

class Maps extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            child : [],
            idParent : (this.props.parent)? this.props.parent+1 : 1,
            text : '',
            backgroundColor : '',
            radius : '',
        }
    }

    addElemen = (event)=>{
        event.stopPropagation();

        let elem = this.state.child;
        elem.push({});

        this.setState({
            child : elem
        });
    }

    callPanel = ()=>{

        this.props.linkNodePanel(this);
    }

    customNode = (name, value)=>{
        this.setState({ [name] : value });
    }

    deleteChild = (key)=>{
        console.log('deleteChild key->',key);
        console.log('deleteChild this.state.child->',this.state.child);
        // if (this.state.child.length > 0)
        
        let aChild = this.state.child;
        aChild.splice(2,1);


        console.log('deleteChild aChild->',aChild);
        console.log('deleteChild this.state.child->',this.state.child);

        this.setState({
            child : aChild
        });
    }

    childCallDelete = ()=>{
        this.props.parentDeleteChild(this.props.keyMap);
    }


    render(){
       
        let valRadius = '';
        if (this.state.radius !== '')
            valRadius = this.state.radius+'px';

        return(
            <div className="wrapper">
                <div className="parent" style={{ backgroundColor : this.state.backgroundColor, borderRadius: valRadius }} >
                    <div className="clickArea" onClick={this.callPanel}>
                        <span>{ (this.state.text !== '') ? this.state.text : 'Maps - '+this.state.idParent }</span>
                    </div>
                    <span className="addElemen" onClick={this.addElemen}><i className="fas fa-plus-circle"></i></span>
                </div>
                <div className="children">

                    {this.state.child.map((value, key)=>{
                        return <Maps key={key} keyMap={key} parent={this.state.idParent} parentDeleteChild={this.deleteChild}  linkNodePanel={this.props.linkNodePanel} />
                    })}
                   
                </div>
            </div>
        )
    }



}

export default Maps