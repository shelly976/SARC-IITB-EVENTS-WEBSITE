import './signin.css';
import axios from 'axios';
import GoogleButton from './../components/googlebutton.tsx';
import { useNavigate } from 'react-router-dom';

export default function signin(){
    const navigate=useNavigate();
    return(<div id='top'>
        <div id='login'><GoogleButton></GoogleButton></div>
        <div ><input id='Ldapid' placeholder="Ldap id"></input></div>
        <div ><input id='password' placeholder="password"></input></div>
        <div id='button'> <button onClick={ ()=>{
            async function hello(){
            const email=document.getElementById('Ldapid').value;
            const password=document.getElementById('password').value;
             const user = await axios.post('http://localhost:8000/api/user/',{  
                email:email,
                password:password
             });    
             console.log(user.data)
             if(user){
                console.log(user.data);
                 localStorage.setItem('user',JSON.stringify(user.data.user));
               localStorage.setItem(
                 'token',
                user.data.access
                  );
                alert('you '+user.data.name+" loggedin successfully");
               navigate('/');
             }else{
                alert('Invalid Credentials');
                navigate('/login');
             }}
             hello();
        }}>Login</button></div>
    </div>);
}