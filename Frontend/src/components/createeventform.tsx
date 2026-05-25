import axios from 'axios';
import './createevent.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Events() {
    const navigate=useNavigate();
  const [title, setTitle] = useState("");
  const [imagesrc, setImagesrc] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = async () => {
    const token=localStorage.getItem('token');
    const eventData = {
      title,
      imagesrc,
      venue,
      date,
      description
    };
    const sent=await axios.post('http://localhost:8000/api/create-events/',eventData,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    });
    console.log(sent);  
    console.log(eventData);
    window.location.reload();
  };

  return (
        <div className="overlay">
          <div className="modal">
            <h2>Create Event</h2>

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

            <button id='hello' onClick={handleCreate}>
              Create
            </button>
          </div>
    </div>
  );
}
