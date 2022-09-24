import React, { useEffect, useState } from "react";
import { getApods } from "../apis/nasaApi";
import { Apod } from "../models/apod";
import CardList from "./CardList";
import "../styles/App.scss";

function App() {
   const [apods, setApods] = useState<[Apod]>([{ copyright: "", date: "", explanation: "", title: "", url: "", media_type: "" }]);
   useEffect(() => {
      getApods().then((data) => {
         setApods(data);
      });
   }, []);

   return <div className="app">{apods.length > 0 ? <CardList apods={apods} /> : "Loading"}</div>;
}

export default App;
