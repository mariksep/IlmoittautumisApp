import React from "react";
import ParticipantList from "./components/ParticipantList";
import ParticipantForm from "./components/ParticipantForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appcontent">
        <h1 className="header">Tikkurilan uppopalloharjoitukset</h1>
        <div className="info">
          Peliaika 20:30-21:30. Klo 20 mennessä pitää ostaa lippu kassalta.
          Kertalippu 5€ (opiskelijat/eläkeläiset 2,60€). <br />
          Läntinen Valkoisenlähteentie 50, 01300 Vantaa
        </div>

        <h3 className="date">Torstai 11.6.</h3>
        <div className="content">
          <ParticipantList />
          <ParticipantForm />
        </div>
      </div>
    </div>
  );
}

export default App;
