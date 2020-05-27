import React from 'react';
import { Redirect } from 'react-router-dom';

class Login extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            email : '',
            password : '',
            remember : false,
        }

        if(this.props.location){
            if (this.props.location.pathname === '/logout'){
                this.props.isauth(false);
                localStorage.clear();
            }
        }
    }

    toggleCkb = (event)=>{
        console.log('toggle->',event.target);

        event.target.value = true;

        if (this.state.remember){
            this.setState({
                remember : false
            })
        } else {
            this.setState({
                remember : true
            })
        }
    }

    handleSubmit = (event)=>{
        event.preventDefault();

        let auth = false;

        if (this.state.email === 'test@test.com' && this.state.password === 'pass'){
            auth = true;
            localStorage.setItem('email', this.state.email);
            localStorage.setItem('remember', this.state.remember);
        } else {
            auth = false;
        }

        this.props.isauth(auth);
    }

    handleChange = (event)=>{
        console.log('even target->',event.target);
        const {name, value} = event.target;

        this.setState({ [name] : value });
    }

    render() {
        console.log('this.state->',this.state);

        if (this.props.islogged) {
            return <Redirect to='/dashboard' />;
        }else {
            return(                
                <div className="container">
                    <h1>Login</h1>

                    <form className="form-signin" onSubmit={this.handleSubmit}>
                        <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" name="email" onChange={this.handleChange}/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" name="password" onChange={this.handleChange}/>
                        <div className="checkbox mb-3">
                            <label>
                                <input type="checkbox" name="remember" checked={this.state.isChecked} value={this.state.remember} onChange={this.toggleCkb}  /> Remember me
                            </label>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                    </form>
                </div>
            )
        }
    }

}

export default Login;