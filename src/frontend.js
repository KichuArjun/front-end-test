import { link } from 'react-router-dom'
import Login from './login';


function Hello(props){
    return (
        <div>
<div className="back" >
        
        <div className="navbar">
            <div className="navitem">
                <h2>NAME</h2>
            </div>
            <div className="navitem">
                <h4>Home</h4>
            </div>
            <div className="navitem">
                <h4>About</h4>
            </div>
            <div className="navitem">
                <h4>Services</h4>
            </div>
            <div className="navitem">
                <h4>Contact</h4>
            </div>
            <div className="navitem">
                <p>Free Trial</p>
            </div>
        </div>
        <div className="main">
            
            
            
            
            
            
    
            <div className="main_item">
                <h1>Login</h1>
            </div>
            <div className="main_item">
                <input type="text" placeholder="email / user name"/>
            </div>
            <div className="main_item">
                <input type="password" placeholder="password"/>
            </div>
            <div className="main_item">
                <a href="">Forgot password ?</a>
            </div>
            <div className="main_item">
                <button>Login</button>
            </div>
            <div className="main_item sine_in" >
                <p>Not a member ?</p><a href="Login">sine in</a>
            </div>
            
        </div>
    
        </div>

        </div>
    )
}


export default Hello;