import React from "react";
import ParticipantList from "./components/ParticipantList";
import ParticipantForm from "./components/ParticipantForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appcontent">
        <h1 className="header">Tikkurilan uppopalloharjoitukset</h1>
        <div className="infoDates">
          Harjoitukset joka maanantai ja torstai, lukuunottamatta juhannusta
          edeltävää torstaita 18.6. sekä heinäkuun kahta ensimmäistä viikkoa
          29.6.-12.7.
        </div>
        <div className="info">
          Peliaika 20:30-21:30. Klo 20 mennessä pitää ostaa lippu kassalta.
          Kertalippu 5€ (opiskelijat/eläkeläiset 2,60€). <br />
          Läntinen Valkoisenlähteentie 50, 01300 Vantaa
        </div>

        <div className="content">
          <ParticipantList />
        </div>
      </div>
    </div>
  );
}

export default App;
