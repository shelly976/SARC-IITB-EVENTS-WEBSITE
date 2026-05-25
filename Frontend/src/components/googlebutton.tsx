import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();
  const handleSuccess = async (credentialResponse: CredentialResponse) => {
    try {
      const res = await axios.post(
        'http://localhost:8000/api/google-login/',
        {
          token: credentialResponse.credential
        }
      );
     console.log(res.data);
     localStorage.setItem('user',JSON.stringify(res.data.user));
     localStorage.setItem(
        'token',
        res.data.access
      );
    navigate('/');

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={() => console.log('Login Failed')}
      />
    </div>
  );
}