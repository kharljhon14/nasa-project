import React from "react";
import { Apod } from "../models/apod";

import "../styles/Detailed.scss"

interface props {
   selectedApod: Apod;
}

function Detailed({ selectedApod }: props) {
   return (
      <div className="detailed">
         <img src={selectedApod.url} alt="" className="detailed__image" />
         <div className="detailed__content">
            <h1 className="detailed__content-title">{selectedApod.title}</h1>
            <p className="detailed__content-description">{selectedApod.explanation}</p>
         </div>
      </div>
   );
}

export default Detailed;
