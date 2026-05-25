import Navbar from './components/navbar.tsx';
import Contacts from './components/Contacts.tsx';
import Home from './components/Home.tsx';
import Events from './components/events.tsx';

export default function Hello(){
    return(<div>
         <Navbar></Navbar>
     <section id='home'>
       <Home></Home>
     </section>
      <section id='events'>
       <Events></Events>
     </section>
     <section id='contacts'>
      <Contacts></Contacts>
     </section>
    </div>)
}