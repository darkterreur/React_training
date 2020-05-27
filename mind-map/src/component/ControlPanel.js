
import React from 'react';
import '../style/controlpanel.css';

class ControlPanel extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            text : ''
        }
    }

    handleChange = (event)=>{

        const {name, value} = event.target;
  
        if (this.props.currentNode) {
            this.props.currentNode.customNode( name, value);
        }
        
    }

    deleteNode = ()=>{
        console.log('deleteNode');
        if (this.props.currentNode) {
            this.props.currentNode.childCallDelete();
        }
    }
 
    render(){
        return (
            <div className="panelWrapper">
                <div className="headerPanel">
                    <span>Setting </span>
                    <span className="deleteElemen" onClick={this.deleteNode} ><i className="fas fa-trash"></i></span>
                </div>
                
                <div className="container ">

                </div>

                <div className="container">
                    <p className="text-center">Title :</p>
                    <input type="text"  className="form-control" placeholder="Text Node" name="text" onChange={this.handleChange} />
                    <hr/>
                    <p className="text-center">Color :</p>
                    
                    <div className="blocBtn">
                        <button type="button" className="btn btn-secondary btnColor" name="backgroundColor" value="orangered" style={{backgroundColor:"orangered"}} onClick={this.handleChange} />
                        <button type="button" className="btn btn-secondary btnColor" name="backgroundColor" value="cornflowerblue" style={{backgroundColor: "cornflowerblue"}} onClick={this.handleChange} />
                        <button type="button" className="btn btn-secondary btnColor" name="backgroundColor" value="yellow" style={{backgroundColor: "yellow"}} onClick={this.handleChange} />
                        <button type="button" className="btn btn-secondary btnColor" name="backgroundColor" value="limegreen" style={{backgroundColor: "limegreen"}} onClick={this.handleChange} />
                    </div>
                    <hr/>
                    <p className="text-center">Radius :</p>
                    <input className="form-control" type="number" name="radius" min="0" max="13" onChange={this.handleChange} />
                </div>
                
            </div>
        )
    }

}

export default ControlPanel