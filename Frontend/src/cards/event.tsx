import './event.css';

export default function eventcard({src,title,venue,date,description}:{src:string,title:string,venue:string,date:string,description:string}){
   return(<div>
     <div id='title'>{title}</div>
     <div id='image'>
        <img src={src}></img>
     </div>
     <div id='category'>{venue}</div>
     <div id='date'>{date}</div>
     <div id='description'>{description}</div>
     
   </div>)
}