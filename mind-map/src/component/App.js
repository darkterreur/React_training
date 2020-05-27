import React from 'react';
import Maps from './Maps';
import ControlPanel from './ControlPanel';


class App extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentNode : null
        }
    }
    
    linkNodePanel = (elem)=>{
        console.log('linkNodePanel->',elem);
        this.setState({
            currentNode : elem
        });
    }

    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <Maps linkNodePanel={this.linkNodePanel}/>
                    </div>
                    <div className="col-3">
                        <ControlPanel currentNode={this.state.currentNode}/>   
                    </div>
                </div>
            </div>
        )
    }




}

export default App