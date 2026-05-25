import axios from "axios";
import Eventcard from "../cards/event";
import { useEffect, useState } from "react";
import './admin.css';
import CreateEvent from './../components/createeventform.tsx';

export default function getevents(){
    const [showform,setshowform]=useState(false);
    const [events,setevents]=useState([]);
    const [updateform,setupdateform]=useState(false);
    const [title, setTitle] = useState("");
    const [imagesrc, setImagesrc] = useState("");
    const [venue, setVenue] = useState("");
    const [date, setDate] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        async function hello(){
            const gevents=await axios.get('http://localhost:8000/api/gevents');
            setevents(gevents.data);
            console.log(gevents.data)
        }
        hello();
    },[]);
    return(<div id='pello'>
        <div id='createevent'><button id='createeventbutton' onClick={()=>{setshowform(true);}}>Create Event</button></div>
        {showform && <CreateEvent/>}
        <div id='evtss'>
       {events.map((event) =>( <div id="eventcarddiv"><Eventcard src={event.imagesrc} title={event.title} venue={event.venue} date={events.date} description={event.description}></Eventcard>
       <div id='shelly'><button id='delete' onClick={async ()=>{
            const token = localStorage.getItem('token');
            const send= await axios.delete(`http://localhost:8000/api/delete-events/${event.id}/`,{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            window.location.reload();
            console.log(send.data);
       }}>delete</button>
       <button id='update' onClick={async()=>{
         setupdateform(true);
       }}>update</button></div>
       {updateform && (<div className="overlay">
          <div className="modal">
            <h2>Update Event</h2>

            <input
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <input
              placeholder="Image URL"
              value={imagesrc}
              onChange={(e) => setImagesrc(e.target.value)}
            />

            <input
              placeholder="Venue"
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
            />

            <input
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <button id='hello' onClick={async ()=>{
                 const token=localStorage.getItem('token');
                 const eventData = {
                        title,
                        imagesrc,
                        venue,
                        date,
                        description
                        };
                const sent= await axios.put(`http://localhost:8000/api/update-events/${event.id}/`,eventData,{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                });
                console.log(sent.data);
                setupdateform(false);
                window.location.reload();
            }
            }>
              Update
            </button>
          </div>
    </div>)}
       </div>))}
    </div></div>
    )
}