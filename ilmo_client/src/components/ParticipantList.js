import React from "react";
import { usePartList } from "../hooks/ApiHooks";
import "../App.css";

const ParticipantList = () => {
  let partArray = usePartList();
  return (
    <div>
      {partArray.length > 0 ? (
        <ol className="listcontent">
          {partArray.map((part) => {
            return (
              <li className="listelement" key={part.id}>
                {part.name} {part.club}
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="listdefault">
          Ilmoittaudu kirjoitamalla nimesi ja seurasi
        </div>
      )}
    </div>
  );
};

export default ParticipantList;
