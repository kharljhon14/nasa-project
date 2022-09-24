import React, { useEffect, useState } from "react";
import { Apod } from "../models/apod";
import Card from "./Card";
import Detailed from "./Detailed";
import "../styles/CardList.scss";

interface props {
   apods: [Apod];
}

function CardList({ apods }: props) {
   const [selectedApod, setSelectedApod] = useState<Apod>();

   useEffect(() => {
      console.log(selectedApod);
   }, [selectedApod]);

   function handleSelectedApod(apod: Apod) {
      setSelectedApod(apod);
   }

   const renderedCards = apods.map((apod) => {
      return <Card key={apod.title} apod={apod} onSelectedApod={handleSelectedApod} />;
   });
   return <div className="card-list">{selectedApod ? <Detailed selectedApod={selectedApod} /> : renderedCards}</div>;
}
export default CardList;
