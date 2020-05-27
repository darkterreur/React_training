import React from 'react';
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component{

    render() {
        console.log('dashboard props->',this.props);
        if (!this.props.islogged) {
            return <Redirect to='/login' />;
        }else {
            return(
                <div className="container">
                    <h1>Dashboard</h1>
                </div>
            )
        }
    }

}

export default Dashboard;