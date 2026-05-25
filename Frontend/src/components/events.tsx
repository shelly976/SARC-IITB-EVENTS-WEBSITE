import axios from "axios";
import Eventcard from "../cards/event";
import { useEffect, useState } from "react";
import './events.css';

export default function getevents(){
    const [events,setevents]=useState([]);
    useEffect(()=>{
        async function hello(){
            const gevents=await axios.get('http://localhost:8000/api/gevents');
            setevents(gevents.data);
            console.log(gevents.data)
        }
        hello();
    },[]);
    return(<div id='helloo'>
        <div id='evts'>
       {events.map((event) =>( <div><Eventcard src={event.imagesrc} title={event.title} venue={event.venue} date={events[0].date} description={event.description}></Eventcard></div>))}
    </div></div>
    )
}