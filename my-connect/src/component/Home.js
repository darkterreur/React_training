import React from 'react';
import Dashboard from './Dashboard';
import Login from './Login';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            isLogged : (localStorage.getItem('isLogged'))? localStorage.getItem('isLogged') :false,
        }
    }

    isAuth = (auth)=>{
        console.log('isAuth auth->',auth);

        this.setState({
            isLogged : auth
        });
        if (auth === true) {
            localStorage.setItem('isLogged', auth);
        }
        
    }

    render() {

        return(
            <div>
                <h1>Home</h1>

                <Router>
                    <nav className="navbar navbar-expand-sm bg-light navbar-light">
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="nav navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    {(this.state.isLogged) ? <Link className="nav-link" to="/logout">Logout</Link> : <Link className="nav-link" to="/login">Login</Link>}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" />

                        {/* <Route path={ (this.state.isLogged) ? "/logout" : "/login"} render={(props)=>( <Login {...props} isauth={this.isAuth} islogged={this.state.isLogged} /> ) } /> */}

                        <Route  path="/logout" render={(props)=>( <Login {...props} isauth={this.isAuth} islogged={this.state.isLogged} /> )} />

                        <Route path="/login" render={(props)=>( <Login {...props} isauth={this.isAuth} islogged={this.state.isLogged} /> )} />
                        
                        <Route path="/dashboard" render={(props)=>( <Dashboard {...props} islogged={this.state.isLogged} /> )} />
                    </Switch> 
                </Router>
            </div>
        )
    }

}

export default Home;