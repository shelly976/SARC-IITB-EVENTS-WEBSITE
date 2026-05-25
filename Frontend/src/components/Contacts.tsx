import './contact.css';

export default function Contacts(){
    return(<div id='yes'>
      <h1 id='tello'>Contact us</h1> 
       <div id='change'>
        <div id='linkedin' className="links"><a href="https://www.linkedin.com/company/sarc-iitbombay/"><h3 className='text'>LinkedIn</h3></a></div>
        <div id='Youtube' className="links"><a href="https://www.youtube.com/user/SARCIIT"><h3 className="text">Youtube</h3></a></div>
        <div id='facebook' className="links"><a href="https://www.facebook.com/SARC.IITB"><h3 className="text">Facebook</h3></a></div>
        <div id='instagram' className="links"><a href="https://www.instagram.com/sarc_iitb/"><h3 className="text">Instagram</h3></a></div>
       </div>
    </div>);
}