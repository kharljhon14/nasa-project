import React from "react";
import { Apod } from "../models/apod";
import "../styles/Card.scss";

interface props {
   apod: Apod;
   onSelectedApod: (apod: Apod) => void;
}

function Card({ apod, onSelectedApod }: props) {
   return (
      <div onClick={()=> onSelectedApod(apod)} style={apod.media_type !== "video" ? { backgroundImage: `url(${apod.url})` } : { backgroundColor: "red" }} className="card">
         <h1 className="card__title">{apod.title}</h1>
      </div>
   );
}

export default Card;
