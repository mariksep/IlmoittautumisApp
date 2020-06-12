import React from "react";
import { useDateList } from "../hooks/ApiHooks";
import "../App.css";
import DateList from "./DateList";
import CircularProgress from "@material-ui/core/CircularProgress";

const ParticipantList = () => {
  let dateArray = useDateList();
  return (
    <div>
      {dateArray.length > 0 ? (
        <div className="listcontent">
          <>
            {dateArray
              .sort((a, b) => a.time._seconds - b.time._seconds)
              .map((item, i) => (
                <DateList key={i} date={item}></DateList>
              ))}
          </>
        </div>
      ) : (
        <div className="default">
          <CircularProgress
            variant="indeterminate"
            disableShrink
            size={40}
            thickness={4}
          />
        </div>
      )}
    </div>
  );
};

export default ParticipantList;
