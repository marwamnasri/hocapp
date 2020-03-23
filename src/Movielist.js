import React from "react";
import HOC from "./Hoc";


const List = [
    {name:"VICE", 
    img:"https://media.senscritique.com/media/000018343832/325/Vice.jpg" ,
     rating:3} ,
     {name:"FORET",
      img:"https://fr.web.img6.acsta.net/pictures/19/07/09/16/20/2730316.jpg",
       rating:4},
        {name:"DORA",
         img:"https://fr.web.img6.acsta.net/pictures/19/07/09/16/20/2730316.jpg",
          rating:4},
          {name:"WAR",
           img:"https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/War_official_poster.jpg/220px-War_official_poster.jpg", 
           rating:3},
           {name:"SOL",
            img:"https://fr.web.img6.acsta.net/pictures/19/11/14/11/00/4656952.jpg",
             rating:3},
             {name:"ALITA",
              img:"https://media.senscritique.com/media/000018296111/325/Alita_Battle_Angel.jpg", 
              rating:5}
];

const Movielist = props => {
  return (
      <div className="affich">
          <h1>MOVIES LIST</h1>
      
    <div className="list">
      
      {List.map((el, i) => (
        <div className="Card" >
          
          <h2> Name : {el.name} </h2>
          <span> Rating : {el.rating} </span>
          <img src={el.img} />
        </div>
      ))}
    </div>
    </div>
  );
};
export default HOC(Movielist);
