import { createRoot } from 'react-dom/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.tsx'
import Navbar from './components/navbar.tsx'

createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId="659913033019-0vrih6ajp9q170ku5lc6vvhabgj1mbgg.apps.googleusercontent.com">
           <App />

    </GoogleOAuthProvider>

)
