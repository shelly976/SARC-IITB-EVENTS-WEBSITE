import { useEffect, useState } from 'react';
import './navbar.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Navbar() {
    const [photo,setphoto]=useState('');
    const navigate = useNavigate();
    const [name,setname]=useState('');
    const [USER,SETUSER]=useState('');
    useEffect(()=>{
    const user=localStorage.getItem('user');
    const User=JSON.parse(user);
    SETUSER(User);
    },[]);

    return (
        <div id='navbar'>
            <div id='eventsphere'>
                <h1>SARC IIT Bombay</h1>
            </div>

            <div>
                <ul>
                    <li>
                        <a href="/" id='home'>Home</a>
                    </li>
                    <li>
                        <a href='#events' id='events'>Events</a>
                    </li>
                    <li>
                        <a href="#contacts" id='contact'>Contact</a>
                    </li>
                </ul>
            </div>

            {!USER ? (
            <div id="buttons">
                <button
                id="login"
                onClick={() => {
                    navigate('/login');
                }}
                >
                Login
                </button>
            </div>
            ) : (
            <div id="photo">{USER.name}
               <div id='helo'></div>
               <div> <img src={USER.picture} id="image1" /></div>
            </div>
            )}
        </div>
    );
}