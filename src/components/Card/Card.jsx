import React from "react";
import "./Card.css"

export const Card = ({isLoading, name, title, description, date, mainImg, personImg}) => {
  return (
    <main>
      <header>
        {isLoading !== "success"? <div className="header-image placeholder"></div> : <img className="header-image" src={mainImg}/>}
        
       
      </header>
      <section>
       
        <h2 className={`title ${isLoading !== "success"?"placeholder": "" }`}>{isLoading !== "success"? "" : title}</h2>
        <p className={`description ${isLoading !== "success"?"placeholder": "" }`}>{isLoading !== "success"? "" : description}</p>
        <div className="person-data-container">
        {isLoading !== "success"? <div className="person-image placeholder"></div> : <img className="person-image" src={personImg}/>}
            
         
          <div className="person-data">
            <p className={`name ${isLoading !== "success"?"placeholder": "" }`}>{isLoading !== "success"? "" : name}</p>
            <p className={`date ${isLoading !== "success"?"placeholder": "" }`}>{isLoading !== "success"? "" : date}</p>
          </div>

        </div>
      </section>
    </main>
  );
};
